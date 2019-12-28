import React from 'react';
// import { StarRating } from './StarRating';
import './../styles/Color.scss';

const Color = ({title,color,rating=0}) => {
    return (
        <section className='color'>
            <h1>{title}</h1>
            <div className='color' style={{backgroundColor:color}}>
            </div>
        </section>
    )
}
            // <div>
            //     <StarRating starsSelected={rating} />
            // </div>
export default Color;