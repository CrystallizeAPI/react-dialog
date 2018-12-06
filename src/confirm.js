import React from "react";

import Skeleton from "./skeleton";

import { Buttons } from "./styles";

export default class Confirm extends React.Component {
  hideWithFeedbackOk = () => this.props.hideWithFeedback("ok");
  hideWithFeedbackCancel = () => this.props.hideWithFeedback("cancel");

  render() {
    const { state, ButtonOk, ButtonCancel, ...rest } = this.props;

    const { title, body, buttons = {} } = state;

    let BtnOk = ButtonOk;
    let btnOkText = "Ok";
    if (buttons.ok) {
      if (typeof buttons.ok === "string") {
        btnOkText = buttons.ok;
      } else {
        BtnOk = buttons.ok;
      }
    }

    let BtnCancel = ButtonCancel;
    let btnCancelText = "Cancel";
    if (buttons.cancel) {
      if (typeof buttons.cancel === "string") {
        btnCancelText = buttons.cancel;
      } else {
        BtnCancel = buttons.cancel;
      }
    }

    return (
      <Skeleton title={title} type="confirm" {...rest}>
        {body}
        <Buttons>
          <BtnOk onClick={this.hideWithFeedbackOk}>{btnOkText}</BtnOk>
          <BtnCancel onClick={this.hideWithFeedbackCancel}>
            {btnCancelText}
          </BtnCancel>
        </Buttons>
      </Skeleton>
    );
  }
}
