import React, { Component } from 'react'

export default class
  extends Component {
  render() {

    let { item } = this.props;

    return (
      <div>
        <img onClick={() => {
          this.props.changeGlasses(item)
        }} style={{ width: "100px", padding: "4px 6px", border: "1px solid black", cursor: "pointer" }} src={item.url} />
      </div>
    )
  }
}
