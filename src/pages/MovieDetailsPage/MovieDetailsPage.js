import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import styles from '../../pages/Pages.module.css';

class MovieDetailsPage extends Component{
  state = {
    movie: {},
  }

  async componentDidMount() {
    const { movieId } = this.props.match.params;
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=7116d13f34d25e4b272adb87a6322482`);
    this.setState({ movie: response.data });
  }
  
  render() {
    const { title, poster_path, vote_average, overview } = this.state.movie;

    return (
      <>
        <div className={styles.MovieDetails}>
          <img className={styles.MovieDetailsImg} src={poster_path} alt={title}/>
          <div className={styles.MovieDetailsContent}>
            <h3 className={styles.MovieDetailsTitle}>{title}</h3>
            <p>User score: {vote_average}</p>
            <p>Overview: {overview}</p>
              {/* <div>{genres.map(({ id, name }) => <ul><li key={id}>{name}</li></ul>)}</div>           */}
          </div>
        </div>
        <p>Aditional information</p>
        <ul>
          <li><Link to={`${this.props.match.url}/credits`}>Cast</Link></li>
          <li><Link to={`${this.props.match.url}/reviews`}>Reviews</Link></li>
        </ul>       
      </>
    )
  }
}

export default MovieDetailsPage;