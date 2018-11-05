import React from "react";
import { translate } from "react-i18next";
import ee from "event-emitter";
import A11yDialog from "a11y-dialog";

import Alert from "./alert";
import Confirm from "./confirm";
import Dialog from "./dialog";

import {
  WrapperCmp,
  LegacyBackdrop,
  Button,
  H1,
  CloseButton,
  legacyBackdropClassName
} from "./styles";

const emitter = ee();

function showSomething(type, data) {
  const state = {
    title: null,
    body: data,
    buttons: {},
    showCloseButton: type === "dialog"
  };

  if (typeof data !== "string") {
    Object.assign(state, data);
  }

  return new Promise(resolve => {
    emitter.emit("add", {
      ...state,
      type,
      resolve
    });
  });
}

export function showAlert(data) {
  return showSomething("alert", data);
}

export function showConfirm(data) {
  return showSomething("confirm", data);
}

export function showDialog(data) {
  return showSomething("dialog", data);
}

export function closeCurrent() {
  emitter.emit("hideCurrent");
}

class StateAndWrapper extends React.PureComponent {
  static getDerivedStateFromProps(nextProps, prevState) {
    let state = {};
    state.ButtonOk = nextProps.ButtonOk || Button;
    state.ButtonCancel = nextProps.ButtonCancel || Button;
    state.Heading = nextProps.Heading || H1;
    state.ButtonClose = nextProps.ButtonClose || CloseButton;

    return state;
  }

  state = {
    current: null,
    queue: [],
    shown: false,
    feedback: null
  };

  componentDidMount() {
    emitter.on("add", this.onAdd), emitter.on("hideCurrent", this.hide);

    this.unsubscribe = () => {
      emitter.off("add", this.onAdd);
      emitter.off("hideCurrent", this.hide);
    };
  }

  componentWillUnmount() {
    if (this.unsubscribe) {
      this.unsubscribe();
    }
    clearTimeout(this.suspendCloseTimeout);
  }

  onAdd = item => {
    // Todo: Find other argument validation library that supports IE11
    // ow(item, ow.object);
    // ow(item.type, ow.string);
    // ow(item.title, ow.any(ow.string, ow.nullOrUndefined));
    // ow(item.body, ow.any(ow.string, ow.object));
    // ow(item.buttons, ow.object);
    // ow(item.resolve, ow.function);

    const { queue, current } = this.state;

    if (!current) {
      this.setState(
        {
          current: item
        },
        this.show
      );
    } else {
      this.setState({
        queue: [...queue, item]
      });
    }
  };

  show = () => {
    if (this.state.current) {
      this.dialog = new A11yDialog(this.el);
      this.dialog.on("hide", this.onHide);
      this.dialog.show();

      // this.oldBodyOverflow = document.body.style.overflow;
      // document.body.style.overflow = "hidden";

      this.suspendClose = true;
      this.suspendCloseTimeout = setTimeout(
        () => (this.suspendClose = false),
        300
      );
    }
  };

  hide = () => {
    if (this.state.current && !this.suspendClose) {
      this.dialog.hide();
    }
  };

  hideWithFeedback = feedback => {
    this.setState({ feedback }, () => this.hide());
  };

  onHide = (feedback = this.state.feedback) => {
    this.state.current.resolve(feedback);
    this.dialog.destroy();

    // document.body.style.overflow = this.oldBodyOverflow;

    let newCurrent = null;
    let newQueue = [...this.state.queue];
    if (newQueue.length) {
      newCurrent = newQueue.shift();
    }

    this.setState(
      {
        current: newCurrent,
        queue: newQueue,
        feedback: null
      },
      this.show
    );
  };

  onDialogChange = feedback => this.setState({ feedback });

  hideWithFeedback = feedback => this.onHide(feedback);

  getCurrentComponent() {
    const {
      current,
      ButtonOk,
      ButtonCancel,
      Heading,
      ButtonClose
    } = this.state;

    if (!current) {
      return null;
    }

    const sharedProps = {
      state: current,
      hide: this.hide,
      hideWithFeedback: this.hideWithFeedback,
      ButtonOk,
      ButtonCancel,
      Heading,
      ButtonClose,
      t: this.props.t
    };

    switch (current.type) {
      case "alert": {
        return <Alert {...sharedProps} />;
      }
      case "confirm": {
        return <Confirm {...sharedProps} />;
      }
      case "dialog": {
        return <Dialog {...sharedProps} />;
      }
      default: {
        return null;
      }
    }
  }

  getRef = el => (this.el = el);

  onClick = e => {
    if (this.state.current.type !== "confirm") {
      if (
        e.target.tagName === "DIALOG" ||
        e.target.classList.contains(legacyBackdropClassName)
      ) {
        this.hide();
        e.preventDefault();
      }
    }
  };

  render() {
    const renderCmp = this.getCurrentComponent();

    if (!renderCmp) {
      return null;
    }

    return (
      <WrapperCmp ref={this.getRef} onClick={this.onClick}>
        <LegacyBackdrop tabIndex="-1" onClick={this.onClick} />
        {renderCmp}
      </WrapperCmp>
    );
  }
}

export const Wrapper = translate()(StateAndWrapper);
