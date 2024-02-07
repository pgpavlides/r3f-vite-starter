import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";

function App() {
  const [controlSwitch, setControlSwitch] = useState(false);
  const [canvasClassName, setCanvasClassName] = useState("canvasStyleDefault");

  const handleTouchStart = (e) => {
    if (e.touches.length === 2) {
      setControlSwitch(true);
      setCanvasClassName("canvasStyleTwoTouches");
    } else {
      setControlSwitch(false);
      setCanvasClassName("canvasStyleDefault");
    }
  };

  return (
    <>
      {/* <MyComponent /> */}
      <Canvas
        onScroll={e => console.log('onScroll')}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchStart} // This handles touch end with the same logic, consider separating if needed
        className={`canvasmain ${canvasClassName}`} // Dynamically apply class
        shadows
        camera={{ position: [0, 2, 5], fov: 60 }}
      >
        <Experience />
      </Canvas>
    </>
  );
}

export default App;
