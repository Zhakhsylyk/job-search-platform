import React, { useState, useMemo, useEffect } from "react";
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
import { Dropdown } from 'primereact/dropdown';
import { getCities, getExperienceLevels, getJobCategories, getJobSkillTags, getJobTypes } from "../../../store/actions/dictionary";
import { useDispatch, useSelector } from "react-redux";
import { MultiSelect } from "primereact/multiselect";



export const Candidates = () => {
  let PageSize = 8;
  const { t } = useTranslation();


  const [salary, setSalary] = useState([100, 5000]);


  const [currentPage, setCurrentPage] = useState(1);

  const dispatch = useDispatch();


  const [selectedExperience, setSelectedExperience] = useState(null);
  const [selectedExperienceLevel, setSelectedExperienceLevel] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSkills, setSelectedSkills] = useState(null);


  useEffect(() => {
    dispatch(getCities());
    dispatch(getExperienceLevels());
    dispatch(getJobCategories());
    dispatch(getJobSkillTags());
    dispatch(getJobTypes());
  }, [dispatch]);

  const cities = useSelector((state) => state.dictionary.cities);
  const categories = useSelector(state => state.dictionary.categories);
  const types = useSelector(state => state.dictionary.types);
  const skills = useSelector(state => state.dictionary.skills);

  const currentCandidates = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return candidates.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);


  const handleExperienceChange = (event) => {
    setSelectedExperience(event.target.value);
  };
  const handleExperienceLevelChange = (event) => {
    setSelectedExperienceLevel(event.target.value);
  };

  const handleFilterSubmit = async (e) => {
    e.preventDefault();
    const body = {
      category: selectedCategory,
      city: selectedCity,
      jobExperienceLevel: selectedExperienceLevel,
      jobType: [selectedType],
      maxSalary: salary[1],
      minSalary: salary[0],
      pageRequestDTO: {
        pageNumber: 1,
        pageSize: 20,
      },
      sortByNewest: true,
    };
    try {
      const res = await AuthService.post(api.vacancy.search, body);
    } catch (err) {
      handleError(err);
    }
  }

  const handleReset = (e) => {
    e.preventDefault();
    setSelectedExperience(null);
    setSelectedExperienceLevel(null);
    setSelectedCategory(null);
    setSelectedCity(null);
  }
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
                  key={item.id}
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
            <Dropdown value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="name"
              placeholder={t('sidebar.locationText')} className="w-full" />
          </div>

          <p>{t("sidebar.category")}</p>
          <div className="candidate__sidebar_input-wrapper">
            <div className="candidate__sidebar_input-icon">
              {" "}
              <img src={position} alt="position" />
            </div>
            <Dropdown value={selectedCategory} onChange={(e) => setSelectedCategory(e.value)} options={categories} optionLabel="name"
              placeholder={t('sidebar.categoryText')} className="w-full" />
          </div>
          <p>{t("sidebar.skills")}</p>
          <div className="candidate__sidebar_input-wrapper">
            <div className="candidate__sidebar_input-icon">
              {" "}
              <img src={position} alt="position" />
            </div>
            <MultiSelect
              value={selectedSkills}
              onChange={(e) => setSelectedSkills(e.value)}
              options={skills}
              optionLabel="name"
              filter
              placeholder={t('sidebar.skillsText')}
              className="w-full"
            />
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
                value="3"
                checked={selectedExperienceLevel === "3"}
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
                value="1"
                checked={selectedExperienceLevel === "1"}
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
                value="2"
                checked={selectedExperienceLevel === "2"}
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
          <div style={{ display: "flex", marginTop: 12 }}>
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
            <button onClick={handleFilterSubmit}>{t("sidebar.apply")}</button>
            <button onClick={handleReset}>{t("sidebar.reset")}</button>
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
