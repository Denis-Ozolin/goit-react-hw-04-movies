import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import styles from './Searchbar.module.css';

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
      <form className={styles.SearchForm} onSubmit={this.handleSubmit}>
        <input
          value={this.state.inputValue}
          onChange={this.handleChange}
          className={styles.SearchInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Input name movie"
        />
        <button type="submit" className={styles.SearchButton}>Search</button>
      </form>
    )
  }
}

// Searchbar.propTypes = {
//   onSubmit: PropTypes.func.isRequired
// }

export default Searchbar;