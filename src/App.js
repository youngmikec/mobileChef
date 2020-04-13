import React from 'react';
import './App.css';
import Head from './indexComponents/Head'
import Home from './indexComponents/Home'
import About from './indexComponents/About'
import Footer from './indexComponents/Footer'

import {BrowserRouter as Router, Route} from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <div className="App">
          <Head />
            <Route path="/" exact component={Home}></Route>
            <Route path="/about" component={About}></Route>
        </div>
      </Router>
      <Footer />
      
    </div>
  );
}

export default App;
