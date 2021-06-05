import React, {Suspense, lazy} from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';
import styles from './pages/Pages.module.css';

const HomePage = lazy(() => import('./pages/HomePage/HomePage' /* webpackChunkName: "home-page"*/));
const MoviesPage = lazy(() => import('./pages/MoviesPage/MoviesPage' /* webpackChunkName: "movies-page"*/));
const MovieDetailsPage = lazy(() => import('./pages/MovieDetailsPage/MovieDetailsPage' /* webpackChunkName: "movie-details-page"*/));

const App = () => (
  <>
    <ul className={styles.NavList}>
      <li className={styles.NavItem}><NavLink exact to='/' className={styles.NavLink} activeClassName={styles.NavLinkActive}>home</NavLink></li>
      <li className={styles.NavItem}><NavLink to='/movies' className={styles.NavLink} activeClassName={styles.NavLinkActive}>movies</NavLink></li>
    </ul>
    <Suspense fallback={<h1>Loading...</h1>} >
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/movies/:movieId' component={MovieDetailsPage} /> 
        <Route path='/movies' component={MoviesPage} />
        <Route component={HomePage} />
      </Switch>
    </Suspense>
  </>
)

export default App;
