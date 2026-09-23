import { useWatchlist } from '../context/WatchlistContext';
import MovieCard from '../components/MovieCard';
import styles from '../styles/Home.module.css';

function Watchlist() {
  const { state, dispatch } = useWatchlist();

  return (
    <main className={styles.page}>
      <h1 className={styles.title}>My Watchlist</h1>

      {state.items.length === 0 ? (
        <p className={styles.subtitle}>
          Your watchlist is empty. Add movies from Home or Search.
        </p>
      ) : (
        <>
          <button
            className={styles.searchButton}
            onClick={() => dispatch({ type: 'CLEAR_WATCHLIST' })}
          >
            Clear All
          </button>
          <section className={styles.grid} style={{ marginTop: 16 }}>
            {state.items.map((movie) => (
              <MovieCard key={movie.id} {...movie} />
            ))}
          </section>
        </>
      )}
    </main>
  );
}

export default Watchlist;