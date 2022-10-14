import { State, useStore } from '~/store/store';
import { LockButton } from './LockButton';

export function UI() {
  const isLocked = useStore((state: State) => state.isLocked);

  if (isLocked) {
    return null;
  }

  return (
    <div className='absolute top-0 left-0 w-full h-full bg-cyan-600'>
      <LockButton />
    </div>
  );
}
