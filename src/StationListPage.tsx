import React, { useCallback, useState } from "react";

import StationListItem from "./StationListItem";

import routeData from "./route_data.json";

import styles from "./StationListPage.module.scss";

const routeList = ["505", "507", "610", "614", "615", "614P", "615P", "705", "706", "751", "751P", "761P"];

function StationListPage() {
  const [routeEnabledStatus, setRouteEnabledStatus] = useState(() => {
    return Object.fromEntries(routeList.map((route) => ([route, true])));
  });
  const buttons = Object.entries(routeEnabledStatus)
    .sort(([route1], [route2]) => (route1.localeCompare(route2)))
    .map(([route, status]) => {
      return (
        <button
          key={route}
          className={`${styles.routeButton}${status ? ` ${styles.routeButton__enabled}` : ''}`}
          onClick={() => {
            setRouteEnabledStatus(({
              [route]: prevRouteStatus,
              ...otherStatuses
            }) => ({
              [route]: !prevRouteStatus,
              ...otherStatuses
            }));
          }}
        >
          {route}
        </button>
      );
    });
  const enabledRoutes = Object.entries(routeEnabledStatus)
    .filter(([route, status]) => (status))
    .map(([route]) => (route));
  const stationItems = routeData
    .filter(({ routes }) => (routes.some((route) => (enabledRoutes.includes(route)))))
    .map(({
      id,
      nameEn,
      nameCh,
    }) => {
      return (
        <StationListItem key={nameEn} id={id} nameEn={nameEn} nameCh={nameCh} />
      );
    });
  return (
    <div className={styles.page}>
      <div className={styles.routeButtonList}>
        <div className={styles.routeButtonListRouteButton}>
          {buttons}
        </div>
        <div className={styles.actionButton}>
          <button
            className={styles.routeButton}
            onClick={useCallback(() => {
              setRouteEnabledStatus((statuses) => (
                Object.fromEntries(Object.entries(statuses).map(([route, status]) => ([route, false])))
              ));
            }, [])}
          >
            Clear
          </button>
        </div>
      </div>
      {stationItems.length ? stationItems : (
        <div className={styles.placeholder}>
          Choose a route
        </div>
      )}
    </div>
  );
}

export default StationListPage;
