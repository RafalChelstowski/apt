import { Canvas } from '@react-three/fiber';
import { Box } from '~/components/Box';

export function Home() {
  return (
    <div className='w-screen h-screen'>
      <Canvas>
        <Box />
      </Canvas>
    </div>
  );
}
