import React, { useCallback } from "react";

import { useNavigate } from "react-router-dom";

import Map from "./Map";

import styles from "./MapPage.module.scss";

interface MapPageProps {
  centerX: number;
  centerY: number;
  zoomLevel: number;
  markers: Array<{
    id: string,
    lat: number,
    lon: number,
  }>;
  onViewChange(centerX: number, centerY: number, zoomLevel: number): void;
}

function MapPage(props: MapPageProps) {
  const {
    centerX,
    centerY,
    zoomLevel,
    markers,
    onViewChange
  } = props;

  const navigate = useNavigate();
  const handleMarkerClick = useCallback((id: string) => {
    navigate(`/result/${id}`);
  }, [navigate]);

  return (
    <div className={styles.mapPage}>
      <Map
        centerX={centerX}
        centerY={centerY}
        zoomLevel={zoomLevel}
        markers={markers}
        onMarkerClick={handleMarkerClick}
        onViewChange={onViewChange}
      />
    </div>
  );
}

export default MapPage;
