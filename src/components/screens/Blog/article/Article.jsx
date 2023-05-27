import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { articles } from "../../../../constants/articles";
import { SideBar } from "../panel/SideBar";
import "./styles/style.scss";
import FavoriteIcon from "@mui/icons-material/Favorite";

export const Article = () => {
  const Main = () => {
    const { id } = useParams();
    return (
      <div className="blog__container">
        <div className="blog__content">
          {articles.map(
            (item) =>
              item.id === +id && (
                <div key={item.id}>
                  <h2>{item.title}</h2>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 3,
                      color: "#ccc",
                      fontWeight: 500,
                      marginBottom: 10,
                    }}
                  >
                    {item.likes}{" "}
                    <FavoriteIcon sx={{ color: "red" }} fontSize="small" />
                    <p style={{ margin: 0, marginLeft: 4 }}>
                      Last Edited: {item.date} by <span>{item.author}</span>
                    </p>
                  </div>
                  <img src={item.image} alt="cover" width={774} height={565} />
                  <p style={{ fontSize: "1.125rem" }}>{item.body}</p>
                </div>
              )
          )}
        </div>
        <SideBar />
      </div>
    );
  };
  return (
    <React.Fragment>
      <Main />
    </React.Fragment>
  );
};
