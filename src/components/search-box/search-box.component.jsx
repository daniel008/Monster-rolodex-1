import React, { Component } from 'react'
import './search-box.style.css'

class SearchBox extends Component {
  render() {
    const { className, type, placeholder, onChangeHandler } = this.props
    return (
      <div>
        <input
          className={`search-box ${className}`}
          type={type}
          placeholder={placeholder}
          onChange={onChangeHandler}
        />
      </div>
    )
  }
}

export default SearchBox
