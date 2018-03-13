import React from 'react';
import PropTypes from 'prop-types';

class ProjectImage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            image: ''
        };
    }

    componentWillMount() {
        /* eslint-disable import/no-dynamic-require, global-require */
        this.state.image = require(`#Assets/img/${this.props.filename}`);
        /* eslint-enable import/no-dynamic-require, global-require */
    }

    render() {
        const classNames = ['', ...this.props.classNames].map(className => `projects__project-image${className.length ? className : ''}`).join(' ');
        return (
            <img src={this.state.image} alt={this.props.alt} width="100%" className={classNames} />
        );
    }
}

ProjectImage.propTypes = {
    filename: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    classNames: PropTypes.arrayOf(PropTypes.string)
};

ProjectImage.defaultProps = {
    classNames: []
};

export default ProjectImage;
