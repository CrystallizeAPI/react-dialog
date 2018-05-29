import React from "react";

import {
  transitionSpeed,
  Outer,
  Inner,
  Header,
  CloseButtonOuter
} from "./styles";

export default class Skeleton extends React.Component {
  state = {
    revealed: false
  };

  componentDidMount() {
    this.timeout = setTimeout(() => this.reveal(), transitionSpeed);
  }

  componentWillUnmount() {
    clearTimeout(this.timeout);
  }

  reveal = () => {
    this.setState({
      revealed: true
    });
  };

  render() {
    const {
      children,
      t,
      tiny,
      type,
      title,
      showCloseButton,
      Heading,
      ButtonClose
    } = this.props;

    return (
      <Outer type={type} tiny={tiny} revealed={this.state.revealed}>
        <Inner>
          {showCloseButton && (
            <CloseButtonOuter>
              <ButtonClose
                type="button"
                data-a11y-dialog-hide
                aria-label={t("closeThisDialogWindow")}
              >
                &times;
              </ButtonClose>
            </CloseButtonOuter>
          )}
          {title && (
            <Header>
              <Heading>{title}</Heading>
            </Header>
          )}
          {children}
        </Inner>
      </Outer>
    );
  }
}
