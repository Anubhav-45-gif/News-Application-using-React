
import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';

import LoadingBar from 'react-top-loading-bar'

//import NewsItem from './components/NewsItem';
import {
  BrowserRouter as Router,
  RouterProvider,
  Route,
  Routes,
} from "react-router-dom";
import Demo from './Demo';

export default class App extends Component {
  state={
    progress:0
  }
  setprogress=(progress)=>{
    this.setState({progress:progress});
  }
  render() {
    return (
      <div>
          <Router>
          <Navbar />
          <LoadingBar
        color='#f11946'
        progress={this.state.progress}
        
      />
          <Routes>
            <Route exact path='/' element={<News setProgress={this.setprogress}s key='general' pagesize={12} country='us' category='general' />}></Route>
            <Route exact path='/General' element={<News setProgress={this.setprogress}s key='general' pagesize={12} country='us' category='general' />}></Route>
            <Route exact path='/Buisness' element={<News setProgress={this.setprogress}s key='business' pagesize={12} country='us' category='business' />}></Route>
            <Route exact path='/Entertainment' element={<News setProgress={this.setprogress}s key='entertainment' pagesize={12} country='us' category='entertainment' />}></Route>
            <Route exact path='/Health' element={<News setProgress={this.setprogress}s key='health' pagesize={12} country='us' category='health' />}></Route>
            <Route exact path='/Science' element={<News setProgress={this.setprogress}s key='science' pagesize={12} country='us' category='science' />}></Route>
            <Route exact path='/Sports' element={<News setProgress={this.setprogress}s key='sports' pagesize={12} country='us' category='sports' />}></Route>
            <Route exact path='/Technology' element={<News setProgress={this.setprogress}s key='technology' pagesize={12} country='us' category='technology' />}></Route>           
          </Routes>
        </Router>
      </div>
    )
  }
}

