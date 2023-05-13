import React from "react";
import styles from "./Card.module.scss";
import kolesa from "../../images/jobIcon.svg";
import candidate from "../../images/candidate.png";
import checkPrimary from "../../images/check-primary.svg";
import check from "../../images/check.svg";

export const CategoryCard = ({ data }) => {
  return (
    <div className={styles["card__category"]}>
      <div className={styles["card__category_inner"]} key={data.id}>
        <div>
          {" "}
          <img src={data.icon} alt="category" />
        </div>
        <div className={styles["card__category_text"]}>
          <p className={styles.title}>{data.categoryName}</p>
          <p className={styles.subtitle}>{data.categoryDesc}</p>
        </div>
      </div>
    </div>
  );
};

export const JobCard = ({ data }) => {
  return (
    <div className={styles["card__job"]} key={data.id}>
      <div className={styles["card__job_inner"]}>
        <div>
          {" "}
          <img src={data.icon} alt="job" />
        </div>
        <div>
          <p className={styles["card__job_inner-title"]}>{data.company}</p>
        </div>
      </div>
      <div>
        <p className={styles["card__job_inner-subtitle"]}>{data.name}</p>
      </div>
      <div>
        <p className={styles["card__job_inner-time"]}>{data.time}</p>
        <p className={styles["card__job_inner-desc"]}>{data.desc}</p>
      </div>
      <div className={styles["card__job_inner-bottom"]}>
        <p>
          <span>${data.salary}</span>/month
        </p>
        <button>Apply Now</button>
      </div>
    </div>
  );
};

export const SubscriptionCard = (props) => {
  const { id, type, clientType, desc, price, icon, profitItems } = props;
  const styleSyllable = id % 2 === 0 ? "sub_primary" : "sub";
  return (
    <div className={styles[`card__${styleSyllable}`]} key={id}>
      <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
        <img src={kolesa} alt="sub" height={72} width={72} />
        <div>
          <p className={styles[`${styleSyllable}__title`]}>For {clientType}</p>
          <p className={styles[`${styleSyllable}__subtitle`]}>{type}</p>
        </div>
      </div>
      <p className={styles[`${styleSyllable}__description`]}>{desc}</p>
      <p className={styles[`${styleSyllable}__price`]}>
        <span>${price} </span>/monthly
      </p>
      <p className={styles[`${styleSyllable}__list-title`]}>What's included</p>
      <ul>
        <li>
          <img src={id % 2 === 0 ? checkPrimary : check} alt="check" />
          <p>All analytics features</p>
        </li>
        <li>
          <img src={id % 2 === 0 ? checkPrimary : check} alt="check" />

          <p>Up to 1,000,000 tracked visits</p>
        </li>
        <li>
          <img src={id % 2 === 0 ? checkPrimary : check} alt="check" />
          <p>Premium support</p>
        </li>
        <li>
          <img src={id % 2 === 0 ? checkPrimary : check} alt="check" />
          <p>Up to 10 team members</p>
        </li>
      </ul>
      <button className={styles[`${styleSyllable}__btn`]}>Get Started</button>
    </div>
  );
};

export const CandidateCard = ({ id, name, desc, score, skills }) => {
  return (
    <div
      className={
        styles[id === 1 ? "card__candidate--selected" : "card__candidate"]
      }
    >
      <img src={candidate} alt="avatar" height={53} width={53} />
      <div></div>
      <p>Alikhan Zhakhsylyk</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
      <div className={styles["rating"]}>
        <div className={styles["rating__score"]}></div>
        <p>95/100</p>
      </div>
      <button>View Profile</button>
    </div>
  );
};

export const VacancyCard = ({ data }) => {
  return (
    <div className={styles["card__vacancy"]}>
      <div>
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <img src={data.icon} alt="index" />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <p>{data.position}</p>
            <div style={{ display: "flex", marginTop: 9, gap: 43 }}>
              <p>{data.company}</p>
              <p>{data.location}</p>
              <p>{data.type}</p>
              <p>{data.published}</p>
            </div>
          </div>
        </div>
        <div style={{ width: "75%", marginTop: 29 }}>
          <p className="card__vacancy_text">{data.desc}</p>
        </div>
        <div style={{ display: "flex", gap: 19, marginTop: 12 }}>
          <FeatureCard color="#CAF5DE">Remote</FeatureCard>
          <FeatureCard color="#CDE3FF">Middle</FeatureCard>
          <FeatureCard color="#F2F2FF">Part-time</FeatureCard>
        </div>
      </div>
      <div>
        <p className={styles["card__vacancy_salary"]}>{data.salary}</p>
      </div>
    </div>
  );
};

export const FeatureCard = ({ children, color }) => {
  return (
    <div
      className={styles["card__feature"]}
      style={{ backgroundColor: color, padding: 1 }}
    >
      <p style={{ fontSize: "0.75rem" }}>{children}</p>
    </div>
  );
};
