import React from "react";
import searchIcon from "../../images/search-icon.svg";
import { AuthService, handleError } from "../../services";
import { api } from "../../constants/api";
import Cookies from "js-cookie";
import { useTranslation } from "react-i18next";

export const Navigation = ({ candidate, job }) => {
  const { t } = useTranslation();
  const searchHandler = () => {
    try {
      const body = {
        category: {
          id: 1,
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
      console.log(Cookies.get("jwt_token"));
      const res = AuthService.post(api.searchVacancies, body);
      console.log(res);
    } catch (err) {
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
        />
        <button onClick={searchHandler}>{t("searchbar.button")}</button>
      </div>
    </div>
  );
};
