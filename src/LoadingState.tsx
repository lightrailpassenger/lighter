import React from "react";

import styles from "./LoadingState.module.scss";

function LoadingState() {
  return (
    <div className={styles.center}>
      {"\u{1F914}"}
    </div>
  );
}

export default LoadingState;
