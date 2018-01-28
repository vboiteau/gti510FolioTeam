import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import React from 'react';

const Item = ({ name, shortDesc, slug }) => (
    <li>
        <h2>
            {name}
        </h2>
        <p>
            {shortDesc}
        </p>
        <Link to={`/projects/${slug}`}>
            more
        </Link>
    </li>
);

Item.propTypes = {
    name: PropTypes.string.isRequired,
    shortDesc: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired
};

export default Item;
