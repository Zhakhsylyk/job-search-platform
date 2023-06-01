import React, { useEffect, useState } from "react";
import styles from "./styles/Home.module.scss";
import jobSearch from "../../../images/main-picture.png";
import searchIcon from "../../../images/search-icon.svg";
import locationIcon from "../../../images/location-icon.svg";
import { CategoryCard, JobCard, SubscriptionCard } from "../../card/Card";
import { categories } from "../../../constants/categories";
import { jobs } from "../../../constants/jobs";
import usaFlag from "../../../images/usa.png";
import kzFlag from "../../../images/kazakhstan.png";
import ruFlag from "../../../images/russia.png";
import { subscriptions } from "../../../constants/subscriptions";
import resumeLogo from "../../../images/cvPicture.png";
import Select, { components } from "react-select";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";

const countries = [
  { value: "KZT", label: "KZT", icon: kzFlag },
  { value: "USD", label: "USD", icon: usaFlag },
  { value: "RUB", label: "RUB", icon: ruFlag },
];

const Option = (props) => (
  <components.Option {...props} className={styles["country-option"]}>
    <img
      src={props.data.icon}
      alt="logo"
      className="country-logo"
      width={18}
      height={18}
    />
    {props.data.label}
  </components.Option>
);

export const Home = () => {
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  useEffect(() => {
    console.log("test");
  }, []);

  const handleChange = (value) => {
    setSelectedCountry(value);
  };

  const handleFind = () => {
    navigate('/jobs');
  }

  const SingleValue = ({ children, ...props }) => (
    <components.SingleValue {...props}>
      <img
        src={selectedCountry.icon}
        alt="s-logo"
        className="selected-logo"
        width={18}
        height={18}
      />
      {children}
    </components.SingleValue>
  );

  const MainBody = () => {
    return (
      <div style={{ display: "flex", justifyContent: "center", marginTop: 10 }}>
        {i18n.language !== "kk" ? (
          <div>
            <p className={styles.title}>
              {t("title.index")} <span>{t("title.primary")}</span> <br />
              {t("title.next")}
            </p>
            <p className={styles.subtitle}>{t("subtitle")}</p>
          </div>
        ) : (
          <div>
            <p className={styles.title}>
              {t("title.index")} <br />
              <span>{t("title.primary")}</span> {t("title.next")}
            </p>
            <p className={styles.subtitle}>{t("subtitle")}</p>
          </div>
        )}
        <div>
          <img
            src={jobSearch}
            alt="logo"
            width={484}
            height={376}
            style={{ marginLeft: 96 }}
          />
        </div>
      </div>
    );
  };
  const SearchBar = () => {
    return (
      <div className={styles.search}>
        <img src={searchIcon} alt="search" width={35} height={35} />
        <input
          type="text"
          placeholder={t("searchTitle")}
          style={{ width: "35%" }}
        />
        <div className={styles.dividerLine} />
        <img
          src={locationIcon}
          alt="location"
          width={35}
          height={35}
          style={{ marginLeft: 20 }}
        />
        <input
          type="text"
          placeholder={t("searchLocation")}
          style={{ width: "40%" }}
        />
        <button className={styles.btn} onClick={handleFind}>{t("search")}</button>
      </div>
    );
  };
  const CategoryList = () => {
    return (
      <div className={styles["section__category"]}>
        <p style={{ textAlign: "center", fontSize: 50, fontWeight: 500 }}>
          {t("category.title")}
          <br />
          {t("category.titleNext")} <span>{t("category.primary")}</span>
        </p>
        <div
          style={{
            justifyContent: "center",
            display: "flex",
            flexWrap: "wrap",
            gap: 30,
            margin: "0 auto",
            width: "94.58vw",
          }}
        >
          {categories.map((item) => {
            return (
              <Link
                to="/jobs"
                style={{ color: "inherit", textDecoration: "inherit" }}
                key={item.id}
              >
                <CategoryCard data={item} key={item.id} />
              </Link>
            );
          })}
        </div>
      </div>
    );
  };

  const JobList = () => {
    return (
      <div className={styles["section__job"]}>
        <p
          style={{
            textAlign: "center",
            fontSize: 50,
            fontWeight: 500,
            margin: "78px 0 100px 0",
          }}
        >
          {t("job.title")} <span>{t("job.primary")}</span> {t("job.titleNext")}
        </p>
        <div
          style={{
            justifyContent: "center",
            display: "flex",
            flexWrap: "wrap",
            gap: 30,
            margin: "0 auto",
            width: "88.4vw",
          }}
        >
          {jobs.map((item) => {
            return <JobCard data={item} key={item.id} />;
          })}
        </div>
        <Link to='/jobs'>
          <button
            className={styles['section__job_button']}
          >
            {t("job.button")}
          </button>
        </Link>
      </div>
    );
  };

  const Subscriptions = () => {
    return (
      <div className={styles["section__subscription"]}>
        <p style={{ textAlign: "center", fontSize: 50, fontWeight: 500 }}>
          {t("subscription.title")} <span>{t("subscription.primary")}</span>
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 30,
            flexWrap: "wrap",
          }}
        >
          {subscriptions.map((item) => {
            return (
              <SubscriptionCard
                id={item.id}
                type={item.type}
                clientType={item.clientType}
                desc={item.desc}
                price={item.price}
                key={item.id}
                profitItems={item.profits}
                icon={item.icon}
              />
            );
          })}
        </div>
      </div>
    );
  };

  const ResumeUpload = () => {
    return (
      <div className={styles["section__resume"]}>
        <div
          style={{
            height: 523,
            maxWidth: "80vw",
            backgroundColor: "#4540DB",
            display: "block",
            margin: "91px auto 0",
            borderRadius: 20,
            display: "flex",
            alignItems: "center",
            paddingRight: 48,
          }}
        >
          <img src={resumeLogo} alt="" />
          <div>
            <p className={styles["resume__title"]}>{t("resume.text")}</p>
            <p className={styles["resume__subtitle"]}>{t("resume.subtext")}</p>
            <Link to="/resume">
              <button className={styles["resume__btn"]}>
                {t("resume.button")}
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  };
  return (
    <React.Fragment>
      <MainBody />
      <SearchBar />
      <CategoryList />
      <JobList />
      <Subscriptions />
      <ResumeUpload />
    </React.Fragment>
  );
};
