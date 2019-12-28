import React from 'react';
import PropTypes from 'prop-types';
import './styles/ColorList.scss';
import Color from './components/Color'

const ColorList = ({colors=[],onRate=f=>f}) => {
    return (
        <div className="color-list">
            {(colors.length === 0) ?
            <p>No Colors Listed</p>:
                colors.map(color => <Color key={color.id}
                    {...color}
                    onRate={(rating) => onRate(color.id,rating)}/>)
            }
        </div>
    )
}

ColorList.propTypes = {
    colors: PropTypes.array,
    onRate: PropTypes.func
}

export default ColorList;