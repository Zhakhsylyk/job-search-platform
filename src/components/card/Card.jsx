import React from 'react';
import styles from './Card.module.scss';
import kolesa from '../../images/jobIcon.svg';
import candidate from '../../images/candidate.png';

export const CategoryCard = ({ categoryName, categoryDesc, categoryIcon, key }) => {
    return (
        <div className={styles['card__category']}>
            <div className={styles.card} key={key}>
                <div> <img src={categoryIcon} alt='category' /></div>
                <div><p className={styles.title}>{categoryName}</p>
                </div>
            </div>
            <p className={styles.subtitle}>{categoryDesc}</p>
        </div>
    )
}

export const JobCard = ({ name, desc, id, icon }) => {
    return (
        <div className={styles['card__job']} key={id}>
            <div className={styles.card}>
                <div> <img src={icon} alt="job" /></div>
                <div><p className={styles.title}>{name}</p>
                </div>
            </div>
            <p className={styles.subtitle}>{desc}</p>
        </div>
    )
}

export const SubscriptionCard = (props) => {
    const { id, type, clientType, desc, price, icon, profitItems } = props;
    const styleSyllable = id % 2 === 0 ? 'sub_primary' : 'sub';
    return (
        <div className={styles[`card__${styleSyllable}`]} key={id}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
                <img src={kolesa} alt='sub' height={72} width={72} />
                <div>
                    <p className={styles[`${styleSyllable}__title`]}>For {clientType}</p>
                    <p className={styles[`${styleSyllable}__subtitle`]}>{type}</p>
                </div>
            </div>
            <p className={styles[`${styleSyllable}__description`]}>{desc}</p>
            <p className={styles[`${styleSyllable}__price`]}><span>${price} </span>/monthly</p>
            <p className={styles[`${styleSyllable}__list-title`]}>What's included</p>
            <ul>
                <li>All analytics features</li>
                <li>Up to 1,000,000 tracked visits</li>
                <li> Premium support</li>
                <li>Up to 10 team members</li>
            </ul>
            <button className={styles[`${styleSyllable}__btn`]}>Get Started</button>
        </div>
    )
}

export const CandidateCard = ({ id, name, desc, score, skills }) => {
    return (
        <div className={styles[id === 1 ? 'card__candidate--selected' : 'card__candidate']}>
            <img src={candidate} alt='avatar' height={53} width={53} />
            <div>
            </div>
            <p>Alikhan Zhakhsylyk</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            <div className={styles['rating']}>
                <div className={styles['rating__score']}>
                </div>
                <p>95/100</p>
            </div>
            <button>View Profile</button>
        </div>
    )
}

export const VacancyCard = ({ data }) => {
    return (
        <div className={styles['card__vacancy']}>
            <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
                    <img src={data.icon} alt='index' />
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <p >{data.position}</p>
                        <div style={{ display: 'flex', marginTop: 9, gap: 43 }}>
                            <p >{data.company}</p>
                            <p >{data.location}</p>
                            <p >{data.type}</p>
                            <p >{data.published}</p>
                        </div>
                    </div>
                </div>
                <div style={{ width: '75%', marginTop: 29 }}>
                    <p className='card__vacancy_text'>{data.desc}</p>
                </div>
                <div style={{ display: 'flex', gap: 19, marginTop: 12 }}>
                    <FeatureCard color='#CAF5DE'>Remote</FeatureCard>
                    <FeatureCard color='#CDE3FF'>Middle</FeatureCard>
                    <FeatureCard color='#F2F2FF'>Part-time</FeatureCard>
                </div>
            </div>
            <div><p className={styles['card__vacancy_salary']}>{data.salary}</p></div>
        </div>
    )
}

export const FeatureCard = ({ children, color }) => {
    return (
        <div className={styles['card__feature']} style={{ backgroundColor: color }}>
            <p style={{ fontSize: '0.75rem' }}>{children}</p>
        </div >
    )
}