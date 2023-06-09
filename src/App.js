
import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Routes,
    Route,
  
} from "react-router-dom";

export default class App extends Component {
  apikey=process.env.REACT_APP_NEWS_APIKEY;
  pageSize=5
  state={
    progress:0
  }
  
 setProgress=(progress)=>{
  this.setState({progress:progress})
 }
  render() {
    return (
      <div>
        <Router>
        <Navbar/>
        <LoadingBar
        height={3}
        color='#f11946'
        progress={this.state.progress} 
       
      />
        
        <Routes>
          <Route exact path="/"element={<News setProgress={this.setProgress} apikey={this.apikey}  key={"general"} pageSize={this.pageSize} country={"in"} category={"general"}/>}/>
          <Route exact path="/sports" element={<News setProgress={this.setProgress} apikey={this.apikey}  key={"sports"} pageSize={this.pageSize} country={"in"} category={"sports"}/>}/>
          <Route exact path="/entertainment" element={<News setProgress={this.setProgress} apikey={this.apikey}  key={"entertainment"} pageSize={this.pageSize} country={"in"} category={"entertainment"}/>}/>
          <Route exact path="/science" element={<News setProgress={this.setProgress} apikey={this.apikey}  key={"science"}pageSize={this.pageSize} country={"in"} category={"science"}/>}/>
          <Route exact path="/technology" element={<News setProgress={this.setProgress} apikey={this.apikey}  key={"technology"} pageSize={this.pageSize} country={"in"} category={"technology"}/>}/>
          <Route exact path="/business"element={ <News setProgress={this.setProgress} apikey={this.apikey}  key={"business"}pageSize={this.pageSize} country={"in"} category={"business"}/>}/>
          <Route exact path="/health" element={<News setProgress={this.setProgress} apikey={this.apikey}  key={"health"}pageSize={this.pageSize} country={"in"} category={"health"}/>}/>
          
        </Routes>

        </Router>
        </div>

    )
  }
}


