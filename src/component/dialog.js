import React from "react";

import Skeleton from "./skeleton";

export default ({ state, ...rest }) => {
  const { body, title, showCloseButton } = state;
  return (
    <Skeleton
      title={title}
      showCloseButton={showCloseButton}
      className="crystallize-dialog--dialog"
      {...rest}
    >
      {body}
    </Skeleton>
  );
};
