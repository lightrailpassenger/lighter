import React from "react";

import Map from "./Map";

interface MapPageProps {
  centerX: number;
  centerY: number;
  zoomLevel: number;
  onViewChange(centerX: number, centerY: number, zoomLevel: number): void;
}

function MapPage(props: MapPageProps) {
  const {
    centerX,
    centerY,
    zoomLevel,
    onViewChange
  } = props;

  return (
    <div>
      <Map
        centerX={centerX}
        centerY={centerY}
        zoomLevel={zoomLevel}
        onViewChange={onViewChange}
      />
    </div>
  );
}

export default MapPage;
