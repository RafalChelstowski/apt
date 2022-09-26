import { useQuery } from '@tanstack/react-query';
import { getGpsCoordinates } from '~/api/geolocation';

export function Box() {
  const { data } = useQuery(['geolocation'], () => getGpsCoordinates());

  console.log(data);

  return (
    <mesh>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color='orange' />
    </mesh>
  );
}
