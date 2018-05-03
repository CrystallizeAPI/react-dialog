import React from "react";

import {
  transitionSpeed,
  Outer,
  Inner,
  Header,
  H1,
  CloseButton
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
    const { children, tiny, title, showHideButton } = this.props;

    return (
      <Outer tiny={tiny} revealed={this.state.revealed}>
        <Inner>
          {showHideButton && (
            <CloseButton
              type="button"
              data-a11y-dialog-hide
              aria-label="Close this dialog window"
            >
              &times;
            </CloseButton>
          )}
          {title && (
            <Header>
              <H1>{title}</H1>
            </Header>
          )}
          {children}
        </Inner>
      </Outer>
    );
  }
}
