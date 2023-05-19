import React, { useState } from "react";
import Header from "../../header/Header";
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
import { Footer } from "../../footer/Footer";
import Select, { components } from "react-select";
import { useTranslation } from "react-i18next";


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

  const handleChange = (value) => {
    setSelectedCountry(value);
  };

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

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
        <div>
          <p className={styles.title}>
            Get The <span>Right Job</span> <br />
            You Deserve with AI
          </p>
          <p className={styles.subtitle}>
            1000 jobs & 500 candidates are registered
          </p>
        </div>
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
        <input type="text" placeholder="Search Title or Keyword" />
        <div className={styles.dividerLine} />
        <img
          src={locationIcon}
          alt="location"
          width={35}
          height={35}
          style={{ marginLeft: 20 }}
        />
        <input type="text" placeholder="Search Location" />
        <button className={styles.btn}>Search</button>
      </div>
    );
  };
  const CategoryList = () => {
    return (
      <div className={styles["section__category"]}>
        <p style={{ textAlign: "center", fontSize: 50, fontWeight: 500 }}>
          One Platform <br />
          Many <span>Solutions</span>
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
            return <CategoryCard data={item} />;
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
          Newest <span>Jobs</span> For You{" "}
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
            return <JobCard data={item} />;
          })}
        </div>
        <button
          style={{
            display: "block",
            border: "solid 2px #4943DA",
            color: "#4943DA",
            backgroundColor: "#fff",
            borderRadius: 20,
            width: 158,
            height: 50,
            fontSize: 18,
            textAlign: "center",
            margin: "50px auto 0",
            cursor: "pointer",
          }}
        >
          Find More Jobs
        </button>
      </div>
    );
  };

  const Subscriptions = () => {
    return (
      <div className={styles["section__subscription"]}>
        <p style={{ textAlign: "center", fontSize: 50, fontWeight: 500 }}>
          Our pricing <span>subscriptions</span>
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 26,
            marginBottom: 45,
          }}
        >
          <p style={{ color: "#170F49", fontSize: "1.125rem" }}>
            Choose your currency
          </p>
          <Select
            defaultValue={{ label: "KZT", value: "KZT" }}
            value={selectedCountry}
            options={countries}
            onChange={handleChange}
            styles={{
              singleValue: (base) => ({
                ...base,
                display: "flex",
                alignItems: "center",
                gap: 8,
              }),
            }}
            components={{
              Option,
              SingleValue,
            }}
          />
        </div>
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
            <p className={styles["resume__title"]}>
              Get Matched The Most Valuable Jobs, Just Drop Your CV at Staffing
              Solutions
            </p>
            <p className={styles["resume__subtitle"]}>
              In the subject line of email, write your name, the description of
              the position you want to apply
            </p>
            <button className={styles["resume__btn"]}>Upload Your CV</button>
          </div>
        </div>
      </div>
    );
  };
  return (
    <React.Fragment>
      <Header />
      <MainBody />
      <SearchBar />
      <CategoryList />
      <JobList />
      <Subscriptions />
      <ResumeUpload />
      <Footer />
    </React.Fragment>
  );
};
