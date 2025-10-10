import React, { useRef, useEffect } from "react";
import Globe from "react-globe.gl";

const ConnectGlobe = () => {
  const globeRef = useRef();

  useEffect(() => {
    globeRef.current.controls().autoRotate = true;
    globeRef.current.controls().autoRotateSpeed = 0.6;
  }, []);

  const arcsData = [
    { startLat: 19.076, startLng: 72.8777, endLat: 40.7128, endLng: -74.006, color: ['#00ffff', '#ff00ff'] },
    { startLat: 19.076, startLng: 72.8777, endLat: 51.5072, endLng: -0.1276, color: ['#ffcc00', '#ff0066'] },
  ];

  return (
    <div className="h-[400px] w-full">
      <Globe
        ref={globeRef}
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
        arcsData={arcsData}
        arcColor={"color"}
        arcDashLength={0.4}
        arcDashGap={0.7}
        arcDashAnimateTime={4000}
        backgroundColor="rgba(0,0,0,0)"
      />
    </div>
  );
};

export default ConnectGlobe;
