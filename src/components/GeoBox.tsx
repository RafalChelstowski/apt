import { useQuery } from '@tanstack/react-query';
import { getGpsCoordinates } from '~/api/geolocation';

export function GeoBox() {
  const { isLoading, error } = useQuery(['geolocation'], getGpsCoordinates);

  const loadingColor = isLoading ? 'blue' : 'gray';
  const statusColor = error ? 'red' : 'green';

  return (
    <mesh position={[1, 0, 0]}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={isLoading ? loadingColor : statusColor} />
    </mesh>
  );
}
