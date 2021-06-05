import React, { Component } from 'react';
import axios from 'axios';
import styles from './Cast.module.css';

class Cast extends Component{
  state = {
    casts: [],
  }

  async componentDidMount() {
    const { movieId } = this.props.match.params;
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=7116d13f34d25e4b272adb87a6322482`)
    this.setState({casts: response.data.cast})
  }
  
  render() {
    const { casts } = this.state;
    return (
        <ul>
          {casts.map(cast => (
            <li key={cast.id} className={styles.castsItem}>
              <h4 className={styles.castsName}>{cast.name}</h4>
              <img src={`https://image.tmdb.org/t/p/w500/${cast.profile_path}`} alt={cast.name} width='160px'></img>
              <p className={styles.castsCharName}>{cast.character}</p>
            </li>))}
        </ul>
    )
  }
}

export default Cast;