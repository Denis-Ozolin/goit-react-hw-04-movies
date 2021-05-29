import React, { Component } from 'react';
import axios from 'axios';

class Cast extends Component{
  state = {
    casts: [],
  }

  async componentDidMount() {
    const { movieId } = this.props.match.params;
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=7116d13f34d25e4b272adb87a6322482`)
    this.setState({casts: response.data.cast})
    console.log(this.state.casts);
  }
  
  render() {
    const { casts } = this.state;
    return (
      <>
        <h1>cast</h1>
        <ul>
          {casts.map(cast => (<li key={cast.id}>{cast.name}</li>))}
        </ul> 
      </>
    )
  }
}

export default Cast;