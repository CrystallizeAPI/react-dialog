import React from "react";
import { translate } from "react-i18next";

import Skeleton from "./skeleton";

import { Buttons } from "./styles";

class Confirm extends React.Component {
  render() {
    const {
      state,
      ButtonOk,
      ButtonCancel,
      hideWithFeedback,
      t,
      ...rest
    } = this.props;

    const { title, body, buttons = {} } = state;

    let BtnOk = ButtonOk;
    let btnOkText = t("ok");
    if (buttons.ok) {
      if (typeof buttons.ok === "string") {
        btnOkText = buttons.ok;
      } else {
        BtnOk = buttons.ok;
      }
    }

    let BtnCancel = ButtonCancel;
    let btnCancelText = t("cancel");
    if (buttons.cancel) {
      if (typeof buttons.cancel === "string") {
        btnCancelText = buttons.cancel;
      } else {
        BtnCancel = buttons.cancel;
      }
    }

    return (
      <Skeleton title={title} t={t} tiny type="confirm" {...rest}>
        {body}
        <Buttons>
          <BtnOk onClick={() => hideWithFeedback("ok")}>{btnOkText}</BtnOk>
          <BtnCancel onClick={() => hideWithFeedback("cancel")}>
            {btnCancelText}
          </BtnCancel>
        </Buttons>
      </Skeleton>
    );
  }
}

export default translate()(Confirm);
