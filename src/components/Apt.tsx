import { useGLTF } from '@react-three/drei';
import { GLTFResult } from '~/types';

export function Apt(): JSX.Element {
  const { nodes } = useGLTF('/apt.gltf') as unknown as GLTFResult;

  return (
    <>
      {Object.entries(nodes)
        .filter((mesh) => mesh[1].type === 'Mesh')
        .map((node) => {
          const [key, mesh] = node;
          return (
            <mesh
              key={key}
              position={mesh.position}
              rotation={mesh.rotation}
              geometry={mesh.geometry}
              material={mesh.material}
              scale={mesh.scale}
            />
          );
        })}
    </>
  );
}

// useGLTF.preload('/apt.gltf');
