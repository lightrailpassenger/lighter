import React from "react";

import StationListItem from "./StationListItem";

import routeData from "./route_data.json";

import styles from "./StationListPage.module.scss";

function StationListPage() {
  return (
    <div className={styles.page}>
      {routeData.map(({
        id,
        nameEn,
        nameCh,
      }) => {
        return (
          <StationListItem key={nameEn} id={id} nameEn={nameEn} nameCh={nameCh} />
        );
      })}
    </div>
  );
}

export default StationListPage;
