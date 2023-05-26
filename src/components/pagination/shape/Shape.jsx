import React from 'react'
import './style.scss';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';



export const Shape = ({ left, right, children }) => {
    return (
        <div className='circle' onClick={() => console.log(children)}>
            {left ?
                <ArrowBackIosIcon  />
                : right ? <ArrowForwardIosIcon />
                    : <p>{children}</p>
            }
        </div>
    )
}
