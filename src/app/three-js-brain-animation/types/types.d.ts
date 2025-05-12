import { ThreeElements } from '@react-three/fiber'

declare global {
  namespace React {
    namespace JSX {
        interface IntrinsicElements extends ThreeElements {
          brainParticleMaterial: {
            time?: number;
            color?: THREE.Color;
            moujse?: THREE.Vector3;
            attach?: string;
            depthTest?: boolean;
            depthWrite?: boolean;
            transparent?: boolean;
            blending?: number;
            side?: number | undefined;
            ref?: React.Ref<THREE.ShaderMaterial>;
          }
        }
    }
  }
}
