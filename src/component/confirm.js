import React from "react";

import Dialoge from "./dialoge";

import { Buttons, Button } from "./styles";

export default ({ title, body, hideWithFeedback, buttons = {} }) => {
  const buttonOk = Object.assign(
    {
      value: "ok",
      text: "OK"
    },
    buttons.ok
  );
  const buttonCancel = Object.assign(
    {
      value: "cancel",
      text: "Cancel"
    },
    buttons.cancel
  );

  return (
    <Dialoge tiny title={title} className="crystallize-dialog--confirm">
      {body}
      <Buttons>
        <Button onClick={() => hideWithFeedback(buttonCancel.value)} secondary>
          {buttonCancel.text}
        </Button>
        <Button onClick={() => hideWithFeedback(buttonOk.value)} primary>
          {buttonOk.text}
        </Button>
      </Buttons>
    </Dialoge>
  );
};
