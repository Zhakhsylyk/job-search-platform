import React from 'react'
import Header from '../../header/Header'
import styles from './styles/Home.module.scss';
import jobSearch from '../../../images/main-picture.png';
import searchIcon from '../../../images/search-icon.svg';
import locationIcon from '../../../images/location-icon.svg';
import { CategoryCard, JobCard, SubscriptionCard } from '../../card/Card';
import { categories } from '../../../constants/categories';
import { jobs } from '../../../constants/jobs';
// import usaFlag from '../../../images/usa.png';
// import kzFlag from '../../../images/kazakhstan.png';
// import ruFlag from '../../../images/russia.png';
import { subscriptions } from '../../../constants/subscriptions';
import resumeLogo from '../../../images/cvPicture.png';
import { Footer } from '../../footer/Footer';

export const Home = () => {
    const MainBody = () => {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: 10 }}>
                <div>
                    <p className={styles.title}>
                        Get The <span>Right Job</span> <br />
                        You Deserve with AI</p>
                    <p className={styles.subtitle}>1000 jobs & 500 candidates are registered</p>
                </div>
                <div>
                    <img src={jobSearch} alt="logo" width={484} height={376} style={{ marginLeft: 96 }} />
                </div>
            </div>
        )
    }
    const SearchBar = () => {
        return (
            <div className={styles.search}>
                <img src={searchIcon} alt="search" width={35} height={35} />
                <input type="text" placeholder='Search Title or Keyword' />
                <div className={styles.dividerLine} />
                <img src={locationIcon} alt="location" width={35} height={35} style={{ marginLeft: 20 }} />
                <input type="text" placeholder='Search Location' />
                <button className={styles.btn}>Search</button>
            </div>
        )
    }
    const CategoryList = () => {
        return (
            <div className={styles['section__category']}>
                <p style={{ textAlign: 'center', fontSize: 50, fontWeight: 500 }}>One Platform <br />
                    Many <span>Solutions</span></p>
                <div style={{ justifyContent: 'center', display: 'flex', flexWrap: 'wrap', gap: 30, margin: '0 auto', width: '80%' }}>
                    {
                        categories.map(item => {
                            return (
                                <CategoryCard categoryName={item.categoryName} id={item.id} categoryDesc={item.categoryDesc} categoryIcon={item.icon} />
                            )
                        })
                    }
                </div>
            </div>
        )
    }

    const JobList = () => {
        return (
            <div className={styles['section__job']}>
                <p style={{ textAlign: 'center', fontSize: 50, fontWeight: 500, margin: '78px 0 100px 0' }}>Newest <span>Jobs</span> For You </p>
                <div style={{ justifyContent: 'center', display: 'flex', flexWrap: 'wrap', gap: 30, margin: '0 auto', width: '70%' }}>
                    {
                        jobs.map(item => {
                            return (
                                <JobCard name={item.name} desc={item.desc} icon={item.icon} id={item.id} />
                            )
                        })
                    }
                </div>
                <button style={{ display: 'block', border: 'solid 2px #4943DA', color: '#4943DA', backgroundColor: '#fff', borderRadius: 20, width: 158, height: 50, fontSize: 18, textAlign: 'center', margin: '50px auto 0', cursor: 'pointer' }}>Find More Jobs</button>
            </div>
        )
    }

    const Subscriptions = () => {
        return (
            <div className={styles['section__subscription']}>
                <p style={{ textAlign: 'center', fontSize: 50, fontWeight: 500 }}>
                    Our pricing <span>subscriptions</span>
                </p>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 26 }}>
                    <p>Choose your currency</p>
                    <span className="fi fi-kz"></span>
                    <span className="fi fi-us"></span>
                    <span className="fi fi-ru"></span>
                    <select>
                        <option value="kzt">KZT</option>
                        <option value="rub">RUB</option>
                        <option value="usd">USD</option>
                    </select>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', gap: 30 }}>
                    {
                        subscriptions.map(item => {
                            return (
                                <SubscriptionCard id={item.id} type={item.type} clientType={item.clientType} desc={item.desc} price={item.price} profitItems={item.profits} icon={item.icon} />
                            )
                        })
                    }
                </div>
            </div>
        )
    }

    const ResumeUpload = () => {
        return (
            <div className={styles['section__resume']}>
                <div style={{ height: 523, width: 1162, backgroundColor: '#4540DB', display: 'block', margin: '91px auto 0', borderRadius: 20, display: 'flex', alignItems: 'center' }}>
                    <img src={resumeLogo} alt='' />
                    <div>
                        <p className={styles['resume__title']}>Get Matched The Most
                            Valuable Jobs, Just Drop
                            Your CV at Staffing Solutions</p>
                        <p className={styles['resume__subtitle']}>In the subject line of email, write your name, the description of the position you want to apply</p>
                        <button className={styles['resume__btn']}>Upload Your CV</button>
                    </div>
                </div>
                
            </div>
        )
    }
    return (
        <React.Fragment>
            <Header />
            <MainBody />
            <SearchBar />
            <CategoryList />
            <JobList />
            <Subscriptions />
            <ResumeUpload />
            <Footer />
        </React.Fragment>
    )
}
