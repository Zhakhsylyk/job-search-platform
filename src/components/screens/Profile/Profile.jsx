import React, { Fragment, useEffect } from "react";
import Header from "../../header/Header";
import "./styles/style.scss";
import avatar from "../../../images/candidate.png";
import assessment from "../../../images/assessment.svg";
import attach from "../../../images/attach.svg";
import profile from "../../../images/profile.svg";
import loop from "../../../images/loop.svg";
import document from "../../../images/document.svg";
import { JobCard } from "../../card/Card";
import { jobs } from "../../../constants/jobs";
import { Footer } from "../../footer/Footer";
import { Link } from "react-router-dom";

export const Profile = () => {

  const Main = () => {
    return (
      <div className="profile__main">
        <div className="profile__main_inner">
          <img src={avatar} alt="avatar" width={250} height={250} />
          <div>
            <span>Alikhan Zhakhsylyk</span>
            <p>
              username: <span>azhakhsylyk</span>{" "}
            </p>
            <p>
              Email: <span>azhakhsylyk@gmail.com</span>{" "}
            </p>
          </div>
        </div>

        <div className="profile__main_outer-block">
          <Link to="/resume">
            <div className="profile__main_outer-block__item">Start a new resume</div>
          </Link>
          <div className="profile__main_outer-block__item">
            Upload existing resume
          </div>
        </div>
      </div>
    );
  };
  const Recommendations = () => {
    return (
      <div className="profile__recommendations">
        <div className="profile__recommendations_title">
          <div className="profile__recommendations_side"></div>
          <p>Recommendations</p>
          <div className="profile__recommendations_side"></div>
        </div>
        <div className="profile__recommendations_list">
          {jobs.map((item) => {
            return <JobCard data={item} />;
          })}
        </div>
      </div>
    );
  };
  return (
    <Fragment>
      <Header />
      <Main />
      <Recommendations />
      <Footer />
    </Fragment>
  );
};
