/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { Html, useGLTF } from "@react-three/drei";
import {WhoAmI} from '../pagesLaptop/components/WhoAmI'
import {Nav} from '../pagesLaptop/components/Nav'
import { ArrowDown } from "../pagesLaptop/components/ArrowDown";

import room from '../../assets/glbs/room.glb'

export function Room(props) {
  let position=[0,12.851,-5.38028]
  const pixels={
    x:'914px',
    y:'652px'
  }
  const { nodes, materials } = useGLTF(room);
  if(window.innerWidth < 567){
    position=[0,12.851,-5.38028]
    pixels.x='914px'
    pixels.y='652px'
  }
  return (
    <group {...props} dispose={null}>
      <group
        position={[12.5, -6.64, -13.54]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={11.93}
      >
        {/* <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_15.geometry}
          material={materials["Material.007"]}
        /> */}
        {/* <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_13.geometry}
          material={materials["Material.006"]}
        /> */}
        {/* <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_14.geometry}
          material={materials["Material.003"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_3.geometry}
          material={materials["Material.003"]}
        /> */}
        {/* <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_11.geometry}
          material={materials.sciana_okno}
        /> */}
        {/* <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_17.geometry}
          material={materials.mata}
        /> */}
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_6.geometry}
          material={materials.krzeslo_1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_8.geometry}
          material={materials.krzeslo_prawe}
        />
        {/* <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_7.geometry}
          material={materials.krzeslo_okno}
        /> */}
        {/* <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_9.geometry}
          material={materials.krzeslo_srodek}
        /> */}
        {/* <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_2.geometry}
          material={materials["Material.002"]}
        /> */}
        {/* <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_18.geometry}
          material={materials.stolik}
        /> */}
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_10.geometry}
          material={materials.podloga}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_12.geometry}
          material={materials["stolik.001"]}
        />
        {/* <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_4.geometry}
          material={materials["Material.004"]}
        /> */}
      </group>
      <group position={[0, 2.14, 1.18]} rotation={[-0.37, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane005.geometry}
          material={materials.grey}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane005_1.geometry}
          material={materials.Black}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane007.geometry}
        material={materials.Black}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane007_1.geometry}
        material={materials.grey}
      >
        <Html 
        className="noScroll"
        transform
        position={position}
        style={{
          backgroundColor:'#EAE8E8',
          width: pixels.x,
          height:pixels.y,
          overflowY:'auto',
          zIndex: -5,
        }}>
          <WhoAmI/>
          <Nav/>
          <ArrowDown/>
        </Html>
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Teclas.geometry}
        material={materials.Keys}
        position={[0, 2.14, 1.18]}
        rotation={[-0.37, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Touchpad.geometry}
        material={materials.Keys}
        position={[0, 2.14, 1.18]}
        rotation={[-0.37, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TouchpadBtns.geometry}
        material={materials.Keys}
        position={[0, 2.14, 1.18]}
        rotation={[-0.37, 0, 0]}
      />
    </group>
  );
}

useGLTF.preload(room);
