import React, { Suspense, useCallback, useState } from "react";

import { HashRouter, Routes, Route } from "react-router-dom";

import Header from "./Header";
import LoadingState from "./LoadingState";
import Navigation from "./Navigation";

import routeData from "./route_data.json";

import styles from "./App.module.scss";

const AttributionPage = React.lazy(() => import("./AttributionPage"));
const MapPage = React.lazy(() => import("./MapPage"));
const ResultPage = React.lazy(() => import("./ResultPage"));
const StationListPage = React.lazy(() => import("./StationListPage"));

function App() {
  const [mapView, setMapView] = useState<{
    centerX: number,
    centerY: number,
    zoomLevel: number,
  }>({
    centerX: 22.42,
    centerY: 114,
    zoomLevel: 13,
  });

  const handleViewChange = useCallback((
    centerX: number,
    centerY: number,
    zoomLevel: number
  ) => {
    setMapView({
      centerX,
      centerY,
      zoomLevel,
    });
  }, []);

  return (
    <div className={styles.app}>
      <HashRouter>
        <Header />
        <Navigation />
        <Suspense fallback={<LoadingState />}>
          <Routes>
            <Route path="/" element={
              <MapPage {...mapView} markers={routeData} onViewChange={handleViewChange} />
            } />
            <Route path="/list" element={
              <StationListPage />
            } />
            <Route path="/result/:stationId" element={
              <ResultPage />
            } />
            <Route path="/attribution" element={
              <AttributionPage />
            } />
          </Routes>
        </Suspense>
      </HashRouter>
    </div>
  );
}

export default App;
