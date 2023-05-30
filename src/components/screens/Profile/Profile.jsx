import React, { Fragment, useEffect, useState, useCallback } from "react";
import "./styles/style.scss";
import avatar from "../../../images/candidate.png";
import assessment from "../../../images/assessment.svg";
import attach from "../../../images/attach.svg";
import profile from "../../../images/profile.svg";
import loop from "../../../images/loop.svg";
import document from "../../../images/document.svg";
import { JobCard } from "../../card/Card";
import { jobs } from "../../../constants/jobs";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Dropzone from "../../dragndrop";
import Button from "@mui/material/Button";
import Loader from "../../loader/Loader";
import { toast } from "react-toastify";
import { AuthService, handleError } from "../../../services";

export const Profile = () => {
  const { t } = useTranslation();
  const [uploadBox, setUploadBox] = useState(false);
  const [loading, setLoading] = useState(false);
  const [files, setFiles] = useState(null);

  // const onDrop = useCallback(acceptedFiles => {
  //   setFiles(acceptedFiles);
  // }, [])

  const uploadResumeHandler = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setUploadBox(true);
    }, 500);
  };

  const onDrop = useCallback((acceptedFiles) => {
    setFiles(acceptedFiles);
  });

  const handleSubmitUpload = async () => {
    let body = new FormData();
    body.append("file", files[0]);
    try {
      setLoading(true);
      const res = await AuthService({
        method: "post",
        url: "/resumes/uploadFile",
        data: body,
        headers: { "Content-Type": "multipart/form-data" },
      });
      toast.success("Resume successfully uploaded!", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    } catch (err) {
      handleError(err);
    }
    setLoading(false);
    console.log("submitted");
    setUploadBox(false);
    setFiles(null);

    // }
  };
  const Main = () => {
    return (
      <div className="profile__main">
        <div className="profile__main_inner">
          <img src={avatar} alt="avatar" width={250} height={250} />
          <div>
            <span>Alikhan Zhakhsylyk</span>
            <p>
              {t("profile.username")}: <span>azhakhsylyk</span>{" "}
            </p>
            <p>
              {t("profile.email")}: <span>azhakhsylyk@gmail.com</span>{" "}
            </p>
          </div>
        </div>
        {!uploadBox && !loading ? (
          <div className="profile__main_outer-block">
            <Link to="/resume">
              <div className="profile__main_outer-block__item">
                {t("profile.create")}
              </div>
            </Link>
            <div
              className="profile__main_outer-block__item"
              onClick={uploadResumeHandler}
            >
              {t("profile.upload")}
            </div>
          </div>
        ) : (
          <>
            {loading ? (
              <div style={{ position: "relative", top: 20 }}>
                <Loader />
              </div>
            ) : (
              <>
                <Dropzone
                  accept={"application/pdf"}
                  onDrop={onDrop}
                  files={files}
                />
                <div
                  style={{
                    display: "flex",
                    gap: 10,
                    marginTop: -50,
                    marginLeft: "48%",
                  }}
                >
                  <Button
                    variant="contained"
                    color="success"
                    size="large"
                    onClick={handleSubmitUpload}
                    sx={{ fontWeight: 600 }}
                  >
                    Save
                  </Button>
                  <Button
                    variant="contained"
                    color="error"
                    size="large"
                    sx={{ fontWeight: 600 }}
                    onClick={() => {
                      setUploadBox(false);
                      setFiles(null);
                    }}
                  >
                    Cancel
                  </Button>
                </div>
              </>
            )}
          </>
        )}
      </div>
    );
  };
  const Recommendations = () => {
    return (
      <div className="profile__recommendations">
        <div className="profile__recommendations_title">
          <div className="profile__recommendations_side"></div>
          <p> {t("profile.recommendations")}</p>
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
      <Main />
      <Recommendations />
    </Fragment>
  );
};
