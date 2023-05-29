import React, { Fragment, useState, useMemo } from "react";
import { Navigation } from "../../navigation/Navigation";
import menu from "../../../images/menu.svg";
import location from "../../../images/location.svg";
import position from "../../../images/position.svg";
import { VacancyCard } from "../../card/Card";
import { Pagination } from "../../pagination/Pagination";
import RangeSlider from "../../slider/Slider";
import { vacancies } from "../../../constants/vacancies";
import "./style.scss";
import { useTranslation } from "react-i18next";

export const Jobs = () => {
  let PageSize = 3;

  const [currentPage, setCurrentPage] = useState(1);

  const currentVacancies = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return vacancies.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);

  const { t } = useTranslation();
  const [salary, setSalary] = useState([20, 37]);
  const JobsCatalog = () => {
    return (
      <div className="job__container">
        <div className="job__content">
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <p>{t('main.show')} 1-20 {t('main.of')} 522 {t('main.candidates')} </p>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <p>{t("main.sort")}:</p>
              <select>
                <option>{t("main.new")}</option>
                <option>{t("main.old")}</option>
                <option>{t("main.random")}</option>
              </select>
              <img src={menu} alt="menu" />
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 40,
              marginTop: 16,
            }}
          >
            {currentVacancies.map((item) => {
              return <VacancyCard data={item} />;
            })}
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: 72,
              marginBottom: 110,
            }}
          >
            <Pagination
              className="pagination-bar"
              currentPage={currentPage}
              totalCount={vacancies.length}
              pageSize={PageSize}
              onPageChange={page => setCurrentPage(page)}
            />
          </div>
        </div>
        <div className="job__sidebar">
          <p>{t("sidebar.location")}</p>
          <div className="job__sidebar_input-wrapper">
            <div className="job__sidebar_input-icon">
              {" "}
              <img src={location} alt="location" />
            </div>
            <input
              type="text"
              placeholder={t("sidebar.locationText")}
              style={{
                border: "1px solid #DDDDDD",
                height: 48,
                borderRadius: 10,
                width: "100%",
              }}
              className="job__sidebar_input"
            />
          </div>

          <p>{t("sidebar.category")}</p>
          <div className="job__sidebar_input-wrapper">
            <div className="job__sidebar_input-icon">
              {" "}
              <img src={position} alt="position" />
            </div>
            <input
              type="text"
              placeholder={t("sidebar.categoryText")}
              style={{
                border: "1px solid #DDDDDD",
                height: 48,
                borderRadius: 10,
                width: "100%",
              }}
              className="job__sidebar_input"
            />
          </div>
          <p>{t("sidebar.experience.title")}</p>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex" }}>
              <input
                type="checkbox"
                id="base"
                name="base"
                style={{ width: "10%" }}
              />
              <label for="scales">{t("sidebar.experience.junior")}</label>
            </div>
            <div style={{ display: "flex" }}>
              <input
                type="checkbox"
                id="medium"
                name="medium"
                style={{ width: "10%" }}
              />
              <label for="medium">{t("sidebar.experience.middle")}</label>
            </div>
            <div style={{ display: "flex" }}>
              <input
                type="checkbox"
                id="advanced"
                name="advanced"
                style={{ width: "10%" }}
              />
              <label for="advanced">{t("sidebar.experience.senior")}</label>
            </div>
            <div style={{ display: "flex" }}>
              <input
                type="checkbox"
                id="pro"
                name="pro"
                style={{ width: "10%" }}
              />
              <label for="pro">{t("sidebar.experience.expert")}</label>
            </div>
          </div>
          <p>{t("sidebar.experienceLevel.title")}</p>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex" }}>
              <input
                type="checkbox"
                id="expert"
                name="expert"
                style={{ width: "10%" }}
              />
              <label for="expert">{t("sidebar.experienceLevel.expert")}</label>
            </div>
            <div style={{ display: "flex" }}>
              <input
                type="checkbox"
                id="senior"
                name="senior"
                style={{ width: "10%" }}
              />
              <label for="senior">{t("sidebar.experienceLevel.senior")}</label>
            </div>
            <div style={{ display: "flex" }}>
              <input
                type="checkbox"
                id="junior"
                name="junior"
                style={{ width: "10%" }}
              />
              <label for="junior">{t("sidebar.experienceLevel.junior")}</label>
            </div>
            <div style={{ display: "flex" }}>
              <input
                type="checkbox"
                id="middle"
                name="middle"
                style={{ width: "10%" }}
              />
              <label for="middle">{t("sidebar.experienceLevel.middle")}</label>
            </div>
            <div style={{ display: "flex" }}>
              <input
                type="checkbox"
                id="internship"
                name="internship"
                style={{ width: "10%" }}
              />
              <label for="internship">
                {t("sidebar.experienceLevel.internship")}
              </label>
            </div>
          </div>
          <p>{t("sidebar.salaryRange")}</p>
          <RangeSlider value={salary} onChange={setSalary} />
          <div style={{ display: "flex", marginTop: 32 }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              <span className="range__title">{t("sidebar.from")}</span>
              <input
                type="text"
                placeholder={salary[0]}
                style={{
                  border: "1px solid #DDDDDD",
                  height: 33,
                  borderRadius: 10,
                  width: "60%",
                }}
              />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              <span className="range__title">{t("sidebar.to")}</span>
              <input
                type="text"
                placeholder={salary[1]}
                style={{
                  border: "1px solid #DDDDDD",
                  height: 33,
                  borderRadius: 10,
                  width: "60%",
                }}
              />
            </div>
          </div>
          <div style={{ position: "absolute", bottom: 16 }}>
            <button>{t("sidebar.apply")}</button>
            <button>{t("sidebar.reset")}</button>
          </div>
        </div>
      </div>
    );
  };
  return (
    <Fragment>
      <Navigation job>There are 1.999 Jobs Here For you! </Navigation>
      <JobsCatalog />
    </Fragment>
  );
};
