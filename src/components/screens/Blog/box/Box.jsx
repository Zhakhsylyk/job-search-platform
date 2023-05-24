import React from 'react';
import articleOne from '../../../../images/articleOne.png';
import './style.scss';
import { Link } from 'react-router-dom';


export const Box = ({ data }) => {
    return (
        <div className='wrapper'>
            <Link to={`/articles/${data.id}`}><img src={data.image} alt='cover' width={774} height={565} /></Link>
            <p className='info'>BY   <span>{data.author}</span>   IN   <span>{data.category}</span></p >
            <Link to={`/articles/${data.id}`}><p className='title' style={{ color: '#000' }}>{data.title}</p></Link>
        </div >
    )
}
