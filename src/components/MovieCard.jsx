import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addMovie, removeMovie } from '../redux/watchlistSlice';
import styles from '../styles/MovieCard.module.css';

function MovieCard({ id, title, posterUrl, rating = 'N/A', releaseYear }) {
  const dispatch = useDispatch();
  const isInWatchlist = useSelector((state) =>
    state.watchlist.items.some((m) => m.id === id)
  );

  const parsedRating = Number(rating);
  const numericRating = !isNaN(parsedRating) && rating !== null && rating !== '' ? parsedRating : null;
  const displayRating = numericRating !== null ? numericRating.toFixed(1) : 'N/A';

  const borderColor =
    numericRating == null || numericRating === 0
      ? '#6b7280'
      : numericRating >= 8
        ? '#22c55e'
        : numericRating >= 6
          ? '#eab308'
          : '#ef4444';

  function handleToggleWatchlist(e) {
    e.preventDefault();
    e.stopPropagation();
    if (isInWatchlist) {
      dispatch(removeMovie({ id }));
    } else {
      dispatch(addMovie({ id, title, posterUrl, rating, releaseYear }));
    }
  }

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
            <span className={styles.rating}>{displayRating}</span>
            <p className={styles.year}>{releaseYear}</p>
          </div>
          <button className={styles.watchlistButton} onClick={handleToggleWatchlist}>
            {isInWatchlist ? '− Remove' : '+ Watchlist'}
          </button>
        </div>
      </article>
    </Link>
  );
}

MovieCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  posterUrl: PropTypes.string.isRequired,
  rating: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  releaseYear: PropTypes.number,
};

export default MovieCard;