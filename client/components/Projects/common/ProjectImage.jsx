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
        this.state.image = require(`../../../../docs/img/${this.props.filename}`);
        /* eslint-enable import/no-dynamic-require, global-require */
    }

    render() {
        return (
            <img src={`/img/${this.props.filename}`} alt={this.props.alt} />
        );
    }
}

ProjectImage.propTypes = {
    filename: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
};

export default ProjectImage;
