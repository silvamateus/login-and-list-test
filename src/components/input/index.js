import React from 'react';
import PropTypes from 'prop-types';

const Input = props => {
    return (
        <div className="form-group">
            <label htmlFor={props.htmlFor}>{props.text}</label>
            <input type={props.type} className="form-control" id={props.htmlFor} />
            {props.htmlFor === 'email' ? (
                <small id="emailHelp" className="form-text text-muted">
                    Não iremos compartilhar seu email com ninguém.
                </small>
            ) : null}
        </div>
    );
};

Input.propTypes = {
    text: PropTypes.string,
    htmlFor: PropTypes.string,
    id: PropTypes.string,
};

export default Input;
