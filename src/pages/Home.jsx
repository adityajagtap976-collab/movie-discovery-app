import MovieCard from '../components/MovieCard';
import SearchBar from '../components/SearchBar';
import fakeMovies from '../data/fakeMovies';
import styles from '../styles/Home.module.css';

function Home() {
  // TODO Task 3: replace these hardcoded flags with real loading/error state
  const isLoading = false;
  const hasError = false;

  return (
    <main className={styles.page}>
      <h1 className={styles.title}>Discover Movies</h1>
      <p className={styles.subtitle}>A static UI skeleton with fake data.</p>

      {isLoading ? <p className={styles.loading}>Loading...</p> : null}
      {hasError && (
        <div className={styles.error}>Something went wrong loading movies.</div>
      )}

      <div className={styles.searchWrap}>
        <SearchBar />
      </div>

      <section className={styles.grid}>
        {fakeMovies.map((movie) => (
          <MovieCard
            key={movie.id}
            id={movie.id}
            title={movie.title}
            posterUrl={movie.posterUrl}
            rating={movie.rating}
            releaseYear={movie.releaseYear}
          />
        ))}
      </section>
    </main>
  );
}

export default Home;
