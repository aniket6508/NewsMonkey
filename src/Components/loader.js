import React, { Component } from 'react'
import Loading from './loading.gif'
export class Loader extends Component {
  render() {
    return (
      <div>
        <img src={Loading} alt='loading' className="w-16 mx-auto"></img>
      </div>
    )
  }
}

export default Loader
