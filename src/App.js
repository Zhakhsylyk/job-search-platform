import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './components/screens/Home/Home';
import { Candidates } from './components/screens/Candidates/Candidates';
import { Jobs } from './components/screens/Jobs/Jobs';
import { Blog } from './components/screens/Blog/Blog';
import { Profile } from './components/screens/Profile/Profile';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/candidates" element={<Candidates />} />
        <Route path="/articles" element={<Blog />} />
        <Route path="/account" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;