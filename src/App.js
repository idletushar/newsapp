import './App.css';
import React, { Component } from 'react'
import Navbar from './Comps/Navbar';
import News from './Comps/News';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import LoadingBar from 'react-top-loading-bar' //using from npmjs


export default class App extends Component {
  pageSize = 9;
  // env.local (envirenment variable) variable
  apiKey = process.env.REACT_APP_NEWS_APP


  state={

  }
  setProgress = (progress)=>{
    this.setState({progress: progress})
  }



  render() {
    return (
    <>
      <div>
        <Router>
          <Navbar/>
          <LoadingBar
        color='#f11946'
        progress={this.state.progress}
      />
          <Switch>
            <Route exact path="/">
              < News setProgress={this.setProgress} apiKey={this.apiKey} key="general" pageSize={this.pageSize} country="in" title="Top Headlines" category="general"/>
            </Route>
            <Route exact path="/business">
              < News setProgress={this.setProgress} apiKey={this.apiKey} key="business" pageSize={this.pageSize} country="in" title="Business - Top Headlines" category="business"/>
            </Route>
            <Route exact path="/entertainment">
              < News setProgress={this.setProgress} apiKey={this.apiKey} key="entertainment" pageSize={this.pageSize} country="in" title="Entertainment - Top Headlines" category="entertainment"/>
            </Route>
            <Route exact path="/general">
              < News setProgress={this.setProgress} apiKey={this.apiKey} key="general" pageSize={this.pageSize} country="in" title="Top Headlines" category="general"/>
            </Route>
            <Route exact path="/health">
              < News setProgress={this.setProgress} apiKey={this.apiKey} key="health" pageSize={this.pageSize} country="in" title="Health - Top Headlines" category="health"/>
            </Route>
            <Route exact path="/science">
              < News setProgress={this.setProgress} apiKey={this.apiKey} key="science"pageSize={this.pageSize} country="in" title="Science - Top Headlines" category="science"/>
            </Route>
            <Route exact path="/sports">
              < News setProgress={this.setProgress} apiKey={this.apiKey} key="sports"pageSize={this.pageSize} country="in" title="Sports - Top Headlines" category="sports"/>
            </Route>
            <Route exact path="/technology">
              < News setProgress={this.setProgress} apiKey={this.apiKey} key="technology"pageSize={this.pageSize} country="in" title="Technology - Top Headlines" category="technology"/>
            </Route>
          </Switch>
        </Router>
      </div>
    </>
    )
  }
}
