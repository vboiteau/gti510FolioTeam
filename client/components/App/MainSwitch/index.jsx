import React from 'react';
import { Switch, Route, Redirect } from 'react-router';

import ProjectsList from './../../Projects/List';
import ProjectInfo from './../../Projects/InfoPage';
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
        <Route exact path="/projects" component={ProjectsList} />
        <Route path="/projects/:slug" component={ProjectInfo} />
        <Route path="/about" component={About} />
    </Switch>
);
