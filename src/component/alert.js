import React from "react";

import Dialoge from "./dialoge";
import { Buttons, Button } from "./styles";

export default ({ title, body, hide }) => (
  <Dialoge tiny title={title}>
    {body}
    <Buttons>
      <Button onClick={hide}>Ok</Button>
    </Buttons>
  </Dialoge>
);
