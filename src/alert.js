import React from "react";

import Skeleton from "./skeleton";
import { Buttons } from "./styles";

export default class Alert extends React.Component {
  render() {
    const { state, hide, ButtonOk, t, ...rest } = this.props;

    return (
      <Skeleton title={state.title} t={t} tiny type="alert" {...rest}>
        {state.body}
        <Buttons>
          <ButtonOk onClick={hide}>{t("ok")}</ButtonOk>
        </Buttons>
      </Skeleton>
    );
  }
}
