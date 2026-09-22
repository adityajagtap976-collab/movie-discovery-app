import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import MovieDetail from './pages/MovieDetail';
import Search from './pages/Search';
import Watchlist from './pages/Watchlist';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <ErrorBoundary>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/movie/:id" element={<MovieDetail />} />
          <Route path="/watchlist" element={<Watchlist />} />
        </Routes>
      </ErrorBoundary>
    </BrowserRouter>
  );
}

export default App;
