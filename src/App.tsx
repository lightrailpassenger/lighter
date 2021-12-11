import React, { useCallback, useState } from "react";

import { HashRouter, Routes, Route } from "react-router-dom";

import Header from "./Header";
import MapPage from "./MapPage";
import Navigation from "./Navigation";
import ResultPage from "./ResultPage";
import StationListPage from "./StationListPage";

import routeData from "./route_data.json";

import styles from "./App.module.scss";

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
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
