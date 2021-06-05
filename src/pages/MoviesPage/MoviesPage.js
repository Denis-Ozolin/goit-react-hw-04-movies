import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from "prop-types"; 
import axios from 'axios';
import Searchbar from '../../components/Searchbar/Searchbar';
import styles from '../Pages.module.css';

class MoviesPage extends Component {
static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  };

  state = {
    movies: [],
  }

  getMovies = (query) => {
    axios
      .get(`https://api.themoviedb.org/3/search/movie?api_key=7116d13f34d25e4b272adb87a6322482&query=${query}&page=1&language=en-US`)
      .then(response => {
        this.setState({ movies: response.data.results })
    })
  }

  render() {
    const { location } = this.props;
    return (
      <>
        <Searchbar onSubmit={this.getMovies} />
        <div className={styles.Movies}>
          <ul className={styles.List}>
            {this.state.movies.map(movie => (
              <li key={movie.id} className={styles.MoviesItem}>
                <Link to={{
                pathname: `/movies/${movie.id}`,
                state: {
                  from: location,
                }
              }} className={styles.MoviesLink}>
                  {movie.title}
                </Link>
              </li>))}
          </ul>         
        </div>
      </>  
    )
  }
}

export default withRouter(MoviesPage);