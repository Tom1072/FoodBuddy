import create from 'zustand';

const useGeneralStore = create((set) => ({
    user: null,
    loggedIn: false,
    setUser: (user) => set(() => ({ user: user })),
    setLoggedIn: (loggedIn) => set(() => ({ loggedIn: loggedIn })),
}));

export const useUser = () => useGeneralStore((state) => state.user);
export const useLoggedIn = () => useGeneralStore((state) => state.loggedIn);

export const useSetUser = () => useGeneralStore((state) => state.setUser);
export const useSetLoggedIn = () => useGeneralStore((state) => state.setLoggedIn);

export default useGeneralStore;
