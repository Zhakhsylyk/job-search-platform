import React from 'react'
import './style.scss';
import leftArrow from '../../../images/left-arrow.svg';
import rightArrow from '../../../images/right-arrow.svg';


export const Shape = ({ left, right }) => {
    return (
        <div className='circle' >
            {left ?
                <img src={leftArrow} alt='arrow' />
                : right ? <img src={rightArrow} alt='arrow' />
                    : <p>01</p>
            }
        </div>
    )
}
