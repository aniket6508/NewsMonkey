import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Navbar extends Component {
  render() {
    return (
      <nav className="text-white bg-slate-950">
        <div className="flex flex-wrap max-w-screen-xl items-center justify-between mx-auto p-3">
            <a href="/" className="flex items-center">
            <span className="whitespace-nowrap self-center text-2xl font-semibold">NewsMonkey</span>
        </a>
        <div className="flex flex-col">
          <ul className="flex flex-wrap mx-8 items-center font-semibold text-lg ">
            <li className="p-3 mx-auto transition delay-100 hover:text-gray-400 hover:-translate-y-1"><Link to="/">Home</Link></li>
            <li  className="p-3 mx-auto transition delay-100 hover:text-gray-400 hover:-translate-y-1"><Link to='/business'>Business</Link></li>
            <li className="p-3 mx-auto transition delay-100 hover:text-gray-400 hover:-translate-y-1"><Link to='/sports'>Sports</Link></li>
            <li className="p-3 mx-auto transition delay-100 hover:text-gray-400 hover:-translate-y-1"><Link to='/entertainment'>Entertainment</Link></li>
            <li className="p-3 mx-auto transition delay-100 hover:text-gray-400 hover:-translate-y-1"><Link to='/science'>Science</Link></li>
            </ul>
        </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
