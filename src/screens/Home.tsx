import { Canvas } from '@react-three/fiber';
import { OrbitControls, useContextBridge } from '@react-three/drei';
import { Box } from '~/components/Box';

export function Home() {
  if (!window.ReactQueryClientContext) {
    throw new Error('no react query context');
  }

  const ContextBridge = useContextBridge(window.ReactQueryClientContext);

  return (
    <div className='w-screen h-screen'>
      <Canvas>
        <ContextBridge>
          <ambientLight />
          <pointLight position={[2, 2, 2]} />
          <Box />
          <OrbitControls />
        </ContextBridge>
      </Canvas>
    </div>
  );
}
