import React, {
  useEffect,
  useRef,
  useState,
  useCallback,
  useContext,
} from "react";
import { useThree } from "@react-three/fiber";
import { CameraControls, Environment, SpotLight } from "@react-three/drei";
import { Model } from "./Model";
import { useStore } from "../global/zustand";

const getDeviceType = () => {
  if (window.innerWidth < 768) return "mobile";
  else if (window.innerWidth >= 768 && window.innerWidth < 1024)
    return "tablet";
  else return "desktop";
};

export function Experience({ camera }) {
  const cameraControlsRef = useRef();
  const [controlsReady, setControlsReady] = useState(false);
  const [animationState, setAnimationState] = useState("starting");
  const [deviceType, setDeviceType] = useState(getDeviceType());
  const events = useThree((state) => state.events);
  //   events.disconnect();
  const cubeSide = useStore((state) => state.cubeSide);

  useEffect(() => {
    const handleResize = () => {
      const newDeviceType = getDeviceType();
      setDeviceType(newDeviceType);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // const zoomIn  = () => cameraControlsRef.current.zoom(   camera.zoom / 2, true );
  // const zoomOut = () => cameraControlsRef.current.zoom( - camera.zoom / 2, true );

  useEffect(() => {
    if (cubeSide === "side0") {
      cameraControlsRef.current.setLookAt(5, 5, 5, 0, 0, 0, true);
    } else if (cubeSide === "side1") {
      cameraControlsRef.current.setLookAt(0.885, -0.003, -0.004, 0, 0, 0, true);
      cameraControlsRef.current.dolly(-6.885, true);
    } else if (cubeSide === "side2") {
      cameraControlsRef.current.setLookAt(-0.014, -0.855, 0.037, 0, 0, 0, true);
      cameraControlsRef.current.dolly(-6.885, true);
      cameraControlsRef.current.rotateAzimuthTo(0, true);
    } else if (cubeSide === "side3") {
      cameraControlsRef.current.setLookAt(-0.025, 0.078, -0.908, 0, 0, 0, true);
      cameraControlsRef.current.dolly(-6.885, true);
    } else if (cubeSide === "side4") {
      cameraControlsRef.current.setLookAt(0, -0.013, 0.895, 0, 0, 0, true);
      cameraControlsRef.current.dolly(-6.885, true);
    } else if (cubeSide === "side5") {
      cameraControlsRef.current.setLookAt(
        -0.887,
        -0.121,
        -0.005,
        0,
        0,
        0,
        true
      );
      cameraControlsRef.current.dolly(-6.885, true);
    } else if (cubeSide === "side6") {
      cameraControlsRef.current.setLookAt(-0.017, 0.895, -0.062, 0, 0, 0, true);
      cameraControlsRef.current.dolly(-6.885, true);
      cameraControlsRef.current.rotateAzimuthTo(0, true);
    }
  }, [cubeSide]);

  //================= APPLY SETTINGS =================

  // const applySettings = () => {
  //   const camera = cameraControlsRef.current;

  //   if (!camera) return;

  //   switch (deviceType) {
  //     case "desktop":
  //       camera.mouseButtons.left = 0;
  //       camera.mouseButtons.right = 0;
  //       camera.mouseButtons.middle = 0;
  //       camera.mouseButtons.wheel = 0;

  //       camera.touches.one = 0;
  //       camera.touches.two = 0;
  //       camera.touches.three = 0;
  //       camera.setPosition(0, 0, 6, true);
  //       break;
  //     case "mobile":
  //       camera.mouseButtons.left = 0;
  //       camera.mouseButtons.right = 0;
  //       camera.mouseButtons.middle = 0;
  //       camera.mouseButtons.wheel = 0;

  //       camera.touches.one = 0;
  //       camera.touches.two = 0;
  //       camera.touches.three = 0;

  //       camera.setPosition(0, 0, 13, true);
  //       break;
  //     case "tablet":
  //       camera.mouseButtons.left = 0;
  //       camera.mouseButtons.right = 0;
  //       camera.mouseButtons.middle = 0;
  //       camera.mouseButtons.wheel = 0;

  //       camera.touches.one = 0;
  //       camera.touches.two = 0;
  //       camera.touches.three = 0;
  //       camera.setPosition(0, 0, 13, true);
  //     default:
  //       // Optionally set a default position or leave as is for tablets and other devices
  //       break;
  //   }

  //   setTimeout(() => {
  //     switch (deviceType) {
  //       case "desktop":
  //         camera.mouseButtons.left = 1;
  //         camera.mouseButtons.right = 0;
  //         camera.mouseButtons.middle = 0;
  //         camera.mouseButtons.wheel = 0;

  //         camera.touches.one = 1;
  //         camera.touches.two = 0;
  //         break;
  //       case "tablet":
  //         camera.mouseButtons.left = 0;
  //         camera.mouseButtons.right = 0;
  //         camera.mouseButtons.middle = 0;
  //         camera.mouseButtons.wheel = 0;

  //         camera.touches.one = 0;
  //         camera.touches.two = 1;
  //         camera.touches.three = 0;
  //         break;
  //       case "mobile":
  //         camera.mouseButtons.left = 0;
  //         camera.mouseButtons.right = 0;
  //         camera.mouseButtons.middle = 0;
  //         camera.mouseButtons.wheel = 0;

  //         camera.touches.one = 0;
  //         camera.touches.two = 1;
  //         camera.touches.three = 0;
  //         break;
  //       default:
  //         camera.mouseButtons.left = 0;
  //         camera.mouseButtons.right = 0;
  //         camera.mouseButtons.middle = 0;
  //         camera.mouseButtons.wheel = 0;

  //         camera.touches.one = 0;
  //         camera.touches.two = 0;
  //         camera.touches.three = 0;
  //         break;
  //     }
  //     setAnimationState("end");
  //   }, 5000);
  // };

  //   const timer = setTimeout(applySettings, 300);

  //===================================================

  // Slight delay to ensure camera controls are fully initialized

  // useEffect(() => {
  //   setTimeout(() => {
  //     setControlsReady(true);
  //   }, 300);
  // }, []);

  // useEffect(() => {
  //   if (controlsReady) {
  //     applySettings();
  //   }
  // }, [controlsReady]);

  //   const events = useThree((state) => state.events);

  return (
    <>
      <CameraControls
        enabled={true}
        smoothTime={0.5}
        ref={cameraControlsRef}
        makeDefault
      />
      {/* <SpotLight position={[0,10,0]}distance={5} angle={3.15} attenuation={10} anglePower={5} color={'red'} /> */}
      {/* <ambientLight intensity={5} /> */}
      <Environment preset="warehouse" />
      <directionalLight position={[0, 5, 0]} intensity={0.3} castShadow />
      <directionalLight position={[0, -5, 0]} intensity={0.3} castShadow />

      <directionalLight position={[5, 0, 0]} intensity={0.3} castShadow />

      <directionalLight position={[-5, 0, 0]} intensity={0.3} castShadow />
      <directionalLight position={[0, 0, 5]} intensity={0.3} castShadow />

      <directionalLight position={[0, 0, -5]} intensity={0.3} castShadow />

      {/* <pointLight position={[0,5,0]} /> */}
      {/* <ExtraModels /> */}
      <Model />
    </>
  );
}
