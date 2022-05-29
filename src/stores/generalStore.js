import create from 'zustand';

const useGeneralStore = create((set) => ({
    user: null,
    loggedIn: false,
    choice: {},
    recommendation: {},
    
    setUser: (user) => set(() => ({ user: user })),
    setLoggedIn: (loggedIn) => set(() => ({ loggedIn: loggedIn })),
    setChoice: (choice) => set(() => ({ choice: choice })),
    setRecommendation: (recommendation) => set(() => ({ recommendation: recommendation })),
}));

export const useUser = () => useGeneralStore((state) => state.user);
export const useLoggedIn = () => useGeneralStore((state) => state.loggedIn);
export const useChoice = () => useGeneralStore((state) => state.choice);
export const useRecommendation = () => useGeneralStore((state) => state.recommendation);

export const useSetUser = () => useGeneralStore((state) => state.setUser);
export const useSetLoggedIn = () => useGeneralStore((state) => state.setLoggedIn);
export const useSetChoice = () => useGeneralStore((state) => state.setChoice);
export const useSetRecommendation = () => useGeneralStore((state) => state.setRecommendation);

export default useGeneralStore;
