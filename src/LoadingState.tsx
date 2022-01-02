import React from "react";

import Twemoji from "./Twemoji";

import styles from "./LoadingState.module.scss";

function LoadingState() {
  return (
    <div className={styles.center}>
      <Twemoji code={"\u{1F914}"} />
    </div>
  );
}

export default LoadingState;
