import React, { Component } from 'react';
// import { Link } from 'react-router-dom';  
// import axios from 'axios';
import Searchbar from '../../components/Searchbar/Searchbar';

class MoviesPage extends Component {
  state = {
    searchQuery: '',
    moviesTitle: [],
  }

  //   async componentDidUpdate() {
  //   const response = await axios
  //     .get(`https://api.themoviedb.org/3/search/batman?api_key=7116d13f34d25e4b272adb87a6322482`)
  //     console.log(response);
  // }

  // getMovies = () => {
  //   axios
  //     .get(`https://api.themoviedb.org/3/search/${this.state.searchQuery}?api_key=7116d13f34d25e4b272adb87a6322482`)
  //     .then(response => console.log(response))
  // }

  changeQuery = query => {
    this.setState({
      searchQuery: query,
    })
  }

  render(){
    return (
      <>
        <Searchbar onSubmit={this.changeQuery} />
        <p>{this.state.searchQuery}</p>
        {/* {
          this.state.moviesTitle && this.state.moviesTitle.includes(this.state.searchQuery) && <h2>{this.state.searchQuery}</h2>
        } */}
      </> 
    )
  }
}

export default MoviesPage;