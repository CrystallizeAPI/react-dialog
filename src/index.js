import React from "react";
import A11yDialog from "a11y-dialog";
import PropTypes from "prop-types";

import Alert from "./alert";
import Confirm from "./confirm";
import Dialog from "./dialog";
import {
  StyledWrapper,
  StyledButtonOk,
  StyledButtonCancel,
  StyledButtonClose,
  StyledH1
} from "./styled-wrapper";

import {
  WrapperCmp,
  LegacyBackdrop,
  Button,
  H1,
  CloseButton,
  legacyBackdropClassName
} from "./styles";

let onAddFn;
let onCloseFn;

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
    onAddFn({
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
  if (onCloseFn) {
    onCloseFn();
  }
}

class StateAndWrapper extends React.PureComponent {
  static propTypes = {
    cleanTheme: PropTypes.bool,
    ButtonOk: PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.object,
      PropTypes.node
    ]),
    ButtonCancel: PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.object,
      PropTypes.node
    ]),
    ButtonClose: PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.object,
      PropTypes.node
    ]),
    Heading: PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.object,
      PropTypes.node
    ])
  };

  static getDerivedStateFromProps(nextProps) {
    const { cleanTheme } = nextProps;

    let state = {};
    state.ButtonOk =
      nextProps.ButtonOk || (cleanTheme ? Button : StyledButtonOk);
    state.ButtonCancel =
      nextProps.ButtonCancel || (cleanTheme ? Button : StyledButtonCancel);
    state.ButtonClose =
      nextProps.ButtonClose || (cleanTheme ? CloseButton : StyledButtonClose);
    state.Heading = nextProps.Heading || (cleanTheme ? H1 : StyledH1);

    return state;
  }

  componentDidCatch(error, info) {
    console.log(error, info);
  }

  state = {
    current: null,
    queue: [],
    shown: false,
    feedback: null
  };

  componentDidMount() {
    onAddFn = this.onAdd;
    onCloseFn = this.hide;

    this.unsubscribe = () => {
      onAddFn = null;
      onCloseFn = null;
    };
  }

  componentWillUnmount() {
    if (this.unsubscribe) {
      this.unsubscribe();
    }
    clearTimeout(this.suspendCloseTimeout);
  }

  onAdd = item => {
    // Todo: Use an argument validation library that supports IE11
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
      this.dialog.on("hide", this.onHideFromDialog);
      this.dialog.show();

      // Don't allow for any action the next 300ms
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

  onHideFromDialog = () => {
    const { current } = this.state;
    if (current.type === "confirm") {
      this.onHide("cancel", true);
    } else {
      this.onHide(this.state.feedback, true);
    }
  };

  onHide = (feedback = this.state.feedback, fromDialog) => {
    this.state.current.resolve(feedback);

    if (!fromDialog) {
      this.dialog.destroy();
    }

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
      ButtonClose
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
    const { cleanTheme } = this.props;
    const renderCmp = this.getCurrentComponent();

    if (!renderCmp) {
      return null;
    }

    const clean = (
      <WrapperCmp ref={this.getRef} onClick={this.onClick}>
        <LegacyBackdrop tabIndex="-1" onClick={this.onClick} />
        {renderCmp}
      </WrapperCmp>
    );

    if (cleanTheme) {
      return clean;
    }

    return <StyledWrapper>{clean}</StyledWrapper>;
  }
}

export const Wrapper = StateAndWrapper;
