import React from 'react'
import styles from './Footer.module.scss';
import logo from '../../images/jalda-logo.png';


export const Footer = () => {
    return (
        <div className={styles.wrapper}>
            <div style={{
                position: 'absolute', height: 214, width: 1057, background: '#FFF', boxShadow: '0px 1px 4px rgba(0, 0, 0, 0.25)',
                margin: '0 auto',
                borderRadius: 20, zIndex: 2, translate: '-50% -50%', left: '50%',
                padding: '48px 73px', display: 'flex', alignItems: 'center', gap: 75,
            }}>
                <p style={{ fontSize: '3.125rem', width: 434 }}>Never Want to Miss
                    Any <span>Job News?</span></p>
                <div style={{
                    width: 402, height: 60, background: '#FFF',
                    boxShadow: '0px 1px 4px rgba(0, 0, 0, 0.25)',
                    borderRadius: 20,
                    display: 'flex', alignItems: 'center',
                    padding: '5px 6px'
                }}>
                    <input type="text" placeholder='Enter your email...' />
                    <button className={styles['btn']}>Subscribe</button>
                </div>
            </div>
            <div style={{ width: 1159, display: 'block', margin: '0 auto', paddingTop: 215 }}>
                <div style={{ display: 'flex', borderBottom: '2px solid #CDCDCD', alignItems: 'center' }}><img src={logo} alt='jalda' witdh={36} height={36} />
                    <div>
                        <ul>

                            <li>About
                            </li>
                            <li>Jobs
                            </li>
                            <li>Contact
                            </li>
                        </ul>
                    </div>
                    <div style={{ marginRight: 0, marginLeft: 'auto' }}> <ul className={styles['social-media-list']}>
                        <li><a href="#" className="fa fa-instagram"></a>
                        </li>
                        <li>
                            <a href="#" className="fa fa-facebook"> </a>
                        </li>
                        <li>
                            <a href="#" className="fa fa-twitter"> </a>
                        </li>
                    </ul></div>
                </div>
            </div>
        </div>
    )
}
