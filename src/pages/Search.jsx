import { useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import MovieGrid from '../components/MovieGrid';
import { withLoadingState } from '../hocs/withLoadingState';
import { searchMovies } from '../services/api-axios';
import { useFetch } from '../hooks/useFetch';
import styles from '../styles/Home.module.css';

const FALLBACK_POSTER = 'https://placehold.co/300x450';
const MovieGridWithLoading = withLoadingState(MovieGrid);

function Search() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query') || '';
  const page = searchParams.get('page') || '1';

  const fetcher = useCallback(() => {
    if (!query) return Promise.resolve([]);
    return searchMovies(query, page);
  }, [query, page]);

  const { data, isLoading, error } = useFetch(fetcher, [query, page]);
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
      <h1 className={styles.title}>Search Results</h1>
      <div className={styles.searchWrap}>
        <SearchBar />
      </div>

      {query && (
        <p className={styles.subtitle}>
          Results for "{query}" — page {page}
        </p>
      )}
      {!isLoading && !error && query && movies.length === 0 && (
        <p className={styles.subtitle}>No results found.</p>
      )}

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

export default Search;