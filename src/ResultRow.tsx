import React from "react";

import styles from "./ResultRow.module.scss";

interface ResultRowProps {
  platformId: number;
  route: string;
  destination: string;
  trainLength: number;
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
      <span className={styles.route}>{route}</span>
      <span className={styles.trainLength}>{trainLength}</span>
      <span className={styles.destination}>{destination}</span>
      <span className={styles.time}>{time}</span>
    </div>
  );
}

export default ResultRow;
