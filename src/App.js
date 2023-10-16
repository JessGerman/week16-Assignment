import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';

import Home from './Components/Home';
import User from './Components/User';
import user from './Components/user.css';
import Navigation from './Components/Navigation';
import ToDoList from './Components/ToDoList';


export default function App() {
  return (

    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/user">User</Link>
            </li>
            <li>
              <Link to="/toDoList">ToDoList</Link>
            </li>

          </ul>
        </nav>

        <Switch>

					<Route path="/user">
            <User />
          </Route>
           
					<Route path="/">
            <Home />
          </Route>
          
					<Route path="/toDoList">
            <Home />
          </Route>

				</Switch>
      </div>
    </Router>
  );
}