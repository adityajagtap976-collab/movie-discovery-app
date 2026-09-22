import axios from 'axios';

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

const tmdbClient = axios.create({
  baseURL: BASE_URL,
  params: { api_key: API_KEY, language: 'en-US' },
});

export async function searchMovies(query, page = 1) {
  try {
    const response = await tmdbClient.get('/search/movie', {
      params: { query, page },
    });
    return response.data.results;
  } catch (err) {
    throw new Error('Failed to search movies');
  }
}

export async function fetchMovieById(id) {
  try {
    const response = await tmdbClient.get(`/movie/${id}`);
    return response.data;
  } catch (err) {
    throw new Error('Failed to fetch movie details');
  }
}