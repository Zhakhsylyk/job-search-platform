import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
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
import Form from "./components/screens/Profile/form";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import Protected from "./routes/Protected";
import { Candidate } from "./components/screens/Candidates/candidate/Candidate";
import Header from "./components/header/Header";
import { Footer } from "./components/footer/Footer";
import { Layout } from "./routes/Layout";

function App() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const loadingTime = window.location.href.includes("resume")
    ? 3000
    : window.location.href.includes("resume")
    ? 3000
    : 500;

  useEffect(() => {
    const handleRouteChange = () => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, loadingTime);
    };

    handleRouteChange();

    return () => {};
  }, [location]);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Routes>
            <Route
              exact
              path="/"
              element={
                <Layout>
                  <Home />
                </Layout>
              }
            />
            <Route
              path="/jobs"
              element={
                <Layout>
                  <Jobs />
                </Layout>
              }
            />
            <Route
              path="/candidates"
              element={
                <Layout>
                  <Candidates />
                </Layout>
              }
            />
            <Route
              path="/candidates/:id"
              element={
                <Layout>
                  <Candidate />
                </Layout>
              }
            />
            <Route
              path="/articles"
              element={
                <Layout>
                  <Blog />
                </Layout>
              }
            />
            <Route
              path="/articles/:id"
              element={
                <Layout>
                  <Article />
                </Layout>
              }
            />
            <Route
              path="/me"
              element={
                <Protected>
                  <Layout>
                    <Profile />
                  </Layout>
                </Protected>
              }
            />
            <Route path="/signin" element={<Login />} />
            <Route path="/signup" element={<Register />} />
            <Route
              path="/resume"
              element={
                <Protected>
                  <Form />
                </Protected>
              }
            />
            <Route
              path="*"
              element={
                <Layout>
                  <Error />
                </Layout>
              }
            />
          </Routes>
        </>
      )}
      <ToastContainer />
    </>
  );
}

export default App;
