import React, { useState } from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";
import InfoWindow from './InfoWindow'; // Make sure this component is implemented as previously described

const black = new THREE.MeshStandardMaterial({ color: new THREE.Color(0x000000) });
const white = new THREE.MeshStandardMaterial({ color: new THREE.Color(0xffffff) });
const yellow = new THREE.MeshStandardMaterial({ color: new THREE.Color(0xffd500) });

export function Model(props) {
  const [hovered, setHover] = useState(false);

  const { nodes, materials } = useGLTF("/CUBE_EXPORT.glb");

  

  return (
    <>
      <group {...props} dispose={null}>
        <mesh
          onPointerEnter={() => setHover(true)}
          onPointerLeave={() => setHover(false)}
          castShadow
          receiveShadow
          geometry={nodes.MAIN_FRAME.geometry}
          material={hovered ? yellow : black}
          position={[-0.088, 0, 0]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.E1.geometry}
            material={white}
            position={[0.885, -0.003, -0.004]}
            rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.E2.geometry}
            material={white}
            position={[-0.014, -0.855, 0.037]}
            rotation={[-Math.PI, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.G.geometry}
            material={white}
            position={[-0.025, 0.078, -0.908]}
            rotation={[Math.PI / 2, 0, Math.PI]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.I.geometry}
            material={white}
            position={[0, -0.013, 0.895]}
            rotation={[Math.PI / 2, 0, 0]}
          />
          {/* Include LETTER_BACKGROUND and LETTER_FRAMES with their materials */}
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.LETTER_BACKGROUND.geometry}
            material={materials.LETTER_BACKGROUND_FRAME}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.LETTER_FRAMES.geometry}
            material={materials.LETTER_OUTER_FRAME}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.N.geometry}
            material={white}
            position={[-0.887, -0.121, -0.005]}
            rotation={[Math.PI / 2, 0, Math.PI / 2]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.T.geometry}
            material={white}
            position={[-0.017, 0.895, -0.062]}
          />
        </mesh>
      </group>
    </>
  );
}

useGLTF.preload("/CUBE_EXPORT.glb");
