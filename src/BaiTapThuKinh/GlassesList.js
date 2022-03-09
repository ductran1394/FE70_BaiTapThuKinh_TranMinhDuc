import React, { Component } from 'react'
import GlassesItem from './GlassesItem';

export default class



  extends Component {

  renderGlassesList = () => {
    let { arrProduct } = this.props;
    return arrProduct.map((item, index) => {
      return <div className='col-2 ' style={{ margin: "4px 0" }} key={index} >
        <GlassesItem changeGlasses={this.props.changeGlasses} item={item} />
      </div>
    })
  }

  render() {
    return (
      <div className='row text-center' style={{ display: "flex", justifyContent: "start", padding: "20px" }}>
        {this.renderGlassesList()}
      </div>
    )
  }
}
