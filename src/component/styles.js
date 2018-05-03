import styled from "styled-components";

export const Buttons = styled.div.attrs({
  className: "crystallize-dialog-buttons"
})`
  display: flex;
  justify-content: flex-end;
  margin-top: 15px;

  > :not(:first-child) {
    margin-left: 15px;
  }
`;

export const Button = styled.button.attrs({
  className: "crystallize-dialog-button"
})``;
