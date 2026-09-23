import SearchBar from '../components/SearchBar';
import MovieGrid from '../components/MovieGrid';
import { withLoadingState } from '../hocs/withLoadingState';
import { fetchPopularMovies } from '../services/api-fetch';
import { useFetch } from '../hooks/useFetch';
import styles from '../styles/Home.module.css';

const FALLBACK_POSTER = 'https://placehold.co/300x450';
const MovieGridWithLoading = withLoadingState(MovieGrid);

function Home() {
  const { data, isLoading, error } = useFetch(fetchPopularMovies, []);
  const movies = (data || []).map((movie) => ({
    id: movie.id,
    title: movie.title,
    posterUrl: movie.poster_path
      ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
      : FALLBACK_POSTER,
    rating: movie.vote_average,
    releaseYear: movie.release_date ? Number(movie.release_date.split('-')[0]) : undefined,
  }));

  return (
    <main className={styles.page}>
      <h1 className={styles.title}>Discover Movies</h1>
      <p className={styles.subtitle}>Popular movies, live from TMDB.</p>

      <div className={styles.searchWrap}>
        <SearchBar />
      </div>

      <MovieGridWithLoading
        isLoading={isLoading}
        error={error}
        movies={movies}
        loadingClassName={styles.loading}
        errorClassName={styles.error}
      />
    </main>
  );
}

export default Home;