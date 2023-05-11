import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './components/screens/Home/Home';
import { Candidates } from './components/screens/Candidates/Candidates';
import { Jobs } from './components/screens/Jobs/Jobs';
import { Blog } from './components/screens/Blog/Blog';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/candidates" element={<Candidates />} />
        <Route path="/articles" element={<Blog />} />
      </Routes>
    </Router>
  );
}

export default App;