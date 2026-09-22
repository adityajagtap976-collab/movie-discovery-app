import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from '../styles/MovieCard.module.css';

function MovieCard({ id, title, posterUrl, rating = 'N/A', releaseYear }) {
  const numericRating = typeof rating === 'number' ? rating : null;
  const borderColor =
    numericRating == null
      ? '#6b7280'
      : numericRating >= 8
        ? '#22c55e'
        : numericRating >= 6
          ? '#eab308'
          : '#ef4444';

  return (
    <Link className={styles.cardLink} to={`/movie/${id}`}>
      <article
        className={styles.card}
        // Inline because the border color is derived from the rating at render time.
        // Layout and spacing stay in the CSS Module; only this dynamic value needs JS.
        style={{ border: `2px solid ${borderColor}` }}
      >
        <img className={styles.poster} src={posterUrl} alt={`${title} poster`} />
        <div className={styles.body}>
          <h2 className={styles.title}>{title}</h2>
          <div className={styles.meta}>
            <span className={styles.rating}>{rating}</span>
            <p className={styles.year}>{releaseYear}</p>
          </div>
        </div>
      </article>
    </Link>
  );
}

MovieCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  posterUrl: PropTypes.string.isRequired,
  rating: PropTypes.number,
  releaseYear: PropTypes.number,
};

MovieCard.defaultProps = {
  rating: 'N/A',
};

export default MovieCard;
