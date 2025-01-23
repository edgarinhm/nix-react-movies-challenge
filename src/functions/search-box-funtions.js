export const GetSearchMovies = (search, movies) => {
    return movies.filter((movie) => {
        const formatedSearch = search.toLowerCase();
        return (
            movie.title.toLowerCase().includes(formatedSearch) ||
            movie.overview.toLowerCase().includes(formatedSearch) ||
            movie.cast.join(",").toLowerCase().includes(formatedSearch)
        );
    });
}