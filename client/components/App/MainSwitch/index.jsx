import React from 'react';
import { Switch, Route } from 'react-router';

import Projects from './../../Projects';

export default () => (
    <Switch>
        <Route paht="/" component={Projects} />
    </Switch>
);
