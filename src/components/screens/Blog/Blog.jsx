import React, { Fragment, useEffect, useState, useMemo } from "react";
import { articles } from "../../../constants/articles";
import { Pagination } from "../../pagination/Pagination";
import { Box } from "./box/Box";
import "./styles/style.scss";
import { SideBar } from "./panel/SideBar";
import { useTranslation } from "react-i18next";
import { current } from "@reduxjs/toolkit";

export const Blog = () => {
  const { t } = useTranslation();
  const Hashtag = ({ children }) => {
    return (
      <div
        style={{
          color: "#4943DA",
          border: "2px solid #4943DA",
          padding: "10px 20px",
          borderRadius: 20,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          userSelect: 'none',
        }}
      >
        <p style={{ fontSize: "1.125rem", margin: 0 }}>{children}</p>
      </div>
    );
  };
  const BlogHeader = () => {
    return (
      <div className="blog__header">
        <p>
          {t("blog.title")} <span>{t("blog.primary")}</span>{" "}
          {t("blog.subtitle")}
        </p>
        <div className="blog__header_keywords">
          <Hashtag>Recruitment</Hashtag>
          <Hashtag>IT</Hashtag>
          <Hashtag>Job Tips</Hashtag>
        </div>
      </div>
    );
  };

  const Main = () => {
    let PageSize = 3;

    const [currentPage, setCurrentPage] = useState(1);


    const currentArticles = useMemo(() => {
      const firstPageIndex = (currentPage - 1) * PageSize;
      const lastPageIndex = firstPageIndex + PageSize;
      return articles.slice(firstPageIndex, lastPageIndex);
    }, [currentPage]);

    return (
      <div className="blog__container">
        <div className="blog__content">
          <div className="blog__content_articles">
            {currentArticles.map((item) => {
              return <Box data={item} key={item.id} />;
            })}
          </div>
          <Pagination
            className="pagination-bar"
            currentPage={currentPage}
            totalCount={articles.length}
            pageSize={PageSize}
            onPageChange={page => setCurrentPage(page)}
          />
        </div>
        <SideBar />
      </div>
    );
  };

  return (
    <Fragment>
      <BlogHeader />
      <Main />
    </Fragment>
  );
};
