// store.js
import {create} from 'zustand';

export const useStore = create((set) => ({
  globalSides: 20,
  cubeSide: 'side0',
  setSide1: () => set(() => ({ cubeSide: 'side1' })),
  setSide2: () => set(() => ({ cubeSide: 'side2' })),
  setSide3: () => set(() => ({ cubeSide: 'side3' })),
  setSide4: () => set(() => ({ cubeSide: 'side4' })),
  setSide5: () => set(() => ({ cubeSide: 'side5' })),
  setSide6: () => set(() => ({ cubeSide: 'side6' })),
}));

