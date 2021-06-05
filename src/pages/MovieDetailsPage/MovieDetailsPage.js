import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import axios from 'axios';
import Cast from '../../components/Cast/Cast';
import Rewiews from '../../components/Reviews/Reviews';
import styles from '../../pages/Pages.module.css';

class MovieDetailsPage extends Component{
  state = {
    movie: {},
    genres: [],
  }

  async componentDidMount() {
    const { movieId } = this.props.match.params;
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=7116d13f34d25e4b272adb87a6322482`);
    this.setState({ movie: response.data, genres: [...response.data.genres] });
  }

  handleGoBack = () => {
    const { location, history } = this.props;
    // console.log(location.state);

    if (location.state && location.state.from) {
      return history.push(location.state.from);
    }

    history.push('/')
  }
  
  render() {
    const { title, poster_path, vote_average, overview} = this.state.movie;
    const { genres } = this.state;
    const { match } = this.props;
    return (
      <>
        <button type="button" onClick={this.handleGoBack} className={styles.BackBtn}>Back</button>
        <div className={styles.MovieDetails}>
          <img className={styles.MovieDetailsImg} src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={title}/>
          <div className={styles.MovieDetailsContent}>
            <h3 className={styles.MovieDetailsTitle}>{title}</h3>
            <p>User score: {vote_average}</p>
            <p>Overview: </p>
            <p>{overview}</p>
            <p>Genres: </p>
            <ul className={styles.MovieDetailsGenresList}>
              {genres.map(genre => (
              <li key={genre.id}>
                {genre.name}.
              </li>))}  
            </ul>
          </div>
        </div>
        <div className={styles.MovieDetailsInfo}>
          <p>Aditional information</p>
          <ul>
            <li><Link to={`${match.url}/credits`}>Cast</Link></li>
            <li><Link to={`${match.url}/reviews`}>Reviews</Link></li>
          </ul>
        </div>
        <Route path={`${match.path}/credits`} component={Cast} />
        <Route path={`${match.path}/reviews`} component={Rewiews} /> 
      </>
    )
  }
}

export default MovieDetailsPage;