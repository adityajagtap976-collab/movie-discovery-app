const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

export async function fetchPopularMovies() {
  try {
    const response = await fetch(
      `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
    );
    if (!response.ok) {
      throw new Error(`TMDB request failed with status ${response.status}`);
    }
    const data = await response.json();
    return data.results;
  } catch (err) {
    throw new Error("Failed to fetch popular movies");
  }
}