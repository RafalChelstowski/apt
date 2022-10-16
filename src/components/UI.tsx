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
      <div className='mt-60 ml-32 text-white text-lg'>
        1 - first floor <br />
        2 - second floor <br />
        click - place point <br />
        second click - place second point and create line <br />
        u - undo last point <br />
        c - clear all points <br />
      </div>
    </div>
  );
}
