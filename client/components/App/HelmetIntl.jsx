import React from 'react';
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
    intl: React.propTypes.shape({
        formatMessage: React.propTypes.func.isRequired
    }).isRequired
};

export default injectIntl(HelmetIntl);
