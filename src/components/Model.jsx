import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Model(props) {
  const { nodes, materials } = useGLTF("/CUBE_EXPORT.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.MAIN_FRAME.geometry}
        material={materials.LETTER_FRAME_M}
        position={[-0.088, 0, 0]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.E1.geometry}
          material={materials.LETTER_M_1}
          position={[0.885, -0.003, -0.004]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.E2.geometry}
          material={materials.LETTER_M_6}
          position={[-0.014, -0.855, 0.037]}
          rotation={[-Math.PI, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.G.geometry}
          material={materials.LETTER_M_2}
          position={[-0.025, 0.078, -0.908]}
          rotation={[Math.PI / 2, 0, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.I.geometry}
          material={materials.LETTER_M_4}
          position={[0, -0.013, 0.895]}
          rotation={[Math.PI / 2, 0, 0]}
        />
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
          material={materials.LETTER_M_3}
          position={[-0.887, -0.121, -0.005]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.T.geometry}
          material={materials.LETTER_M_5}
          position={[-0.017, 0.895, -0.062]}
        />
      </mesh>
    </group>
  );
}

useGLTF.preload("/CUBE_EXPORT.glb");