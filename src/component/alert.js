import React from "react";

import Skeleton from "./skeleton";
import { Buttons } from "./styles";

export default ({ state, hide, ButtonOk, ...rest }) => (
  <Skeleton title={state.title} tiny {...rest}>
    {state.body}
    <Buttons>
      <ButtonOk onClick={hide}>Ok</ButtonOk>
    </Buttons>
  </Skeleton>
);
