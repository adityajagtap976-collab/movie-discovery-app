import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import ErrorBoundary from './components/ErrorBoundary';
import Navbar from './components/Navbar';
import { store } from './redux/store';
import Home from './pages/Home';
import MovieDetail from './pages/MovieDetail';
import Search from './pages/Search';
import Watchlist from './pages/Watchlist';

function App() {
  return (
    <Provider store={store}>
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
    </Provider>
  );
}

export default App;