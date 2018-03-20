import PropTypes from 'prop-types';
import React from 'react';
import FaGithub from 'react-icons/lib/fa/github-square';

import styles from './styles.scss';
import projectsList from './../data/projectsList';
import LabelList from './../common/LabelList';
import ProjectImage from './../common/ProjectImage';

const InfoPage = ({ match: { params: { slug } } }) => {
    const project = projectsList.find(cursor => cursor.slug === slug);

    const images = project.images.map((image, i) => <ProjectImage filename={image} alt={`${project.name} ${i} showcase`} key={`${slug}_${image}`} />);

    const github = project.github ? (
        <a href={project.github}><FaGithub size={24} /></a>
    ) : '';

    return (
        <div className="projects__infoPage">
            <h1 className="projects__infoPage__title">
                {project.name}
            </h1>
            <div className="projects__infoPage__content">
                <div className="projects__infoPage__content__main">
                    <p>
                        {project.longDesc}
                    </p>
                    <LabelList labels={[project.year, ...project.technos]} />
                </div>
                <div className="projects__infoPage__content__sidebar">
                    {images}
                </div>
            </div>
            <div className="projects__infoPage__footer">
                {github}
            </div>
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
