import React from 'react';
import articleOne from '../../../../images/articleOne.png';
import './style.scss';

export const Box = ({ data }) => {
    return (
        <div className='wrapper'>
            <img src={data.image} alt='cover' width={774} height={565} />
            <p className='info'>BY   <span>{data.author}</span>   IN   <span>{data.category}</span></p >
            <p className='title'>{data.title}</p>
        </div >
    )
}
