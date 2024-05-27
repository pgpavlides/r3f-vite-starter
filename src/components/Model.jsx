import React, { useState } from "react";
import { useGLTF, MeshReflectorMaterial } from "@react-three/drei";
import * as THREE from "three";
import { useStore } from "../global/zustand";
import { motion } from "framer-motion-3d";

const colorRed = new THREE.MeshStandardMaterial({
  color: new THREE.Color(0xffd500),
});
const colorBlack = new THREE.MeshStandardMaterial({
  color: new THREE.Color(0x000000),
});
const colorLightBlack = new THREE.MeshStandardMaterial({
  color: new THREE.Color(0x1c1c1c),
});
const colorWhite = new THREE.MeshStandardMaterial({
  color: new THREE.Color(0xffffff),
});
const colorYellow = new THREE.MeshStandardMaterial({
  color: new THREE.Color(0x3db7b1),
});

export function Model({ props, onSectionChange }) {
  const [hovered1, setHover1] = useState(false);
  const [hovered2, setHover2] = useState(false);
  const [hovered3, setHover3] = useState(false);
  const [hovered4, setHover4] = useState(false);
  const [hovered5, setHover5] = useState(false);
  const [hovered6, setHover6] = useState(false);

  const { nodes } = useGLTF("/CUBE_EXPORT.glb");

  const cubeSide = useStore((state) => state.cubeSide);

  const setSide1 = useStore((state) => state.setSide1);
  const setSide2 = useStore((state) => state.setSide2);
  const setSide3 = useStore((state) => state.setSide3);
  const setSide4 = useStore((state) => state.setSide4);
  const setSide5 = useStore((state) => state.setSide5);
  const setSide6 = useStore((state) => state.setSide6);

  return (
    <group dispose={null} scale={1.5}>
      <mesh
        // castShadow
        receiveShadow
        geometry={nodes.MAIN_FRAME.geometry}
        material={colorBlack}
        position={[-0.088, 0, 0]}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <mesh
          // castShadow
          receiveShadow
          geometry={nodes.LETTER_BACKGROUND.geometry}
          material={colorLightBlack}
          onClick={(e) => {
            e.stopPropagation();
          }}
        />
        <mesh
          // castShadow
          receiveShadow
          geometry={nodes.LETTER_FRAMES.geometry}
          material={colorLightBlack}
          onClick={(e) => {
            e.stopPropagation();
          }}
        />
        <motion.mesh
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 1 }}
          onPointerEnter={() => setHover1(true)}
          onPointerLeave={() => setHover1(false)}
          // castShadow
          receiveShadow
          geometry={nodes.E1.geometry}
          material={hovered1 ? colorYellow : colorWhite}
          position={[0.885, -0.003, -0.004]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          onClick={(e) => {
            e.stopPropagation();
            setSide1();
            console.log(cubeSide);
          }}
        />
        <motion.mesh
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 1 }}
          onPointerEnter={() => setHover2(true)}
          onPointerLeave={() => setHover2(false)}
          // castShadow
          receiveShadow
          geometry={nodes.E2.geometry}
          material={hovered2 ? colorYellow : colorWhite}
          position={[-0.014, -0.855, 0.037]}
          rotation={[-Math.PI, 0, 0]}
          onClick={(e) => {
            e.stopPropagation();
            setSide2();
            console.log(cubeSide);
          }}
        />
        <motion.mesh
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 1 }}
          onPointerEnter={() => setHover3(true)}
          onPointerLeave={() => setHover3(false)}
          // castShadow
          receiveShadow
          geometry={nodes.G.geometry}
          material={hovered3 ? colorYellow : colorWhite}
          position={[-0.025, 0.078, -0.908]}
          rotation={[Math.PI / 2, 0, Math.PI]}
          onClick={(e) => {
            e.stopPropagation();
            setSide3();
            console.log(cubeSide);
          }}
        />
        <motion.mesh
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 1 }}
          onPointerEnter={() => setHover4(true)}
          onPointerLeave={() => setHover4(false)}
          // castShadow
          receiveShadow
          geometry={nodes.I.geometry}
          material={hovered4 ? colorYellow : colorWhite}
          position={[0, -0.013, 0.895]}
          rotation={[Math.PI / 2, 0, 0]}
          onClick={(e) => {
            e.stopPropagation();
            setSide4();
            console.log(cubeSide);
          }}
        />
        <motion.mesh
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 1 }}
          onPointerEnter={() => setHover5(true)}
          onPointerLeave={() => setHover5(false)}
          // castShadow
          receiveShadow
          geometry={nodes.N.geometry}
          material={hovered5 ? colorYellow : colorWhite}
          position={[-0.887, -0.121, -0.005]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          onClick={(e) => {
            e.stopPropagation();
            setSide5();
            console.log(cubeSide);
          }}
        />
        <motion.mesh
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 1 }}
          onPointerEnter={() => setHover6(true)}
          onPointerLeave={() => setHover6(false)}
          // castShadow
          receiveShadow
          geometry={nodes.T.geometry}
          material={hovered6 ? colorYellow : colorWhite}
          position={[-0.017, 0.895, -0.062]}
          onClick={(e) => {
            e.stopPropagation();
            setSide6();
            console.log(cubeSide);
          }}
        />
      </mesh>
    </group>
  );
}

useGLTF.preload("/CUBE_EXPORT.glb");
