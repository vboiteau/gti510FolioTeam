import PropTypes from 'prop-types';
import React from 'react';

import styles from './styles.scss';

const Label = ({ label }) => (
    <li className={`project-list__item__labels__label ${label}`}>
        {label}
    </li>
);

Label.propTypes = {
    label: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]).isRequired
};

export default Label;
