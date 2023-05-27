import React from "react";
import avatar from "../../../../images/candidate.png";
import { useTranslation } from "react-i18next";
import "./style.scss";
import Rating from "@mui/material/Rating";
import DownloadIcon from "@mui/icons-material/Download";
import PersonIcon from "@mui/icons-material/Person";
import FmdGoodIcon from "@mui/icons-material/FmdGood";

export const Candidate = () => {
  const { t } = useTranslation();
  return (
    <div className="candidate_profile__main">
      <div className="candidate_profile__main-left">
        <img src={avatar} alt="avatar" width={250} height={250} />
        <div>
          <span className="candidate_profile__main-left-section_title">
            WORK
          </span>
          <div>
            <h3>Spotify New York</h3>
            <p>Experience 1-3 years</p>
            <p>Junior Back-end Developer</p>
          </div>
          <div>
            <h3>Spotify New York</h3>
            <p>Experience 1-3 years</p>
            <p>Junior Back-end Developer</p>
          </div>
        </div>
        <div>
          <span className="candidate_profile__main-left-section_title">
            SKILLS
          </span>
          <h3>Spotify New York</h3>
          <p>Experience 1-3 years</p>
          <p>Junior Back-end Developer</p>
        </div>
      </div>
      <div className="candidate_profile__main-right">
        <div style={{ display: "flex", alignItems: "center", gap: 30 }}>
          <h1>Alikhan Zhakhsylyk</h1>
          <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
            <FmdGoodIcon sx={{ color: "gray" }} />
            <p>Astana, Kazakhstan</p>
          </div>
        </div>
        <span>Product Designer</span>
        <div>
          <p className="candidate_profile__main-right-section_title">
            RANKINGS
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <h2>95</h2>
            <Rating name="read-only" value={4} readOnly />
          </div>
        </div>
        <button
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "green",
            color: "#fff",
            width: 200,
            gap: 5,
            fontSize: "1rem",
            padding: 10,
            border: 0,
          }}
        >
          <DownloadIcon />
          Download Resume
        </button>
        <div
          style={{
            borderBottom: "1px solid gray",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 6,
              borderBottom: "2px solid #4540db",
            }}
          >
            <PersonIcon />
            <p>About</p>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            gap: 30,
            flexDirection: "column",
            marginTop: 10,
          }}
        >
          <div>
            <span className="candidate_profile__main-right-section_title">
              Contact information
            </span>
            <div style={{ display: "flex", gap: 50 }}>
              <div>
                <p className="candidate_profile__main-right-section_title_field">
                  Phone:
                </p>
                <p className="candidate_profile__main-right-section_title_field">
                  Address:
                </p>
                <p className="candidate_profile__main-right-section_title_field">
                  E-mail:
                </p>
              </div>
              <div>
                <p className="candidate_profile__main-right-section_title_field">
                  87081478456
                </p>
                <p className="candidate_profile__main-right-section_title_field">
                  Mangilik El 52
                </p>
                <p className="candidate_profile__main-right-section_title_field">
                  azhaksylyk@gmail.com
                </p>
              </div>
            </div>
          </div>
          <div>
            <span className="candidate_profile__main-right-section_title">
              Basic information
            </span>
            <div style={{ display: "flex", gap: 50 }}>
              <div>
                <p className="candidate_profile__main-right-section_title_field">
                  Birthday:
                </p>
                <p className="candidate_profile__main-right-section_title_field">
                  Gender:
                </p>
              </div>
              <div>
                <p className="candidate_profile__main-right-section_title_field">
                  September 30, 2001
                </p>
                <p className="candidate_profile__main-right-section_title_field">
                  Male
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
