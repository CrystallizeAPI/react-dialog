import React from "react";

import Skeleton from "./skeleton";
import { Buttons } from "./styles";

export default class Alert extends React.Component {
  render() {
    const { state, hide, ButtonOk, ...rest } = this.props;

    return (
      <Skeleton title={state.title} tiny type="alert" {...rest}>
        {state.body}
        <Buttons>
          <ButtonOk onClick={hide}>Ok</ButtonOk>
        </Buttons>
      </Skeleton>
    );
  }
}
