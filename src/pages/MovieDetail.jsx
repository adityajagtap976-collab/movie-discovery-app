import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieById } from '../services/api-axios';

const FALLBACK_POSTER = 'https://placehold.co/500x750';

function MovieDetail() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    setError(null);
    fetchMovieById(id)
      .then(setMovie)
      .catch((err) => setError(err.message))
      .finally(() => setIsLoading(false));
  }, [id]);

  if (isLoading) return <main><p>Loading...</p></main>;
  if (error) return <main><p>{error}</p></main>;
  if (!movie) return null;

  return (
    <main>
      <h1>{movie.title}</h1>
      <img
        src={
          movie.poster_path
            ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
            : FALLBACK_POSTER
        }
        alt={`${movie.title} poster`}
        style={{ maxWidth: '300px' }}
      />
      <p>{movie.overview}</p>
      <p>Rating: {movie.vote_average}</p>
      <p>Release Year: {movie.release_date ? movie.release_date.split('-')[0] : 'N/A'}</p>
    </main>
  );
}

export default MovieDetail;