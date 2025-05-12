import { ThreeElements } from '@react-three/fiber'

declare global {
  namespace React {
    namespace JSX {
        interface IntrinsicElements extends ThreeElements {
          brainParticleMaterial: {
            time?: number;
            color?: THREE.Color;
            attach?: string;
            depthTest?: boolean;
            depthWrite?: boolean;
            transparent?: boolean;
            blending?: number;
          },
          brainMaterial: {
            time?: number;
            color?: THREE.Color;
            attach?: string;
            side?: number;
            transparent?: boolean;
            depthTest?: boolean;
            depthWrite?: boolean;
            blending?: number;
            mouse?: THREE.Vector3;
            ref?: React.Ref<THREE.ShaderMaterial>;
          }
        }
    }
  }
}
