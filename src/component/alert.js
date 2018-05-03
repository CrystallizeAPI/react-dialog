import React from "react";
import { translate } from "react-i18next";

import Skeleton from "./skeleton";
import { Buttons } from "./styles";

class Alert extends React.Component {
  render() {
    const { state, hide, ButtonOk, t, ...rest } = this.props;

    return (
      <Skeleton title={state.title} tiny {...rest}>
        {state.body}
        <Buttons>
          <ButtonOk onClick={hide}>{t("ok")}</ButtonOk>
        </Buttons>
      </Skeleton>
    );
  }
}

export default translate()(Alert);
