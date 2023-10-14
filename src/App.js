import './App.css';
import Navbar from './Components/Navbar';
import React, { Component } from 'react';
import News from './Components/news';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
        <Navbar/>
        <Routes>
        <Route exact path='/' element={<News key="general" category="general"/>}/>
        <Route exact path='/business' element={<News key="business"category="business"/>}/>
        <Route exact path='/sports' element={<News key="sports" category="sports"/>}/>
        <Route exact path='/entertainment' element={<News key="entertainment" category="entertainment"/>}/>
        <Route exact path='/science' element={<News key="science" category="science"/>}/>
        </Routes>
        </BrowserRouter>
        
      </div>
    )
  }
}

