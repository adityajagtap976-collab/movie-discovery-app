import { useSearchParams } from 'react-router-dom';

function Search() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query');
  const page = searchParams.get('page');
  // TODO Task 3: wire SearchBar submit to update these params, then fetch results

  return (
    <main>
      <h1>Search Page</h1>
      <p>
        Searching for: {query}, Page: {page}
      </p>
    </main>
  );
}

export default Search;
