import MovieCard from '../components/MovieCard';
import SearchBar from '../components/SearchBar';
import { fetchPopularMovies } from '../services/api-fetch';
import { useFetch } from '../hooks/useFetch';
import styles from '../styles/Home.module.css';

const FALLBACK_POSTER = 'https://placehold.co/300x450';

function Home() {
  const { data, isLoading, error } = useFetch(fetchPopularMovies, []);
  const movies = data || [];

  return (
    <main className={styles.page}>
      <h1 className={styles.title}>Discover Movies</h1>
      <p className={styles.subtitle}>Popular movies, live from TMDB.</p>

      {isLoading ? <p className={styles.loading}>Loading...</p> : null}
      {error && <div className={styles.error}>{error}</div>}

      <div className={styles.searchWrap}>
        <SearchBar />
      </div>

      <section className={styles.grid}>
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            id={movie.id}
            title={movie.title}
            posterUrl={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                : FALLBACK_POSTER
            }
            rating={movie.vote_average}
            releaseYear={
              movie.release_date ? Number(movie.release_date.split('-')[0]) : undefined
            }
          />
        ))}
      </section>
    </main>
  );
}

export default Home;