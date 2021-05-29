import React, { Component } from 'react';
import axios from 'axios';

class Reviews extends Component{
  state = {
    reviews: [],
  }

  async componentDidMount() {
    const { movieId } = this.props.match.params;
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=7116d13f34d25e4b272adb87a6322482`)
    console.log(response.data.results);
    this.setState({reviews: response.data.results})
    // console.log(this.state.casts);
  }
  
  render() {
    const { reviews } = this.state;
    return (
      <>      
        <h1>Reviews</h1>
        <ul>
          {reviews.map(review => (<li key={review.id}>
            <p>{review.author}</p>
            <p>{review.content}</p>
          </li>))}
        </ul> 
      </>
    )
  }
} 

export default Reviews;