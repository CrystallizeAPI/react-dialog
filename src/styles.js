import styled from "styled-components";

export const transitionSpeed = 100;
export const legacyBackdropClassName = "crystallize-dialog-legacy-backdrop";

function getOuterClassName(props) {
  let base = ["crystallize-dialog"];
  if (props.preShown) {
    base.push(`${base[0]}--pre-show`);
  }
  if (props.shown) {
    base.push(`${base[0]}--show`);
  }
  if (props.tiny) {
    base.push(`${base[0]}--tiny`);
  }
  if (props.medium) {
    base.push(`${base[0]}--medium`);
  }
  if (props.type) {
    base.push(`${base[0]}--${props.type}`);
  }
  return base.join(" ");
}

export const LegacyBackdrop = styled.div.attrs({
  className: legacyBackdropClassName
})`
  background: rgba(0, 0, 0, 0.2);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`;

export const WrapperCmp = styled.div.attrs({
  className: "crystallize-dialog-outer"
})`
  &[data-a11y-dialog-native] {
    ${LegacyBackdrop} {
      display: none;
    }
  }

  &:not([data-a11y-dialog-native]) {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9997;

    dialog {
      z-index: 9999;
      position: relative;

      &[open] {
        display: block;
      }
    }

    ${LegacyBackdrop} {
      z-index: 9998;
    }
  }
`;

export const Outer = styled.dialog.attrs({
  className: getOuterClassName,
  "aria-labelledby": "crystallize-dialog-title"
})`
  max-width: 80vw;
  border: none;
  padding: 0;
  opacity: 0;
  transform: scale(0.9);
  transition: opacity ${transitionSpeed}ms, transform ${transitionSpeed}ms;
  box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.2);

  ${p => (p.tiny ? `width: 250px;` : "")};

  ${p => (p.medium ? `max-width: 500px;` : "")};

  ${p =>
    p.revealed
      ? `opacity: 1;
         transform: none;`
      : ""};
`;

export const Inner = styled.div.attrs({
  className: "crystallize-dialog-inner"
})`
  background: #fff;
  padding: 20px;
  border: none;
`;

export const Header = styled.header.attrs({
  className: "crystallize-dialog-header"
})`
  margin-bottom: 15px;
`;

export const H1 = styled.h1.attrs({
  id: "crystallize-dialog-title",
  className: "crystallize-dialog-title"
})`
  margin: 0;
`;

export const Buttons = styled.footer.attrs({
  className: "crystallize-dialog-buttons"
})`
  display: flex;
  flex-direction: row-reverse;
  justify-content: flex-start;
  margin-top: 15px;

  > :not(:first-child) {
    margin-right: 15px;
  }
`;

export const Button = styled.button.attrs({
  className: "crystallize-dialog-button"
})``;

export const CloseButtonOuter = styled.div.attrs({
  className: "crystallize-dialog-close-button-positioner"
})`
  position: absolute;
  right: -7px;
  top: -7px;
  z-index: 1;
`;

export const CloseButton = styled.button.attrs({
  className: "crystallize-dialog-close-button"
})``;
