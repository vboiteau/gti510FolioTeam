import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';
import Helmet from 'react-helmet';

const HelmetIntl = ({
    intl: { formatMessage }
}) => (
    <Helmet
        title={formatMessage({
            id: 'app.title',
            defaultMessage: 'Student Folio'
        })}
    />
);


HelmetIntl.propTypes = {
    intl: PropTypes.shape({
        formatMessage: PropTypes.func.isRequired
    }).isRequired
};

export default injectIntl(HelmetIntl);
