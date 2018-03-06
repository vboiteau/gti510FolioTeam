import React from 'react';
import PropTypes from 'prop-types';
import Label from './../Label';

import styles from './styles.scss';

const LabelList = ({ labels }) => {
    const labelListItems = labels.map(label => <Label label={label} key={`label-${label}`} />);
    return (
        <ul className="project-list__item__labels">
            {labelListItems}
        </ul>
    );
};

LabelList.propTypes = {
    labels: PropTypes.array.isRequired
};

export default LabelList;
