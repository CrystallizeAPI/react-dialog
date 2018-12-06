import styled from "styled-components";

const infoIconBg =
  "url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMjgxLjQ4OCAyODEuNDg4IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyODEuNDg4IDI4MS40ODg7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iNTEycHgiIGhlaWdodD0iNTEycHgiPjxnPjxwYXRoIGQ9Ik0xNDAuNzQ0LDBDNjMuMTM4LDAsMCw2My4xMzgsMCwxNDAuNzQ0czYzLjEzOCwxNDAuNzQ0LDE0MC43NDQsMTQwLjc0NHMxNDAuNzQ0LTYzLjEzOCwxNDAuNzQ0LTE0MC43NDQgICBTMjE4LjM1MSwwLDE0MC43NDQsMHogTTE0MC43NDQsMjYzLjQ4OEM3My4wNjMsMjYzLjQ4OCwxOCwyMDguNDI2LDE4LDE0MC43NDRTNzMuMDYzLDE4LDE0MC43NDQsMTggICBzMTIyLjc0NCw1NS4wNjMsMTIyLjc0NCwxMjIuNzQ0UzIwOC40MjUsMjYzLjQ4OCwxNDAuNzQ0LDI2My40ODh6IiBmaWxsPSIjMGZiY2Y5Ii8+PHBhdGggZD0iTTE2My4zNzQsMTgxLjc2NWwtMTYuODI0LDkuODQ5di03MS43OTFjMC0zLjE0My0xLjY0LTYuMDU4LTQuMzI1LTcuNjljLTIuNjg2LTEuNjMyLTYuMDI3LTEuNzQ3LTguODE4LTAuMjk5ICAgbC0yMy45ODEsMTIuNDM2Yy00LjQxMywyLjI4OC02LjEzNSw3LjcyLTMuODQ3LDEyLjEzMmMyLjI4OSw0LjQxMyw3LjcyLDYuMTM2LDEyLjEzMywzLjg0N2wxMC44MzgtNS42MnY3Mi42ODQgICBjMCwzLjIyNSwxLjcyNiw2LjIwMyw0LjUyMyw3LjgwOGMxLjM4NywwLjc5NSwyLjkzMiwxLjE5Miw0LjQ3NywxLjE5MmMxLjU3MiwwLDMuMTQzLTAuNDExLDQuNTQ2LTEuMjMybDMwLjM3MS0xNy43NzggICBjNC4yOS0yLjUxMiw1LjczMi04LjAyNCwzLjIyMS0xMi4zMTRTMTY3LjY2MywxNzkuMjU1LDE2My4zNzQsMTgxLjc2NXoiIGZpbGw9IiMwZmJjZjkiLz48Y2lyY2xlIGN4PSIxMzcuNTQ5IiBjeT0iODYuNjEyIiByPSIxMi40MzUiIGZpbGw9IiMwZmJjZjkiLz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PC9zdmc+)";
const warningIconBg =
  "url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgMjk0Ljk1MSAyOTQuOTUxIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAyOTQuOTUxIDI5NC45NTEiIHdpZHRoPSI1MTJweCIgaGVpZ2h0PSI1MTJweCI+ICA8Zz4gICAgPGc+ICAgICAgPHBhdGggZD0ibTE0Ny40NzUsMTAzLjEwMmMtNS4yMiwwLTguNzAxLDMuNDgtOC43MDEsOC43MDF2NjIuNjQ0YzAsNS4yMiAzLjQ4LDguNzAxIDguNzAxLDguNzAxIDUuMjIsMCA4LjcwMS0zLjQ4IDguNzAxLTguNzAxdi02Mi42NDRjMC01LjIyMS0zLjQ4MS04LjcwMS04LjcwMS04LjcwMXoiIGZpbGw9IiNlZjQ4MzYiLz4gICAgICA8cGF0aCBkPSJtMTUyLjY5NSwyMTIuNzNjLTMuNDgtMy40OC04LjcwMS0zLjQ4LTEyLjE4MSwwLTEuNzQsMS43NC0xLjc0LDUuMjItMS43NCw2Ljk2IDAsMy40OCAwLDUuMjIgMS43NCw2Ljk2IDEuNzQsMS43NCA1LjIyLDEuNzQgNi45NiwxLjc0IDEuNzQsMCA1LjIyLDAgMy40OC0xLjc0IDEuNzQtMS43NCAzLjQ4LTUuMjIgMy40OC02Ljk2IDAuMDAyLTMuNDggMC4wMDItNS4yMi0xLjczOS02Ljk2eiIgZmlsbD0iI2VmNDgzNiIvPiAgICAgIDxwYXRoIGQ9Im0yODguNDI1LDIxNC40N2wtMTAyLjY2Ny0xNzkuMjMyYy02Ljk2LTEzLjkyMS0yMi42MjEtMjIuNjIxLTM4LjI4My0yMi42MjEtMTUuNjYxLDAtMjkuNTgyLDguNzAxLTM4LjI4MywyMi42MjFsLTEwMi42NjcsMTc5LjIzMmMtOC43MDEsMTMuOTIxLTguNzAxLDMxLjMyMi01LjMyOTA3ZS0xNSw0NS4yNDMgNi45NiwxMy45MjEgMjIuNjIxLDIyLjYyMSAzOC4yODMsMjIuNjIxaDIwNS4zMzRjMTcuNDAxLDAgMzEuMzIyLTguNzAxIDM4LjI4My0yMi42MjEgOC43MDEtMTMuOTIxIDguNzAxLTMxLjMyMiAwLTQ1LjI0M3ptLTEzLjkyMSwzOC4yODNjLTMuNDgsOC43MDEtMTIuMTgxLDEzLjkyMS0yMi42MjEsMTMuOTIxaC0yMDcuMDc1Yy04LjcwMSwwLTE3LjQwMS01LjIyLTIyLjYyMS0xMy45MjEtNS4yMi04LjcwMS01LjIyLTE5LjE0MSAwLTI3Ljg0MmwxMDIuNjY3LTE3OS4yMzNjMy40OC04LjcwMSAxMi4xODEtMTMuOTIxIDIyLjYyMS0xMy45MjEgMTAuNDQxLDAgMTkuMTQxLDUuMjIgMjQuMzYyLDEzLjkyMWwxMDIuNjY3LDE3OS4yMzJjNS4yMjEsOC43MDEgNS4yMjEsMTkuMTQyIDAsMjcuODQzeiIgZmlsbD0iI2VmNDgzNiIvPiAgICA8L2c+ICA8L2c+PC9zdmc+)";

const colors = {
  error: "red",
  black: "#000",
  text: "#444",
  lightgrey: "#eee"
};

const iconSpace = "150px";

const ButtonBase = styled.button`
  appearance: none;
  margin: 0;
  font-weight: 400;
  font-size: 16px;
  padding: 8px 10px;
  border: none;
  cursor: pointer;
  border-radius: 15px;

  &:active {
    transform: scale(0.9);
  }
`;

export const StyledH1 = styled.h1``;

export const StyledButtonOk = styled(ButtonBase)`
  background: #555;
  color: #fff;

  &:hover,
  &:active {
    background: #666;
  }
`;

export const StyledButtonCancel = styled(ButtonBase)`
  background: #f0f0f0;

  &:hover,
  &:active {
    background: #ddd;
  }
`;

export const StyledButtonClose = styled(ButtonBase)`
  color: #555;
  background: transparent;
  font-weight: 400;
  font-size: 20px;
  padding: 4px 6px;
`;

export const StyledWrapper = styled.div`
  .crystallize-dialog {
    min-width: 300px;
    position: relative;

    ${StyledH1}  {
      font-size: 20px;
    }

    &-inner {
      padding: 40px 30px 20px 30px;
      color: ${colors.black};
    }

    &-close-button-positioner {
      right: 0;
      top: 0;
    }

    &--confirm,
    &--alert {
      max-width: 400px;
      padding-left: ${iconSpace};

      &:before {
        width: ${iconSpace};
        height: 100%;
        left: 0;
        top: 0;
        content: "";
        position: absolute;
        background: ${colors.lightgrey};
      }

      &:after {
        content: "";
        width: ${iconSpace};
        height: 100%;
        left: 0;
        top: 0;
        position: absolute;
        background-size: 70px;
        background-repeat: no-repeat;
        background-position: center;
        opacity: 0.7;
      }
    }

    &--confirm:after {
      background-image: ${infoIconBg};
    }
    &--alert:after {
      background-image: ${warningIconBg};
    }

    &--dialog {
      min-height: 100px;

      .crystallize-dialog-inner {
        padding: 30px;
        min-height: 100%;
      }
    }
  }
  .crystallize-dialog-buttons {
    padding-top: 20px;
  }
`;
