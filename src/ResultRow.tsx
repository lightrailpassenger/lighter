import React from "react";

import styles from "./ResultRow.module.scss";

interface ResultRowProps {
  platformId: string | number;
  route: string;
  destination: string;
  trainLength: string | number;
  time: string;
}

function ResultRow(props: ResultRowProps) {
  const {
    platformId,
    route,
    destination,
    trainLength,
    time,
  } = props;

  return (
    <div className={styles.row}>
      <span className={styles.platformId}>{platformId}</span>
      <span className={styles.route}>{route}{
        typeof trainLength === "number" ?
          new Array(trainLength).fill(0).map(() => ('\u{1f68b}')).join('') :
          trainLength
      }</span>
      <span className={styles.destination}>{destination}</span>
      <span className={styles.time}>{time}</span>
    </div>
  );
}

export default ResultRow;
