import React from "react";
import styled from "styled-components";
import is from "styled-is";

const Outer = styled.div`
  background: #fff;
  padding: 20px;

  ${is("tiny")`
    max-width: 250px;
  `};
`;

export default ({ children, tiny, title, showHideButton }) => (
  <Outer tiny={tiny}>
    {showHideButton && (
      <button
        type="button"
        data-a11y-dialog-hide
        aria-label="Close this dialog window"
      >
        &times;
      </button>
    )}
    <h1 id="crystallize-dialog-title">{title}</h1>
    {children}
  </Outer>
);
