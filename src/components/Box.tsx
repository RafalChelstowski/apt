import { useQuery } from '@tanstack/react-query';
import { getGpsCoordinates } from '~/api/geolocation';

export function Box() {
  const { isLoading, error } = useQuery(['geolocation'], getGpsCoordinates);

  const loadingColor = isLoading ? 'blue' : 'gray';
  const statusColor = error ? 'red' : 'green';

  return (
    <mesh>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={isLoading ? loadingColor : statusColor} />
    </mesh>
  );
}
