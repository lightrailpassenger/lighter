import React, {
  useRef,
  useLayoutEffect,
} from "react";
import L, { Map as MapType } from "leaflet";

interface MapProps {
  centerX: number;
  centerY: number;
  zoomLevel: number;
  markers: Array<{
    lat: number,
    lon: number,
    id: string,
  }>;
  onMarkerClick(id: string): void;
  onViewChange(centerX: number, centerY: number, zoomLevel: number): void;
}

function Map(props: MapProps) {
  const { centerX, centerY, zoomLevel, markers, onMarkerClick } = props;
  const mapRef = useRef<MapType | null>(null);
  const ref = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    if (ref.current) {
      mapRef.current = L.map(ref.current);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      })
        .addTo(mapRef.current);
      ref.current.style.width = '100%';
      ref.current.style.height = '100%';
    }
  }, []);
  useLayoutEffect(() => {
    if (mapRef.current) {
      for (let marker of markers) {
        const { id, lat, lon } = marker;
        const markerElement = L.marker([lat, lon]);
        markerElement.on('click', () => {
          onMarkerClick(id);
        });
        markerElement.addTo(mapRef.current);
      }
    }
  }, [markers, onMarkerClick]);
  useLayoutEffect(() => {
    if (mapRef.current) {
      mapRef.current.setView([centerX, centerY], zoomLevel);
    }
  }, [centerX, centerY, zoomLevel]);

  return (
    <div ref={ref} />
  );
}

export default Map;
