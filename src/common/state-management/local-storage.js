import { create } from "zustand";
import { ParseLocalStorageValue } from "../functions/local-storage-functions";
import { LocalStorageKeys } from "../constants/local-storage-keys";

const clearState = (state) => ({
    updateStorage: state.updateStorage,
    initializeItem: state.initializeItem,
    removeItem: state.removeItem,
    clearStorage: state.clearStorage,
});

const updateLocalStorage = (key, value) => {
    value === null || value === undefined
        ? localStorage.removeItem(key)
        : localStorage.setItem(key, JSON.stringify(value));
};

const getStateFromLocalStorage = () => {
    const initialState = {};

    Object.values(LocalStorageKeys).forEach((key) => {
        const storedValue = localStorage.getItem(key);
        if (storedValue) {
            initialState[key] = ParseLocalStorageValue(storedValue);
        }
    });
    return initialState;
};

const addLocalStorageEventListener = (set, get) => {
    const storageListener = (event) => {
        const key = event.key;
        const newValue = event.newValue;

        if (key === null) {
            set((state) => clearState(state), true);
        } else if (Object.values(LocalStorageKeys).includes(key)) {
            if (get()[key] !== newValue) {
                set({ [key]: ParseLocalStorageValue(newValue) });
            }
        }
    };

    addEventListener("storage", storageListener);
};

export const useLocalStorage = create()((set, get) => {
    const initialState = getStateFromLocalStorage();

    addLocalStorageEventListener(set, get);

    return {
        ...initialState,
        updateStorage: (key, value) => {
            updateLocalStorage(key, value);
            set(() => ({ [key]: value }));
        },
        initializeItem: (key, value) => {
            const currentValue = get()[key];
            if (!currentValue) {
                updateLocalStorage(key, value);
                set(() => ({ [key]: value }));
            }
        },
        removeItem: (key) => {
            localStorage.removeItem(key);
            set(() => ({ [key]: undefined }));
        },
        clearStorage: () => {
            localStorage.clear();
            set((state) => clearState(state), true);
        },
    };
});