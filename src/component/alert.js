import React from "react";

import Dialoge from "./dialoge";

export default ({ title, body, hide }) => (
  <Dialoge tiny title={title}>
    {body}
    <button onClick={hide}>Ok</button>
  </Dialoge>
);
