import React from 'react';
import { Switch, Route, Redirect } from 'react-router';

import Projects from './../../Projects';
import About from './../../About';

export default () => (
    <Switch>
        <Route
            exact
            path="/"
            render={() => (
                <Redirect to="/projects" />
            )}
        />
        <Route path="/projects" component={Projects} />
        <Route path="/about" component={About} />
    </Switch>
);
