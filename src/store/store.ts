import create from 'zustand';
import shallow from 'zustand/shallow';

export const initialState = {
  isLocked: false,
};

export interface State {
  isLocked: boolean;
  toggleIsLocked: () => void;
}

const useStoreImpl = create<State>((set) => ({
  isLocked: false,
  toggleIsLocked: () => set((state: State) => ({ isLocked: !state.isLocked })),
}));

export { shallow };

const useStore = <T>(sel: any): T => useStoreImpl(sel, shallow);

Object.assign(useStore, useStoreImpl);

const { getState, setState, subscribe } = useStoreImpl;

export { getState, setState, subscribe, useStore };
