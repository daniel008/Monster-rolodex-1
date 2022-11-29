import React, { Component } from 'react'

class SearchBox extends Component {
  render() {
    const { className, type, placeholder, onChangeHandler } = this.props
    return (
      <div>
        <input
          className={className}
          type={type}
          placeholder={placeholder}
          onChange={onChangeHandler}
        />
      </div>
    )
  }
}

export default SearchBox
