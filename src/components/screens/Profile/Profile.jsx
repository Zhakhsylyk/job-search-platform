import React, { Fragment } from 'react';
import Header from '../../header/Header';
import './styles/style.scss';
import avatar from '../../../images/candidate.png';

export const Profile = () => {
    const Main = () => {
        return (
            <div className='profile__main'>
                <div className='profile__main_inner'>
                    <img src={avatar} alt='avatar' width={250} height={250} />
                    <div>
                        <span>Alikhan Zhakhsylyk</span>
                        <p>username: <span>azhakhsylyk</span> </p>
                        <p>Email: <span>azhakhsylyk@gmail.com</span> </p>
                    </div>
                </div>
                <div className='profile__main_outer'>

                </div>
            </div>
        )
    }
    const Recommendations = () => {
        return (
            <div className='profile__recommendations'>recommendations</div>
        )
    }
    return (
        <Fragment>
            <Header />
            <Main />
        </Fragment>
    )
}
