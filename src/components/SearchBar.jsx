import styles from '../styles/Home.module.css';

function SearchBar() {
  // TODO Task 3: wire up controlled input + onSubmit with preventDefault
  return (
    <form className={styles.searchForm}>
      <input
        className={styles.searchInput}
        type="text"
        placeholder="Search movies..."
      />
      <button className={styles.searchButton} type="submit">
        Search
      </button>
    </form>
  );
}

export default SearchBar;
