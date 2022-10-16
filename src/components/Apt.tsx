import { Triplet } from '@react-three/cannon';
import { Html, Line, useGLTF } from '@react-three/drei';
import { Fragment, useState } from 'react';
import { useEvent } from 'react-use';
import * as THREE from 'three';
import { State, useStore } from '~/store/store';
import { GLTFResult } from '~/types';

type Pair = {
  a: Triplet;
  b: Triplet;
};

export function Apt(): JSX.Element {
  const isLocked = useStore((state: State) => state.isLocked);
  const { nodes } = useGLTF('/apt.gltf') as unknown as GLTFResult;
  const [point1, setPoint1] = useState<Triplet | null>(null);
  const [pairs, setPairs] = useState<Pair[]>([]);

  useEvent('keydown', ({ key }) => {
    if (!key) {
      return;
    }

    if (key === 'c' && point1 === null) {
      setPairs([]);
    }

    if (key === 'u' && point1 === null && pairs.length > 0) {
      const newPairs = [...pairs];
      newPairs.shift();
      setPairs(newPairs);
    }
  });

  return (
    <>
      {Object.entries(nodes)
        .filter((mesh) => mesh[1].type === 'Mesh')
        .map((node) => {
          const [key, mesh] = node;
          return (
            <mesh
              onClick={(e) => {
                if (point1 === null) {
                  setPoint1([e.point.x, e.point.y, e.point.z]);

                  return;
                }

                setPairs([{ a: point1, b: [e.point.x, e.point.y, e.point.z] }, ...pairs]);
                setPoint1(null);
              }}
              key={key}
              position={mesh.position}
              rotation={mesh.rotation}
              geometry={mesh.geometry}
              material={mesh.material}
              scale={mesh.scale}
            />
          );
        })}
      {isLocked &&
        pairs.map((pair) => {
          const firstPosition = new THREE.Vector3(pair.a[0], pair.a[1], pair.a[2]);
          const secondPosition = new THREE.Vector3(pair.b[0], pair.b[1], pair.b[2]);
          const distance = firstPosition.distanceTo(secondPosition).toString().slice(0, 4);

          return (
            <Fragment key={JSON.stringify(pair)}>
              <Html position={firstPosition}>
                <div className='text-red-600 text-xl'>{distance}</div>
              </Html>
              <Html position={secondPosition}>
                <div className='text-red-600 text-xl'>{distance}</div>
              </Html>
              <Line points={[pair.a, pair.b]} lineWidth={3} color='red' />
            </Fragment>
          );
        })}
    </>
  );
}

useGLTF.preload('/apt.gltf');
