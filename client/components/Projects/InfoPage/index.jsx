import PropTypes from 'prop-types';
import React from 'react';

import projectsList from './../data/projectsList';

const InfoPage = ({ match: { params: { slug } } }) => {
    const project = projectsList.find(cursor => cursor.slug === slug);
    return (
        <div>
            <h1>
                {project.name}
            </h1>
            <p>
                {project.longDesc}
            </p>
        </div>
    );
};

InfoPage.propTypes = {
    match: PropTypes.shape({
        params: PropTypes.shape({
            slug: PropTypes.string.isRequired
        }).isRequired
    }).isRequired
};

export default InfoPage;
