import React from "react";
import Emittery from "emittery";
import A11yDialog from "a11y-dialog";
import ow from "ow";
import styled from "styled-components";

import Alert from "./alert";
import Confirm from "./confirm";

const Backdrop = styled.div`
  background: rgba(0, 0, 0, 0.2);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`;

const Outer = styled.div`
  &[data-a11y-dialog-native] > :first-child {
    display: none;
  }

  &:not([data-a11y-dialog-native]) dialog {
    position: absolute;
    top: 0;
    left: 0;
    width: 400px;
    z-index: 9999;
  }

  ${Backdrop} {
    z-index: 9998;
  }

  dialog {
    border: none;
    padding: 0;

    &[open] {
      display: block;
    }
  }

  .dialog-container[aria-hidden="true"] {
    display: none;
  }
`;

const emitter = new Emittery();

function showSomething(type, data) {
  let title = data;
  let body = data;

  if (typeof data !== "string") {
    title = data.title;
    body = data.body;
  }

  return new Promise(resolve => {
    emitter.emit("add", {
      type,
      title,
      body,
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

export class Wrapper extends React.PureComponent {
  state = {
    current: null,
    queue: [],
    shown: false,
    feedback: null
  };

  componentDidMount() {
    this.unsubscribe = emitter.on("add", this.onAdd);
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  onAdd = item => {
    ow(item, ow.object);
    ow(item.type, ow.string);
    ow(item.title, ow.string);
    ow(item.body, ow.any(ow.string, ow.object));
    ow(item.resolve, ow.function);

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
    }
  };

  hide = () => {
    if (this.state.current) {
      this.dialog.hide();
    }
  };

  hideWithFeedback = feedback => {
    this.setState({ feedback }, () => this.dialog.hide());
  };

  onHide = (feedback = this.state.feedback) => {
    this.state.current.resolve(feedback);
    this.dialog.destroy();

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
    const { current } = this.state;

    if (!current) {
      return null;
    }

    const sharedProps = {
      ...current,
      hide: this.hide,
      hideWithFeedback: this.hideWithFeedback
    };

    switch (current.type) {
      case "alert": {
        return <Alert {...sharedProps} />;
      }
      case "confirm": {
        return <Confirm {...sharedProps} />;
      }
      default: {
        return null;
      }
    }
  }

  getRef = el => (this.el = el);

  onClick = e => {
    if (e.target.tagName === "DIALOG") {
      this.dialog.hide();
    }
  };

  render() {
    const renderCmp = this.getCurrentComponent();

    if (!renderCmp) {
      return null;
    }

    return (
      <Outer innerRef={this.getRef} onClick={this.onClick}>
        <Backdrop tabIndex="-1" data-a11y-dialog-hide />

        <dialog aria-labelledby="crystallize-dialog-title">{renderCmp}</dialog>
      </Outer>
    );
  }
}
