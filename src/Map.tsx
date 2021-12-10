import React, {
  useRef,
  useLayoutEffect,
} from "react";

interface MapProps {
  centerX: number;
  centerY: number;
  zoomLevel: number;
  onViewChange(centerX: number, centerY: number, zoomLevel: number): void;
}

function Map(props: MapProps) {
  const { centerX, centerY, zoomLevel } = props;
  const ref = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    // TODO: Mount map
  }, [centerX, centerY, zoomLevel]);

  return (
    <div ref={ref} />
  );
}

export default Map;
