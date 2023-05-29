import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Header.module.scss";
import logo from "../../images/jalda-logo.png";
import kzFlag from "../../images/kazakhstan.png";
import enFlag from "../../images/usa.png";
import ruFlag from "../../images/russia.png";
import candidate from "../../images/candidate.png";
import Select, { components } from "react-select";
import { useTranslation } from "react-i18next";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Tooltip from "@mui/material/Tooltip";
import Divider from "@mui/material/Divider";
import ListItemIcon from "@mui/material/ListItemIcon";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import Cookies from "universal-cookie";

const languages = [
  { value: "en", label: "ENG", icon: enFlag },
  { value: "kk", label: "ҚАЗ", icon: kzFlag },
  { value: "ru", label: "РУС", icon: ruFlag },
];

function Header() {
  const { t, i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState(
    languages.filter((lng) => {
      return lng.value === localStorage.getItem("lng");
    })[0] ?? languages[0]
  );
  const navigate = useNavigate();
  const cookies = new Cookies();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    setAnchorEl(null);
    cookies.remove("jwt_token");
    navigate("/");
  };
  const Option = (props) => (
    <components.Option {...props} className={styles["language-option"]}>
      <img
        src={props.data.icon}
        alt="logo"
        className="language-logo"
        width={18}
        style={{ position: "relative", top: 3, marginRight: 10 }}
        height={18}
      />
      {props.data.label}
    </components.Option>
  );

  const handleChange = (language) => {
    i18n.changeLanguage(language.value);
    localStorage.setItem("lng", language.value);
    setSelectedLanguage(languages.find((lng) => lng.value === language.value));
  };

  const SingleValue = ({ children, ...props }) => (
    <components.SingleValue {...props}>
      <img
        src={selectedLanguage.icon}
        alt="s-logo"
        className="selected-logo"
        width={18}
        height={18}
        style={{ position: "relative", top: 1 }}
      />
      {children}
    </components.SingleValue>
  );
  return (
    <div className={styles.header}>
      <div>
        <img src={logo} witdh={36} height={36} />
      </div>
      <div>
        <nav>
          <ul>
            <li className={styles.li}>
              <Link to="/" className={styles.link}>
                {t("navigation.home")}
              </Link>
            </li>
            <li>
              <Link to="/jobs" className={styles.link}>
                {t("navigation.jobs")}
              </Link>
            </li>
            <li>
              <Link to="/candidates" className={styles.link}>
                {t("navigation.candidates")}
              </Link>
            </li>
            <li>
              <Link to="/articles" className={styles.link}>
                {t("navigation.articles")}
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        {!cookies.get("jwt_token") ? (
          <ul>
            <li className={styles.li}>
              <Link to="/signin" className={styles.link}>
                {t("navigation.login")}
              </Link>
            </li>
            <li>
              <Link to="/signup">
                <button className={styles.btn}>
                  {t("navigation.register")}
                </button>
              </Link>
            </li>
          </ul>
        ) : (
          <div style={{ marginRight: 20 }}>
            <Tooltip title="Account settings">
              <Avatar
                src={candidate}
                onClick={handleClick}
                sx={{ cursor: "pointer" }}
              />
            </Tooltip>
            <Menu
              anchorEl={anchorEl}
              id="account-menu"
              open={open}
              onClose={handleClose}
              onClick={handleClose}
              PaperProps={{
                elevation: 0,
                sx: {
                  overflow: "visible",
                  filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                  mt: 1.5,
                  "& .MuiAvatar-root": {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                  },
                  "&:before": {
                    content: '""',
                    display: "block",
                    position: "absolute",
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: "background.paper",
                    transform: "translateY(-50%) rotate(45deg)",
                    zIndex: 0,
                  },
                },
              }}
              transformOrigin={{ horizontal: "right", vertical: "top" }}
              anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            >
              <Link to="/me">
                <MenuItem onClick={handleClose}>
                  <Avatar src={candidate} onClick={() => navigate("/me")} /> My
                  account
                </MenuItem>
              </Link>
              <Divider />
              <MenuItem onClick={handleClose}>
                <ListItemIcon>
                  <Settings fontSize="small" />
                </ListItemIcon>
                Settings
              </MenuItem>
              <MenuItem onClick={handleLogout}>
                <ListItemIcon>
                  <Logout fontSize="small" />
                </ListItemIcon>
                Logout
              </MenuItem>
            </Menu>
          </div>
        )}
        <div style={{ width: 125 }}>
          <Select
            value={selectedLanguage}
            options={languages}
            onChange={handleChange}
            styles={{
              control: (baseStyles, state) => ({
                ...baseStyles,
                width: 125,
              }),
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
      </div>
    </div>
  );
}

export default Header;
