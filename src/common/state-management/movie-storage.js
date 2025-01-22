import { create } from "zustand";

const initialState = {
    movies:[]
}

const movieStorage = ((set) => {
    return {
        ...initialState,
        setMoviesState: (value) => set(() => ({ movies: value })),
        reset: () => set(initialState),
    };
});


const useMovieStorage = create(movieStorage);

export default useMovieStorage;