import {create} from 'zustand'



export const useStore = create((set) => ({
    globalNumber: 20,
    gameStage: 'view0',
    setGameStage1: () => set(state => ({ gameStage : 'view1' })),
    setGameStage2: () => set(state => ({ gameStage : 'view2' })),
    setGameStage3: () => set(state => ({ gameStage : 'view3' })),
    setGameStage4: () => set(state => ({ gameStage : 'view4' })),
    setGameStage5: () => set(state => ({ gameStage : 'view5' })),
    setGameStage6: () => set(state => ({ gameStage : 'view6' })),
    setGameStage7: () => set(state => ({ gameStage : 'view7' })),
    setGameStage8: () => set(state => ({ gameStage : 'view8' })),
}))