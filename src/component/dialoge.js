import React from "react";
import styled from "styled-components";
import is from "styled-is";

const Outer = styled.dialog.attrs({
  className: "crystallize-dialog",
  "aria-labelledby": "crystallize-dialog-title"
})`
  max-width: 80vw;
  border: none;
  padding: 0;

  ${is("tiny")`
    max-width: 250px;
  `};

  ${is("medium")`
    max-width: 500px;
  `};
`;

const Inner = styled.div.attrs({
  className: "crystallize-dialog-inner"
})`
  background: #fff;
  padding: 20px;
  border: none;
  box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.2);
`;

const H1 = styled.h1.attrs({
  id: "crystallize-dialog-title",
  className: "crystallize-dialog-title"
})`
  margin-top: 0;
  margin-bottom: 15px;
`;

export default ({ children, tiny, title, showHideButton }) => (
  <Outer tiny={tiny}>
    <Inner>
      {showHideButton && (
        <button
          type="button"
          data-a11y-dialog-hide
          aria-label="Close this dialog window"
        >
          &times;
        </button>
      )}
      <H1>{title}</H1>
      {children}
    </Inner>
  </Outer>
);
