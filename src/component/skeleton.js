import React from "react";

import { transitionSpeed, Outer, Inner, Header, CloseButton } from "./styles";

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
    const { children, tiny, title, showHideButton, Heading } = this.props;

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
              <Heading>{title}</Heading>
            </Header>
          )}
          {children}
        </Inner>
      </Outer>
    );
  }
}
