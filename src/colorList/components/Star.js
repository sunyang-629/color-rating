import React from 'react';
import PropTypes from 'prop-types';
import './../styles/Star.scss';

const Star = props => {
    return (
        <div className={(props.selected) ?"star selected":"star"}></div>
    )
}

Star.propTypes = {
    selected: PropTypes.bool
}

export default Star;