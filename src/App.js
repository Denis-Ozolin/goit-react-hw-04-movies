import React from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import MoviesPage from './pages/MoviesPage/MoviesPage';
import MovieDetailsPage from './pages/MovieDetailsPage/MovieDetailsPage';
import Cast from './components/Cast/Cast';
import Rewiews from './components/Reviews/Reviews';
import styles from './pages/Pages.module.css';


const App = () => (
  <>
    <ul className={styles.NavList}>
      <li className={styles.NavItem}><NavLink exact to='/' className={styles.NavLink} activeClassName={styles.NavLinkActive}>home</NavLink></li>
      <li className={styles.NavItem}><NavLink to='/movies' className={styles.NavLink} activeClassName={styles.NavLinkActive}>movies</NavLink></li>
    </ul>
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route path='/movies/:movieId/credits' component={Cast} />
      <Route path='/movies/:movieId/reviews' component={Rewiews} /> 
      <Route path='/movies/:movieId' component={MovieDetailsPage} /> 
      <Route path='/movies' component={MoviesPage} />
      <Route component={HomePage} />
    </Switch>
  </>
)

export default App;
