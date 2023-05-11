import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./Header.module.scss";
import logo from '../../images/jalda-logo.png';

function Header() {
    return (
        <div className={styles.header}>
            <div>
                <img src={logo} witdh={36} height={36} />
            </div>
            <div>
                <nav>
                    <ul >
                        <li className={styles.li}>
                            <Link to="/" className={styles.link}>Home</Link>
                        </li>
                        <li>
                            <Link to="/jobs" className={styles.link}>Find Jobs</Link>
                        </li>
                        <li>
                            <Link to="/candidates" className={styles.link}>Find Candidates</Link>
                        </li>
                        <li>
                            <Link to="/articles" className={styles.link}>Articles</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div>
                <ul >
                    <li className={styles.li}>
                        <Link to="/" className={styles.link}>Log In</Link>
                    </li>
                    <li>
                        <button className={styles.btn}>Register Now</button>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Header;