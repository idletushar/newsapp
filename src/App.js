import './App.css';
import React, { Component } from 'react'
import Navbar from './Comps/Navbar';
import News from './Comps/News';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"


export default class App extends Component {
  pageSize = 9;
  render() {
    return (
    <>
      <div>
        <Router>
          <Navbar/>
          <Switch>
            <Route exact path="/">
              <News key="general" pageSize={this.pageSize} country="in" title="Top Headlines" category="general"/>
            </Route>
            <Route exact path="/business">
              <News key="business" pageSize={this.pageSize} country="in" title="Business - Top Headlines" category="business"/>
            </Route>
            <Route exact path="/entertainment">
              <News key="entertainment" pageSize={this.pageSize} country="in" title="Entertainment - Top Headlines" category="entertainment"/>
            </Route>
            <Route exact path="/general">
              <News key="general" pageSize={this.pageSize} country="in" title="Top Headlines" category="general"/>
            </Route>
            <Route exact path="/health">
              <News key="health" pageSize={this.pageSize} country="in" title="Health - Top Headlines" category="health"/>
            </Route>
            <Route exact path="/science">
              <News key="science"pageSize={this.pageSize} country="in" title="Science - Top Headlines" category="science"/>
            </Route>
            <Route exact path="/sports">
              <News key="sports"pageSize={this.pageSize} country="in" title="Sports - Top Headlines" category="sports"/>
            </Route>
            <Route exact path="/technology">
              <News key="technology"pageSize={this.pageSize} country="in" title="Technology - Top Headlines" category="technology"/>
            </Route>
          </Switch>
        </Router>
      </div>
    </>
    )
  }
}
