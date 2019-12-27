import React from 'react';
import PropTypes from 'prop-types';
import './styles/AddColorForm.scss'

class AddColorForm extends React.Component {
    static propTypes = {
        onNewColor: PropTypes.func
    }

    static defaultProps = {
        onNewColor: f=>f
    }

    constructor(props) {
        super(props)
        this.submit = this.submit.bind(this)
    };

    submit(e) {
        const { _title, _color } = this.refs
        e.preventDefault();
        this.props.onNewColor(_title.value, _color.value);
        _title.value = '';
        _color.value = '#000000';
        _title.focus();
    }

    render() {
        return (
            <form className="add-color" onSubmit={this.submit}>
                <input ref="_title" type="text" placeholder="color title" required></input>
                <input ref="_color" type="color" required></input>
                <button>Add</button>
            </form>
        )
    }
}

export default AddColorForm;