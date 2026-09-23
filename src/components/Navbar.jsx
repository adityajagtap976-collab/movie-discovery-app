import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../styles/Navbar.module.css';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isScrolled: false };
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.isScrolled !== this.state.isScrolled) {
      // eslint-disable-next-line no-console
      console.log('Navbar scroll state changed to:', this.state.isScrolled);
    }
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    const shouldShrink = window.scrollY > 40;
    if (shouldShrink !== this.state.isScrolled) {
      this.setState({ isScrolled: shouldShrink });
    }
  }

  render() {
    const navClass = this.state.isScrolled
      ? `${styles.navbar} ${styles.scrolled}`
      : styles.navbar;

    return (
      <nav className={navClass}>
        <h1 className={styles.brand}>Movie Discovery</h1>
        <div className={styles.links}>
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive ? `${styles.link} ${styles.active}` : styles.link
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/search"
            className={({ isActive }) =>
              isActive ? `${styles.link} ${styles.active}` : styles.link
            }
          >
            Search
          </NavLink>
          <NavLink
            to="/watchlist"
            className={({ isActive }) =>
              isActive ? `${styles.link} ${styles.active}` : styles.link
            }
          >
            Watchlist
          </NavLink>
        </div>
      </nav>
    );
  }
}

export default Navbar;