import {BrowserRouter} from 'react-router-dom'
import {Switch, Route} from 'react-router'
import React, { Component } from 'react';
import './App.css';
import TaskList from "./containers/TaskList/TaskList";

class App extends Component {
    render() {
        return (
            <div className="container">
                <BrowserRouter>
                  <Switch>
                      <Route path='/' component={TaskList}/>
                  </Switch>
              </BrowserRouter>
            </div>
        );
    }
}

export default App;
