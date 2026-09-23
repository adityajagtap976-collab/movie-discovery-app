import { useSelector, useDispatch } from 'react-redux';
import { clearWatchlist } from '../redux/watchlistSlice';
import MovieCard from '../components/MovieCard';
import styles from '../styles/Home.module.css';

function Watchlist() {
  const items = useSelector((state) => state.watchlist.items);
  const dispatch = useDispatch();

  return (
    <main className={styles.page}>
      <h1 className={styles.title}>My Watchlist</h1>

      {items.length === 0 ? (
        <p className={styles.subtitle}>
          Your watchlist is empty. Add movies from Home or Search.
        </p>
      ) : (
        <>
          <button className={styles.searchButton} onClick={() => dispatch(clearWatchlist())}>
            Clear All
          </button>
          <section className={styles.grid} style={{ marginTop: 16 }}>
            {items.map((movie) => (
              <MovieCard key={movie.id} {...movie} />
            ))}
          </section>
        </>
      )}
    </main>
  );
}

export default Watchlist;