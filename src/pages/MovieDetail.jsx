import { useParams } from 'react-router-dom';

function MovieDetail() {
  const { id } = useParams();
  // TODO Task 3: fetch real movie data using this id

  return (
    <main>
      <h1>Movie Detail — ID: {id}</h1>
    </main>
  );
}

export default MovieDetail;
