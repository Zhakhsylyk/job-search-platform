import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
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
import { Article } from "./components/screens/Blog/article/Article";
import Checkout from "./components/screens/Profile/form/checkout/Checkout";



function App() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  // const loadingTime = window.location.href.includes('resume') ? 3000 : 500;

  useEffect(() => {
    const handleRouteChange = () => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 500);
    };

    handleRouteChange();

    return () => {
    };
  }, [location]);
  return (
    <>
      {loading ? <Loader /> :
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/candidates" element={<Candidates />} />
          <Route path="/articles" element={<Blog />} />
          <Route path="/articles/:id" element={<Article />} />
          <Route path="/me" element={<Profile />} />
          <Route path="/signin" element={<Login />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/resume" element={<Checkout />} />
          <Route path="*" element={<Error />} />
        </Routes>
      }
      <ToastContainer />
    </>
  );
}

export default App;
