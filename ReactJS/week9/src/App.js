import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import './App.css';
import TodoList from './components/TodoList';
import About from './components/About';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <NavLink exact to="/" activeClassName="active">
                Daftar Tugas
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" activeClassName="active">
                Tentang
              </NavLink>
            </li>
          </ul>
        </nav>

        <Route exact path="/" component={TodoList} />
        <Route path="/about" component={About} />
      </div>
    </Router>
  );
}

export default App;
