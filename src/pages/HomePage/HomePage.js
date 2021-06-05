import React, { Component } from 'react';
import axios from 'axios';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from "prop-types"; 

import styles from '../../pages/Pages.module.css';

class HomePage extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  };

  state = {
    trandingMovies: [],
  }

  async componentDidMount() {
    const response = await axios
      .get('https://api.themoviedb.org/3/trending/movie/day?api_key=7116d13f34d25e4b272adb87a6322482');
    const movies = response.data.results;
    this.setState({ trandingMovies: movies })
  }

  render() {
    const { location } = this.props;
    return (
      <div className={styles.Movies}>
        <h2 className={styles.MoviesTitle}>Tranding today</h2>
        <ul className={styles.MoviesList}>
          {this.state.trandingMovies.map(movie =>
            <li key={movie.id} className={styles.MoviesItem}>
              <Link to={{
                pathname: `/movies/${movie.id}`,
                state: {
                  from: location,
                }
              }} className={styles.MoviesLink}>
                {movie.title}
              </Link>
            </li>)}
        </ul>
      </div>
    )
  }
}

export default withRouter(HomePage);