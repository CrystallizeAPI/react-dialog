import React from "react";

import Dialoge from "./dialoge";

export default ({ title, body, hideWithFeedback }) => (
  <Dialoge tiny title={title}>
    {body}
    <button onClick={() => hideWithFeedback("ok")}>Ok</button>
    <button onClick={() => hideWithFeedback("cancel")}>Cancel</button>
  </Dialoge>
);
