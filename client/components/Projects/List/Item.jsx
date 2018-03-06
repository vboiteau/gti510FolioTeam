import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import React from 'react';

import styles from './styles.scss';
import LabelList from './../common/LabelList';
import ProjectImage from './../common/ProjectImage';

const Item = ({
    name, shortDesc, slug, labels, img
}) => (
    <li className="projects__list__item">
        <h2 className="projects__list__item__title">
            {name}
        </h2>
        <div className="projects__list__item__content">
            <div className="preview">
                <ProjectImage filename={img} alt={`${name} preview`} />
            </div>
            <p className="short-desc">
                {shortDesc}
            </p>
            <LabelList labels={labels} />
        </div>
        <div className="projects__list__item__footer">
            <Link to={`/projects/${slug}`} className="projects__list__item__btnMore">
                <FormattedMessage
                    id="projects.list.more"
                    defaultmessage="more"
                />
            </Link>
        </div>
    </li>
);

Item.propTypes = {
    name: PropTypes.string.isRequired,
    shortDesc: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    labels: PropTypes.array,
    img: PropTypes.string
};

Item.defaultProps = {
    labels: [],
    img: ''
};

export default Item;
