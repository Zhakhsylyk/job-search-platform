import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./components/screens/Home/Home";
import { Candidates } from "./components/screens/Candidates/Candidates";
import { Jobs } from "./components/screens/Jobs/Jobs";
import { Blog } from "./components/screens/Blog/Blog";
import { Profile } from "./components/screens/Profile/Profile";
import Login from "./components/screens/Login/Login";
import Register from "./components/screens/Register/Register";
import Error from "./components/screens/404/404";
import { ToastContainer } from "react-toastify";
import Loader from "./components/loader/Loader";


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/candidates" element={<Candidates />} />
        <Route path="/articles" element={<Blog />} />
        <Route path="/me" element={<Profile />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <ToastContainer />
    </Router>
  );
}

export default App;
