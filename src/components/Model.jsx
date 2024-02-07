import React, { useState } from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { useStore } from "../global/zustand";



export function Model({ props, onSectionChange }) {
  const [hovered, setHover] = useState(false);
  const { nodes } = useGLTF("/CUBE_EXPORT.glb");

  const handleClick = (setSideFunction, e) => {
    setSideFunction();
    console.log(cubeSide);
    e.stopPropagation(); // Stop event propagation
  };

  const cubeSide = useStore((state) => state.cubeSide);

  const setSide1 = useStore((state) => state.setSide1);
  const setSide2 = useStore((state) => state.setSide2);
  const setSide3 = useStore((state) => state.setSide3);
  const setSide4 = useStore((state) => state.setSide4);
  const setSide5 = useStore((state) => state.setSide5);
  const setSide6 = useStore((state) => state.setSide6);


  const handleGeometryClick = (geometryName) => {
    const sectionMapping = {
      "E1.geometry": 0,
      "E2.geometry": 1,
      "G.geometry": 2,
      "I.geometry": 3,
      "N.geometry": 4,
      "T.geometry": 5,
    };
    const sectionIndex = sectionMapping[geometryName];
    if (sectionIndex !== undefined) {
      onSectionChange(sectionIndex);
    }
  };

  

  return (
    <group dispose={null}>
      <mesh
        onPointerEnter={() => setHover(true)}
        onPointerLeave={() => setHover(false)}
        castShadow
        receiveShadow
        geometry={nodes.MAIN_FRAME.geometry}
        material={hovered ? new THREE.MeshStandardMaterial({ color: new THREE.Color(0xffd500) }) : new THREE.MeshStandardMaterial({ color: new THREE.Color(0x000000) })}
        position={[-0.088, 0, 0]}
        onClick={(e) => {e.stopPropagation();}}

      >
         <mesh
            castShadow
            receiveShadow
            geometry={nodes.LETTER_BACKGROUND.geometry}
            material={new THREE.MeshStandardMaterial({ color: new THREE.Color(0x007070) })}
            onClick={(e) => {e.stopPropagation();}}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.LETTER_FRAMES.geometry}
            material={new THREE.MeshStandardMaterial({ color: new THREE.Color(0x007070) })}
            onClick={(e) => {e.stopPropagation();}}

          />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.E1.geometry}
          material={new THREE.MeshStandardMaterial({ color: new THREE.Color(0xffffff) })}
          position={[0.885, -0.003, -0.004]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          onClick={(e) => {e.stopPropagation(); setSide1(); console.log(cubeSide)}}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.E2.geometry}
          material={new THREE.MeshStandardMaterial({ color: new THREE.Color(0xffffff) })}
          position={[-0.014, -0.855, 0.037]}
          rotation={[-Math.PI, 0, 0]}
          onClick={(e) => {e.stopPropagation(); setSide2(); console.log(cubeSide)}}

        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.G.geometry}
          material={new THREE.MeshStandardMaterial({ color: new THREE.Color(0xffffff) })}
          position={[-0.025, 0.078, -0.908]}
          rotation={[Math.PI / 2, 0, Math.PI]}
          onClick={(e) => {e.stopPropagation(); setSide3(); console.log(cubeSide)}}

        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.I.geometry}
          material={new THREE.MeshStandardMaterial({ color: new THREE.Color(0xffffff) })}
          position={[0, -0.013, 0.895]}
          rotation={[Math.PI / 2, 0, 0]}
          onClick={(e) => {e.stopPropagation(); setSide2(); console.log(cubeSide)}}

        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.N.geometry}
          material={new THREE.MeshStandardMaterial({ color: new THREE.Color(0xffffff) })}
          position={[-0.887, -0.121, -0.005]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          onClick={(e) => {e.stopPropagation(); setSide5(); console.log(cubeSide)}}

        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.T.geometry}
          material={new THREE.MeshStandardMaterial({ color: new THREE.Color(0xffffff) })}
          position={[-0.017, 0.895, -0.062]}
          onClick={(e) => {e.stopPropagation(); setSide6(); console.log(cubeSide)}}

        />
      </mesh>
    </group>
  );
}

useGLTF.preload("/CUBE_EXPORT.glb");
