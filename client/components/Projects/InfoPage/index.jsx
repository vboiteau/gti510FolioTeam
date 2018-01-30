import PropTypes from 'prop-types';
import React from 'react';

import styles from './styles.scss';
import projectsList from './../data/projectsList';

const InfoPage = ({ match: { params: { slug } } }) => {
    const project = projectsList.find(cursor => cursor.slug === slug);
    return (
        <div className="projects__infoPage">
            <h1 className="projects__infoPage__title">
                {project.name}
            </h1>
            <div className="projects__infoPage__content">
                <p>
                    {project.longDesc}
                </p>
            </div>
            <div className="projects__infoPage__footer" />
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
