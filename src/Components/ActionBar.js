import React from 'react'

export default React.createClass({
  render() {
    return (
      <div id="actionBar">
        <span>{this.props.count} items left</span>
        <div>
          <button>All</button>
          <button>Active</button>
          <button>Completed</button>
        </div>
        <button>Clear Completed</button>
      </div>
    )
  }
})