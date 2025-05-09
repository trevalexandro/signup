'use client'

import { Canvas } from '@react-three/fiber';
import { OrbitControls, Html, Text } from '@react-three/drei';
import * as THREE from 'three';
import { Tubes } from './brain-tubes';
import { BrainParticles } from './brain-particles';
import { data } from './data';
import { JSX } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { id as learnMoreId } from '../components/learn-more';
import { id as signupId } from '../components/signup';
import { Rocket } from 'lucide-react';

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

interface ButtonsPosition {
  position: [x: number, y: number, z: number];
};

interface ButtonsPositions {
  [key: string]: ButtonsPosition;
};

const Brain = ({ screenSize }:BrainProps):JSX.Element => {
  const buttonsPositions: ButtonsPositions = {
    md: { position: [-0.29, -0.15, 0] },
    lg: { position: [-0.30, -0.15, 0] },
    xl: { position: [-0.16, -0.15, 0] }
  };

  return (
    <Canvas camera={{ position: [0, 0, 0.3], near: 0.001, far: 5 }}>
      <color attach="background" args={['black']} />
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Tubes curves={curves} />
      <BrainParticles curves={curves} />
      <OrbitControls />
      { screenSize === 'sm' &&
        <Html position={[-0.15, 0.20, 0]}>
          <div className="flex flex-col items-center">
            <Button variant='secondary' className="mb-5 animate-pulse">
              <Link href={`#${learnMoreId}`}>
                Learn more about Automind System
              </Link>
            </Button>
            <Button className="bg-cyan-600 text-white mb-5 animate-pulse">
              <Link className='flex items-center' href={`#${signupId}`}>
                Signup for early product launch
                <Rocket className='ml-1' />
              </Link>
            </Button>
          </div>
        </Html>
      }
      {screenSize === 'sm' ? <></> : <Text position={[0, 0.15, 0]} scale={[0.10, 0.10, 0]}>Automind System</Text> }
      <Text scale={[0.05, 0.05, 0.05]}>AI</Text>
      { screenSize !== 'sm' &&
        <Html position={buttonsPositions[screenSize as keyof ButtonsPositions].position}>
          <div className="flex">
            <Button variant='secondary' className="mb-10 animate-pulse">
              <Link href={`#${learnMoreId}`}>
                Learn more about Automind System
              </Link>
            </Button>
            <Button className="bg-cyan-600 text-white mb-10 animate-pulse ml-5">
              <Link className='flex items-center' href={`#${signupId}`}>
                Signup for early product launch
                <Rocket className='ml-1' />
              </Link>
            </Button>
          </div>
        </Html>
      }
    </Canvas>
  );
}

export default Brain;