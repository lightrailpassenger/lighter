import React, { useCallback, useState } from "react";

import { HashRouter, Routes, Route } from "react-router-dom";

import Header from "./Header";
import MapPage from "./MapPage";
import Navigation from "./Navigation";
import ResultPage from "./ResultPage";
import StationListPage from "./StationListPage";

import styles from "./App.module.scss";

function App() {
  const [mapView, setMapView] = useState<{
    centerX: number,
    centerY: number,
    zoomLevel: number,
  }>({
    centerX: 22.4,
    centerY: 113.9,
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
            <MapPage {...mapView} onViewChange={handleViewChange} />
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
