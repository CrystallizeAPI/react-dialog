import React from "react";
import styled from "styled-components";

const Outer = styled.div`
  background: #fff;
  padding: 20px;
  position: absolute;
  top: 0;
  left: 0;
`;

export default ({ title, body }) => (
  <Outer>
    <button
      type="button"
      data-a11y-dialog-hide
      aria-label="Close this dialog window"
    >
      &times;
    </button>
    <h1 id="crystallize-dialog-title">{title}</h1>
    {body}
  </Outer>
);
