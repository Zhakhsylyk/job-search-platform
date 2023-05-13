import React from "react";
import styles from "./Footer.module.scss";
import logo from "../../images/jalda-logo.png";

export const Footer = () => {
  return (
    <div className={styles.wrapper}>
      <div
        style={{
          position: "absolute",
          height: 214,
          width: "73vw",
          background: "#FFF",
          boxShadow: "0px 1px 4px rgba(0, 0, 0, 0.25)",
          margin: "0 auto",
          borderRadius: 20,
          zIndex: 2,
          translate: "-50% -50%",
          left: "50%",
          padding: "48px 73px",
          display: "flex",
          alignItems: "center",
          gap: 75,
        }}
      >
        <p style={{ fontSize: "3.125rem", width: 434 }}>
          Never Want to Miss Any <span>Job News?</span>
        </p>
        <div
          style={{
            width: "27vw",
            height: 60,
            background: "#FFF",
            boxShadow: "0px 1px 4px rgba(0, 0, 0, 0.25)",
            borderRadius: 20,
            display: "flex",
            alignItems: "center",
            padding: "5px 6px",
          }}
        >
          <input type="text" placeholder="Enter your email..." />
          <button className={styles["btn"]}>Subscribe</button>
        </div>
      </div>
      <div
        style={{
          width: "80vw",
          display: "block",
          margin: "0 auto",
          paddingTop: 215,
          borderBottom: "2px solid #CDCDCD",
          paddingBottom: 40,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <img src={logo} alt="jalda" witdh={36} height={36} />
          <div>
            <ul>
              <li>About</li>
              <li>Jobs</li>
              <li>Contact</li>
            </ul>
          </div>
          <div style={{ marginRight: 0, marginLeft: "auto" }}>
            {" "}
            <ul className={styles["social-media-list"]}>
              <li>
                <a
                  href="#"
                  className="fa fa-instagram"
                  style={{ color: "#8C3AAA", fontSize: 24 }}
                ></a>
              </li>
              <li>
                <a
                  href="#"
                  className="fa fa-facebook"
                  style={{ color: "#337FFF", fontSize: 24 }}
                >
                  {" "}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="fa fa-twitter"
                  style={{ color: "#33CCFF", fontSize: 24 }}
                >
                  {" "}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
