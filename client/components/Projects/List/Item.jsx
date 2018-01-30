import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import React from 'react';

import styles from './styles.scss';

const Item = ({ name, shortDesc, slug }) => (
    <li className="projects__list__item">
        <h2 className="projects__list__item__title">
            {name}
        </h2>
        <div className="projects__list__item__content">
            <p>
                {shortDesc}
            </p>
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
    slug: PropTypes.string.isRequired
};

export default Item;
