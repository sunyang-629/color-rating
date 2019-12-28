import React from "react";
import PropTypes from 'prop-types';
import Star from './Star';

class StarRating extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            totalStars:5
        }
    }

    render() {
        const { starsSelected } = this.props;
        const { totalStars } = this.state;
        return (
            <div className="star-rating">
                {[...Array(totalStars)].map((star, i) =>
                    <Star key={i} selected={i<starsSelected} />
                    )}
                <p>{starsSelected} of {totalStars} stars</p>
            </div>
        )
    }
}

StarRating.propTypes = {
    starsSelected: PropTypes.number,
    // totalStars:PropTypes.number
}

export default StarRating;