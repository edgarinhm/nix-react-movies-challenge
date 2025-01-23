import { create } from "zustand";

const initialState = {
    searchQuery: ''
}

const sharedStorage = ((set) => {
    return {
        ...initialState,
        setSearchQuery: (value) => set(() => ({ searchQuery: value })),
        reset: () => set(initialState),
    };
});


const useSharedStorage = create(sharedStorage);

export default useSharedStorage;