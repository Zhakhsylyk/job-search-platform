import React, { Fragment, useEffect, useState, useMemo } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { Dropdown } from 'primereact/dropdown';
import { getCities, getExperienceLevels, getJobCategories, getJobSkillTags, getJobTypes } from "../../../store/actions/dictionary";

export const Jobs = () => {
  const dictionary = useSelector((state) => state.dictionary)
  let PageSize = 3;

  const [currentPage, setCurrentPage] = useState(1);


  const currentVacancies = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return vacancies.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);

  const { t } = useTranslation();
  const [salary, setSalary] = useState([100, 5000]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCities());
    dispatch(getExperienceLevels());
    dispatch(getJobCategories());
    dispatch(getJobSkillTags());
    dispatch(getJobTypes());
  }, [dispatch]);


  const cities = useSelector((state) => state.dictionary.cities);
  console.log(cities);


  const [selectedExperience, setSelectedExperience] = useState(null);
  const [selectedExperienceLevel, setSelectedExperienceLevel] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);


  const categories = [{ "id": 1, "name": "Backend Developer" }, { "id": 2, "name": "Frontend Developer" }, { "id": 3, "name": "Full-stack Developer" }]

  const handleExperienceChange = (event) => {
    setSelectedExperience(event.target.value);
  };
  const handleExperienceLevelChange = (event) => {
    setSelectedExperienceLevel(event.target.value);
  };

  const handleReset = (e) => {
    e.preventDefault();
    setSelectedExperience(null);
    setSelectedExperienceLevel(null);
    setSelectedCategory(null);
    setSelectedCity(null);
  }

  const JobsCatalog = () => {
    return (
      <div className="job__container">
        <div className="job__content">
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <p>
              {t("main.show")} 1-20 {t("main.of")} 522 {t("main.candidates")}{" "}
            </p>
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
              return <VacancyCard data={item} key={item.id} />;
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
              onPageChange={(page) => setCurrentPage(page)}
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
            <Dropdown value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="name"
              placeholder={t('sidebar.locationText')} className="w-full" />
          </div>

          <p>{t("sidebar.category")}</p>
          <div className="job__sidebar_input-wrapper">
            <div className="job__sidebar_input-icon">
              {" "}
              <img src={position} alt="position" />
            </div>
            <Dropdown value={selectedCategory} onChange={(e) => setSelectedCategory(e.value)} options={categories} optionLabel="name"
              placeholder={t('sidebar.categoryText')} className="w-full" />
          </div>
          <p>{t("sidebar.experience.title")}</p>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex" }}>
              <input
                type="checkbox"
                id="base"
                name="base"
                value="base"
                checked={selectedExperience === "base"}
                onChange={handleExperienceChange}
                style={{ width: "10%" }}
              />
              <label htmlFor="base">{t("sidebar.experience.junior")}</label>
            </div>
            <div style={{ display: "flex" }}>
              <input
                type="checkbox"
                id="medium"
                name="medium"
                value="medium"
                checked={selectedExperience === "medium"}
                onChange={handleExperienceChange}
                style={{ width: "10%" }}
              />
              <label htmlFor="medium">{t("sidebar.experience.middle")}</label>
            </div>
            <div style={{ display: "flex" }}>
              <input
                type="checkbox"
                id="advanced"
                name="advanced"
                value="advanced"
                checked={selectedExperience === "advanced"}
                onChange={handleExperienceChange}
                style={{ width: "10%" }}
              />
              <label htmlFor="advanced">{t("sidebar.experience.senior")}</label>
            </div>
            <div style={{ display: "flex" }}>
              <input
                type="checkbox"
                id="pro"
                name="pro"
                value="pro"
                checked={selectedExperience === "pro"}
                onChange={handleExperienceChange}
                style={{ width: "10%" }}
              />
              <label htmlFor="pro">{t("sidebar.experience.expert")}</label>
            </div>
          </div>
          <p>{t("sidebar.experienceLevel.title")}</p>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex" }}>
              <input
                type="checkbox"
                id="expert"
                name="expert"
                value="expert"
                checked={selectedExperienceLevel === "expert"}
                onChange={handleExperienceLevelChange}
                style={{ width: "10%" }}
              />
              <label htmlFor="expert">{t("sidebar.experienceLevel.expert")}</label>
            </div>
            <div style={{ display: "flex" }}>
              <input
                type="checkbox"
                id="senior"
                name="senior"
                value="senior"
                checked={selectedExperienceLevel === "senior"}
                onChange={handleExperienceLevelChange}
                style={{ width: "10%" }}
              />
              <label htmlFor="senior">{t("sidebar.experienceLevel.senior")}</label>
            </div>
            <div style={{ display: "flex" }}>
              <input
                type="checkbox"
                id="junior"
                name="junior"
                value="junior"
                checked={selectedExperienceLevel === "junior"}
                onChange={handleExperienceLevelChange}
                style={{ width: "10%" }}
              />
              <label htmlFor="junior">{t("sidebar.experienceLevel.junior")}</label>
            </div>
            <div style={{ display: "flex" }}>
              <input
                type="checkbox"
                id="middle"
                name="middle"
                value="middle"
                checked={selectedExperienceLevel === "middle"}
                onChange={handleExperienceLevelChange}
                style={{ width: "10%" }}
              />
              <label htmlFor="middle">{t("sidebar.experienceLevel.middle")}</label>
            </div>
            <div style={{ display: "flex" }}>
              <input
                type="checkbox"
                id="internship"
                name="internship"
                value="internship"
                checked={selectedExperienceLevel === "internship"}
                onChange={handleExperienceLevelChange}
                style={{ width: "10%" }}
              />
              <label htmlFor="internship">
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
                disabled
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
                disabled
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
            <button onClick={handleReset}>{t("sidebar.reset")}</button>
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
