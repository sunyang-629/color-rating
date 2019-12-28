import React from 'react';
import PropTypes from 'prop-types';
import './../styles/Star.scss';

const Star = ({selected, onRate=f=>f}) => {
    return (
        <div
            className={(selected) ? "star selected" : "star"}
            onClick={onRate}
        ></div>
    )
}

Star.propTypes = {
    selected: PropTypes.bool,
    onRate: PropTypes.func
}

export default Star;