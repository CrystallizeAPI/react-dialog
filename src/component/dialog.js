import React from "react";

import Skeleton from "./skeleton";

export default ({ state, ...rest }) => {
  const { body, title, showCloseButton } = state;
  return (
    <Skeleton
      title={title}
      showCloseButton={showCloseButton}
      type="dialog"
      {...rest}
    >
      {body}
    </Skeleton>
  );
};
