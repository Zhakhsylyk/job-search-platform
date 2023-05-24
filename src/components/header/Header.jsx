import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from "./Header.module.scss";
import logo from '../../images/jalda-logo.png';
import kzFlag from '../../images/kazakhstan.png';
import enFlag from '../../images/usa.png';
import ruFlag from '../../images/russia.png';
import Select, { components } from "react-select";
import { useTranslation } from 'react-i18next';

const languages = [
    { value: "kk", label: "ҚАЗ", icon: kzFlag },
    { value: "en", label: "ENG", icon: enFlag },
    { value: "ru", label: "РУС", icon: ruFlag },
];

function Header() {
    const { t, i18n } = useTranslation();
    const [selectedLanguage, setSelectedLanguage] = useState(languages.filter(lng => { return lng.value === localStorage.getItem('lng') })[0] ?? languages[0]);

    console.log(selectedLanguage);

    const Option = (props) => (
        <components.Option {...props} className={styles["language-option"]}>
            <img
                src={props.data.icon}
                alt="logo"
                className="language-logo"
                width={18}
                style={{ position: 'relative', top: 3 }}
                height={18}
            />
            {props.data.label}
        </components.Option>
    );

    const handleChange = (language) => {
        i18n.changeLanguage(language.value);
        localStorage.setItem('lng', language.value);
        setSelectedLanguage(languages.find(lng => lng.value === language.value))
    };


    const SingleValue = ({ children, ...props }) => (
        <components.SingleValue {...props}>
            <img
                src={selectedLanguage.icon}
                alt="s-logo"
                className="selected-logo"
                width={18}
                height={18}
                style={{ position: 'relative', top: 1 }}

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
                    <ul >
                        <li className={styles.li}>
                            <Link to="/" className={styles.link}>{t('navigation.home')}</Link>
                        </li>
                        <li>
                            <Link to="/jobs" className={styles.link}>{t('navigation.jobs')}</Link>
                        </li>
                        <li>
                            <Link to="/candidates" className={styles.link}>{t('navigation.candidates')}</Link>
                        </li>
                        <li>
                            <Link to="/articles" className={styles.link}>{t('navigation.articles')}</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <ul >
                    <li className={styles.li}>
                        <Link to="/signin" className={styles.link}>{t('navigation.login')}</Link>
                    </li>
                    <li>
                        <Link to='/signup'>
                            <button className={styles.btn}>{t('navigation.register')}</button>
                        </Link>
                    </li>
                </ul>
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