import React, { useState, useMemo } from "react";
import "./styles/style.scss";
import menu from "../../../images/menu.svg";
import location from "../../../images/location.svg";
import position from "../../../images/position.svg";
import { CandidateCard } from "../../card/Card";
import { candidates } from "../../../constants/candidates";
import { Pagination } from "../../pagination/Pagination";
import RangeSlider from "../../slider/Slider";
import { Navigation } from "../../navigation/Navigation";
import { useTranslation } from "react-i18next";

export const Candidates = () => {
  let PageSize = 8;

  const [currentPage, setCurrentPage] = useState(1);


  const currentCandidates = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return candidates.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);

  const { t } = useTranslation();
  const CandidatesCatalog = () => {
    return (
      <div className="candidate__container">
        <div className="candidate__content">
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <p>{t('main.show')} 1-20 {t('main.of')} 522 {t('main.candidates')}</p>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <p>Sort by:</p>
              <select>
                <option>Newest</option>
                <option>Oldest</option>
                <option>Random</option>
              </select>
              <img src={menu} alt="menu" />
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 75,
              marginTop: 16,
            }}
          >
            {currentCandidates.map((item) => {
              return (
                <CandidateCard
                  id={item.id}
                  name={item.name}
                  desc={item.desc}
                  skills={item.skills}
                />
              );
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
              totalCount={candidates.length}
              pageSize={PageSize}
              onPageChange={page => setCurrentPage(page)}
            />
          </div>
        </div>
        <div className="candidate__sidebar">
          <p>{t("sidebar.location")}</p>
          <div className="candidate__sidebar_input-wrapper">
            <div className="candidate__sidebar_input-icon">
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
              className="candidate__sidebar_input"
            />
          </div>

          <p>{t("sidebar.category")}</p>
          <div className="candidate__sidebar_input-wrapper">
            <div className="candidate__sidebar_input-icon">
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
              className="candidate__sidebar_input"
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
          <RangeSlider />
          <div style={{ display: "flex", marginTop: 32 }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              <span className="range__title">{t("sidebar.from")}</span>
              <input
                type="text"
                placeholder="1600"
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
                placeholder="1600"
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
    <React.Fragment>
      <Navigation candidate>
        There are 10.999 Candidates Here For you!{" "}
      </Navigation>
      <CandidatesCatalog />
    </React.Fragment>
  );
};
