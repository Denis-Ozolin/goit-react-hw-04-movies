import React, { Component } from "react";
import PropTypes from 'prop-types';

class Searchbar extends Component {

  state = {
    inputValue: ''
  }

  handleChange = (e) => {
    this.setState({ inputValue: e.currentTarget.value });
  }

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state.inputValue);
    this.resetState();
  }

  resetState = () => {
    this.setState({ inputValue: '' });
  }

  render() {
    return (
      <form className="SearchForm" onSubmit={this.handleSubmit}>
      

          <input
            value={this.state.inputValue}
            onChange={this.handleChange}
            className="SearchInput"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Input movie-title"
        />
          <button type="submit" className="SearchButton">search</button>
      </form>
  )
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired
}

export default Searchbar;