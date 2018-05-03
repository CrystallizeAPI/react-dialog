import React from "react";

import Skeleton from "./skeleton";

export default ({ state, ...rest }) => {
  const { body, title, showHideButton } = state;
  return (
    <Skeleton
      title={title}
      showHideButton={showHideButton}
      className="crystallize-dialog--dialog"
      {...rest}
    >
      {body}
    </Skeleton>
  );
};
