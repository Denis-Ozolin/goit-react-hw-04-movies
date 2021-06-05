import React, { Component } from 'react';
import axios from 'axios';
import styles from './Reviews.module.css'

class Reviews extends Component{
  state = {
    reviews: [],
  }

  async componentDidMount() {
    const { movieId } = this.props.match.params;
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=7116d13f34d25e4b272adb87a6322482`)
    this.setState({reviews: response.data.results})
  }
  
  render() {
    const { reviews } = this.state;
    return (
      <>
      {!reviews.length ? (<h3 className={styles.ReviewError}>We don't have reviews for this movie</h3>): 
        (
          <ul>
            {reviews.map(review => (
            <li key={review.id}>
              <h3>{review.author}</h3>
              <p>{review.content}</p>
            </li>))}
          </ul>
        )}     
      </>
    )
  }
} 

export default Reviews;