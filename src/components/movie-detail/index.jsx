import { useParams } from "react-router-dom";
import useMovieStorage from "../../common/state-management/movie-storage";
import { useMemo } from "react";

const MovieDetailPage = () => {
  const params = useParams();
  const { movies } = useMovieStorage();
  const movie = useMemo(() => movies.find(movie=>movie.id===params?.id), [params?.id]);
  return (
    <div>MovieDetailPage</div>
  )
}

export default MovieDetailPage;