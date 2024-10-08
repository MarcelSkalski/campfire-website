/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

function Model(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/models/newScene.glb");
  const { actions } = useAnimations(animations, group);
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <mesh
          name="Campfire"
          castShadow
          receiveShadow
          geometry={nodes.Campfire.geometry}
          material={materials.Campfire_MAT}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.04}
        />
        <mesh
          name="fire_part_00"
          castShadow
          receiveShadow
          geometry={nodes.fire_part_00.geometry}
          material={materials.Campfire_fire_MAT}
          position={[-0.106, 1.255, -0.101]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.04}
        />
        <mesh
          name="fire_part_01"
          castShadow
          receiveShadow
          geometry={nodes.fire_part_01.geometry}
          material={materials.Campfire_fire_MAT}
          position={[0.032, 0.363, 0.018]}
          rotation={[Math.PI / 2, 0, 0.265]}
          scale={0}
        />
        <mesh
          name="fire_part_02"
          castShadow
          receiveShadow
          geometry={nodes.fire_part_02.geometry}
          material={materials.Campfire_fire_MAT}
          position={[-0.083, 1.616, 0.03]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.04}
        />
        <mesh
          name="fire_part_03"
          castShadow
          receiveShadow
          geometry={nodes.fire_part_03.geometry}
          material={materials.Campfire_fire_MAT}
          position={[-0.016, 1.579, 0.012]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.004}
        />
        <mesh
          name="fire_part_04"
          castShadow
          receiveShadow
          geometry={nodes.fire_part_04.geometry}
          material={materials.Campfire_fire_MAT}
          position={[0.244, 0.588, -0.304]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0}
        />
        <mesh
          name="fire_part_05"
          castShadow
          receiveShadow
          geometry={nodes.fire_part_05.geometry}
          material={materials.Campfire_fire_MAT}
          position={[-0.106, 1.255, -0.101]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.04}
        />
        <mesh
          name="fire_part_06"
          castShadow
          receiveShadow
          geometry={nodes.fire_part_06.geometry}
          material={materials.Campfire_fire_MAT}
          position={[0.096, 2.413, 0.031]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.04}
        />
        <mesh
          name="fire_part_07"
          castShadow
          receiveShadow
          geometry={nodes.fire_part_07.geometry}
          material={materials.Campfire_fire_MAT}
          position={[-0.421, 1.981, 0.142]}
          rotation={[1.978, 0, 0]}
          scale={0.04}
        />
        <mesh
          name="fire_part_08"
          castShadow
          receiveShadow
          geometry={nodes.fire_part_08.geometry}
          material={materials.Campfire_fire_MAT}
          position={[0.167, 1.7, -0.216]}
          rotation={[Math.PI / 2, 0.499, 0]}
          scale={0.08}
        />
        <mesh
          name="fire_part_09"
          castShadow
          receiveShadow
          geometry={nodes.fire_part_09.geometry}
          material={materials.Campfire_fire_MAT}
          position={[0.502, 1.262, 0.212]}
          rotation={[0.917, 0, 0]}
          scale={0.04}
        />
        <mesh
          name="fire_part_010"
          castShadow
          receiveShadow
          geometry={nodes.fire_part_010.geometry}
          material={materials.Campfire_fire_MAT}
          position={[-0.098, 0.556, 0.162]}
          rotation={[Math.PI / 2, -0.515, 0]}
          scale={0.08}
        />
        <mesh
          name="fire_part_011"
          castShadow
          receiveShadow
          geometry={nodes.fire_part_011.geometry}
          material={materials.Campfire_fire_MAT}
          position={[0.683, 0.332, 0.474]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.04}
        />
        <mesh
          name="fire_part_012"
          castShadow
          receiveShadow
          geometry={nodes.fire_part_012.geometry}
          material={materials.Campfire_fire_MAT}
          position={[0.591, 0.888, -0.734]}
          rotation={[1.594, 0.143, -0.042]}
          scale={0.027}
        />
        <mesh
          name="fire_part_013"
          castShadow
          receiveShadow
          geometry={nodes.fire_part_013.geometry}
          material={materials.Campfire_fire_MAT}
          position={[-0.801, 0.224, 0.324]}
          rotation={[1.802, 0.14, -0.075]}
          scale={0.04}
        />
        <mesh
          name="fire_part_014"
          castShadow
          receiveShadow
          geometry={nodes.fire_part_014.geometry}
          material={materials.Campfire_fire_MAT}
          position={[0.089, 1.514, -0.212]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.08}
        />
        <mesh
          name="fire_part_015"
          castShadow
          receiveShadow
          geometry={nodes.fire_part_015.geometry}
          material={materials.Campfire_fire_MAT}
          position={[0.181, 0.553, -0.256]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.08}
        />
        <mesh
          name="fire_part_016"
          castShadow
          receiveShadow
          geometry={nodes.fire_part_016.geometry}
          material={materials.Campfire_fire_MAT}
          position={[0.001, 1.02, -0.016]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.12}
        />
        <mesh
          name="fire_part_017"
          castShadow
          receiveShadow
          geometry={nodes.fire_part_017.geometry}
          material={materials.Campfire_fire_MAT}
          position={[-0.116, 1.159, 0.541]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.12}
        />
        <mesh
          name="fire_part_018"
          castShadow
          receiveShadow
          geometry={nodes.fire_part_018.geometry}
          material={materials.Campfire_fire_MAT}
          position={[-0.211, 1.093, -0.611]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0, 0.04, 0.04]}
        />
        <mesh
          name="fire_part_019"
          castShadow
          receiveShadow
          geometry={nodes.fire_part_019.geometry}
          material={materials.Campfire_fire_MAT}
          position={[0.265, 0.932, 0.044]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.12}
        />
        <mesh
          name="fire_part_020"
          castShadow
          receiveShadow
          geometry={nodes.fire_part_020.geometry}
          material={materials.Campfire_fire_MAT}
          position={[-0.003, 0.987, -0.186]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.08}
        />
        <mesh
          name="fire_part_021"
          castShadow
          receiveShadow
          geometry={nodes.fire_part_021.geometry}
          material={materials.Campfire_fire_MAT}
          position={[-0.249, 1.363, 0.031]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.12}
        />
        <mesh
          name="fire_part_022"
          castShadow
          receiveShadow
          geometry={nodes.fire_part_022.geometry}
          material={materials.Campfire_fire_MAT}
          position={[0.169, 1.28, -0.358]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.08}
        />
        <mesh
          name="fire_part_023"
          castShadow
          receiveShadow
          geometry={nodes.fire_part_023.geometry}
          material={materials.Campfire_fire_MAT}
          position={[0.495, 1.277, 0.145]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.08}
        />
        <mesh
          name="fire_part_024"
          castShadow
          receiveShadow
          geometry={nodes.fire_part_024.geometry}
          material={materials.Campfire_fire_MAT}
          position={[0.495, 1.453, 0.145]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.04}
        />
        <mesh
          name="fire_part_025"
          castShadow
          receiveShadow
          geometry={nodes.fire_part_025.geometry}
          material={materials.Campfire_fire_MAT}
          position={[-0.116, 1.046, 0.541]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.04}
        />
        <mesh
          name="fire_part_026"
          castShadow
          receiveShadow
          geometry={nodes.fire_part_026.geometry}
          material={materials.Campfire_fire_MAT}
          position={[0.089, 1.084, -0.212]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.04}
        />
        <mesh
          name="fire_part_027"
          castShadow
          receiveShadow
          geometry={nodes.fire_part_027.geometry}
          material={materials.Campfire_fire_MAT}
          position={[0.089, 0.66, -0.212]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.04}
        />
        <mesh
          name="fire_part_028"
          castShadow
          receiveShadow
          geometry={nodes.fire_part_028.geometry}
          material={materials.Campfire_fire_MAT}
          position={[-0.008, 1.697, -0.076]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.04}
        />
      </group>
    </group>
  );
}

export default Model;

useGLTF.preload("/models/newScene.glb");
