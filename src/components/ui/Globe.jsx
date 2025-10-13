import { useEffect, useRef } from "react";
import createGlobe from "cobe";
import { useMotionValue, useSpring } from "motion/react";

export function Globe({ className }) {
  let phi = 0;
  let width = 0;
  const canvasRef = useRef(null);
  const pointerInteracting = useRef(null);
  const pointerInteractionMovement = useRef(0);

  const r = useMotionValue(0);
  const rs = useSpring(r, {
    mass: 1,
    damping: 30,
    stiffness: 100,
  });

  useEffect(() => {
    const onResize = () => {
      if (canvasRef.current) {
        width = canvasRef.current.offsetWidth;
      }
    };

    window.addEventListener("resize", onResize);
    onResize();

        const globe = createGlobe(canvasRef.current, {
        devicePixelRatio: 2,
        width: width * 2,
        height: width * 2,
        phi: 0,
        theta: 0.3,
        dark: 1, // Enables dark mode
        diffuse: 1, // Boost contrast
        mapSamples: 16000,
        mapBrightness: 1, // Darker look
        baseColor: [1, 1, 1], // Dark gray/black globe
        glowColor: [1, 0.5, 0.5],    // light red (R=1, G=0.5, B=0.5)
      markerColor: [1, 0.5, 0.5],  // same light red for markers
        markers: [
          { location: [14.5995, 120.9842], size: 0.03 },
          { location: [19.076, 72.8777], size: 0.1 },
        ],
        onRender: (state) => {
          if (!pointerInteracting.current) phi += 0.005;
          state.phi = phi + rs.get();
          state.width = width * 2;
          state.height = width * 2;
        },
      });


    if (canvasRef.current) canvasRef.current.style.opacity = "1";

    return () => {
      globe.destroy();
      window.removeEventListener("resize", onResize);
    }
  }, [rs]);

  return (
    <div className={`relative mx-auto aspect-[1/1] w-full max-w-[600px] ${className}`}>
      <canvas
        className="size-full transition-opacity duration-500"
        ref={canvasRef}
        onPointerDown={(e) => {
          pointerInteracting.current = e.clientX;
        }}
        onPointerUp={() => pointerInteracting.current = null}
        onPointerOut={() => pointerInteracting.current = null}
        onMouseMove={(e) => {
          if (pointerInteracting.current !== null) {
            const delta = e.clientX - pointerInteracting.current;
            pointerInteractionMovement.current = delta;
            r.set(r.get() + delta / 1400);
          }
        }}
        onTouchMove={(e) => {
          if (e.touches[0]) {
            const clientX = e.touches[0].clientX;
            if (pointerInteracting.current !== null) {
              const delta = clientX - pointerInteracting.current;
              pointerInteractionMovement.current = delta;
              r.set(r.get() + delta / 1400);
            }
          }
        }}
      />
    </div>
  );
}
