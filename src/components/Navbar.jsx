import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../styles/Navbar.module.css';

class Navbar extends React.Component {
  // TODO Task 3: add scroll-based lifecycle methods here

  render() {
    return (
      <nav className={styles.navbar}>
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
