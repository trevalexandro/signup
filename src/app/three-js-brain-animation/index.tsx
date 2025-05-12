'use client'

import { Canvas } from '@react-three/fiber';
import { OrbitControls, Html, Text } from '@react-three/drei';
import * as THREE from 'three';
import { Tubes } from './brain-tubes';
import { BrainParticles } from './brain-particles';
import { data } from './data';
import { JSX } from 'react';
import SplashButtons from '../components/splash-buttons';

function createBrainCurvesFromPaths(): THREE.CatmullRomCurve3[] {
  const paths = data.economics[0].paths;

  const brainCurves: THREE.CatmullRomCurve3[] = [];
  paths.forEach(path => {
    const points: THREE.Vector3[] = [];
    for (let i = 0; i < path.length; i += 3) {
      points.push(new THREE.Vector3(path[i], path[i + 1], path[i + 2]));
    }
    const tempCurve = new THREE.CatmullRomCurve3(points);
    brainCurves.push(tempCurve);
  });

  return brainCurves;
}

const curves = createBrainCurvesFromPaths();

interface BrainProps {
  screenSize?: string;
};

const Brain = ({ screenSize }:BrainProps):JSX.Element => {
  return (
    <Canvas camera={{ position: [0, 0, 0.3], near: 0.001, far: 5 }}>
      <color attach="background" args={['black']} />
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Tubes curves={curves} />
      <BrainParticles curves={curves} />
      <OrbitControls />
      { screenSize === 'sm' &&
        <Html position={[-0.06, 0.22, 0]}>
          <SplashButtons />
        </Html>
      }
      { screenSize === 'xl' && <Text position={[0, 0.15, 0]} scale={[0.10, 0.10, 0]}>Automind System</Text> }
      <Text scale={[0.05, 0.05, 0.05]}>AI</Text>
      { screenSize === 'xl' &&
        <Html position={[-0.19, -0.15, 0]}>
          <SplashButtons />
        </Html>
      }
    </Canvas>
  );
}

export default Brain;
