import React from 'react';
import './App.css';
import PageMe from './organism/page-me';
import PageAbout from './organism/page-about';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<PageMe />} />
          <Route path='/about' element={<PageAbout />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
