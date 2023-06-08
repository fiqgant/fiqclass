import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import './App.css';
import TodoList from './components/TodoList';
import About from './components/About';
import Contact from './components/Contact';


function App() {
  return (
    <Router forceRefresh={true}>
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
            <li>
              <NavLink to="/contact" activeClassName="active">
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>

        <Route exact path="/" component={TodoList} />
        <Route exact path="/contact" component={Contact} />
        <Route path="/about" component={About} />
      </div>
    </Router>
  );
}

export default App;
