import PropTypes from 'prop-types';
import MovieCard from './MovieCard';
import styles from '../styles/Home.module.css';

function MovieGrid({ movies }) {
  if (movies.length === 0) return null;
  return (
    <section className={styles.grid}>
      {movies.map((movie) => (
        <MovieCard key={movie.id} {...movie} />
      ))}
    </section>
  );
}

MovieGrid.propTypes = {
  movies: PropTypes.array.isRequired,
};

export default MovieGrid;