import React, { useState } from "react";
import searchIcon from "../../images/search-icon.svg";
import { apiService, AuthService, handleError } from "../../services";
import { api } from "../../constants/api";
import Cookies from "universal-cookie";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { useNavigate } from "react-router";
import './style.scss';

export const Navigation = ({ candidate, job }) => {
  const [inputValue, setInputValue] = useState(null);
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputValue(e.target.value);
  }
  const searchHandler = async () => {
    try {

      const body = {
        category: {
          id: 1,
          name: inputValue
        },
        city: {
          id: 2,
        },
        experienceLevel: [
          {
            id: 1,
          },
        ],
        jobType: [
          {
            id: 1,
          },
        ],
        maxSalary: 2000,
        minSalary: 500,
        name: "Ali",
        pageRequestDTO: {
          pageNumber: 1,
          pageSize: 20,
        },
        sortByNewest: true,
      };
      const res = await apiService.post(api.vacancy.search, body);
      console.log(res);
      navigate(`?page=${res.data.pageNumber}`)
    }
    catch (err) {
      handleError(err);
    }
  };
  return (
    <div className="navigation">
      <p>
        {candidate ? t("searchbar.candidateTitle") : t("searchbar.jobTitle")}
      </p>
      <div className="search-bar">
        <img src={searchIcon} alt="search" />
        <input
          type="text"
          placeholder={t("searchbar.placeholder")}
          style={{ width: "80%" }}
          value={inputValue}
          onChange={handleChange}
        />
        <button onClick={searchHandler}>{t("searchbar.button")}</button>
      </div>
    </div>
  );
};
