import { Canvas } from '@react-three/fiber';
import { useContextBridge } from '@react-three/drei';
import { Physics } from '@react-three/cannon';
import { accelerometerSensor } from '~/api/accelerometerSensor';
import { Apt } from '~/components/Apt';
import { StaticBounds } from '~/components/Bounds';
import { Player } from '~/components/Player';
import { UI } from '~/components/UI';

export function Home() {
  if (!window.ReactQueryClientContext) {
    throw new Error('no react query context');
  }

  accelerometerSensor();

  const ContextBridge = useContextBridge(window.ReactQueryClientContext);

  return (
    <div className='w-screen h-screen'>
      <Canvas>
        <ContextBridge>
          <Physics gravity={[0, -2, 0]}>
            <Player />
            <Apt />
            <StaticBounds />
          </Physics>
          <ambientLight />
        </ContextBridge>
      </Canvas>
      <UI />
    </div>
  );
}
