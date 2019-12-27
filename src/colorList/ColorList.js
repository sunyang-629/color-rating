import React from 'react';
import PropTypes from 'prop-types';
import './styles/ColorList.scss'

const ColorList = ({colors}) => {
    return (
        <div className="color-list">
            {(colors.length === 0) ?
            <p>No Colors Listed</p>:
                // colors.map(color => <Color key={color.id} {...color} />)
                <p>'${colors.length}'</p>
            }
        </div>
    )
}

ColorList.propTypes = {
    colors:PropTypes.array
}

ColorList.defaultProps = {
    colors: []
}

export default ColorList;