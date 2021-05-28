import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import styles from '../../pages/Pages.module.css';

class HomePage extends Component {
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
    return (
      <div className={styles.TrendingMovies}>
        <h2 className={styles.TrendingMoviesTitle}>Trending today</h2>
        <ul className={styles.TrendingMoviesList}>
          {this.state.trandingMovies.map(movie =>
            <li key={movie.id} className={styles.TrendingMoviesItem}>
              <Link to={`/movies/${movie.id}`} className={styles.TrendingMoviesLink}>
                {movie.original_title}
              </Link>
            </li>)}
        </ul>
      </div>
      // ${this.props.match.url}
    )
  }
}

export default HomePage;