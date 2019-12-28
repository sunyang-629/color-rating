import React from 'react';
import StarRating from './StarRating';
import PropTypes from 'prop-types';
import './../styles/Color.scss';

const Color = ({title,color,rating=0,onRate=f=>f}) => {
    return (
        <section className='color'>
            <h1>{title}</h1>
            <button>X</button>
            <div className='color' style={{backgroundColor:color}}>
            </div>
            <div>
                <StarRating starsSelected={rating} onRate={onRate} />
            </div>
        </section>
    )
}

Color.propTypes = {
    rating: PropTypes.number,
    onRate: PropTypes.func
}

export default Color;