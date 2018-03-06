import PropTypes from 'prop-types';
import React from 'react';

const Label = ({ label }) => (
    <li className={`label label-${label}`}>
        {label}
    </li>
);

Label.propTypes = {
    label: PropTypes.oneOf([
        PropTypes.string,
        PropTypes.number
    ]).isRequired
};

export default Label;
