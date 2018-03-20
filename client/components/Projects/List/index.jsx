import { FormattedMessage } from 'react-intl';
import React from 'react';
import PropTypes from 'prop-types';

import projectsList from './../data/projectsList';
import Item from './Item';
import FilterSelect from './FilterSelect';
import styles from './styles.scss';

const List = ({ filter }) => (filter ?
    projectsList.filter(({ year, technos }) => [year.toString(), ...technos].includes(filter)) :
    projectsList
).map(({
    name, shortDesc, slug, year, technos, images
}) => (
    <Item
        key={slug}
        name={name}
        shortDesc={shortDesc}
        slug={slug}
        labels={[year, ...technos]}
        img={images[0]}
    />
));

const filtersEntries = [...new Set(projectsList.reduce((filters, { year, technos }) => [
    ...filters, year.toString(), ...technos
], []))];

List.propTypes = {
    filter: PropTypes.string.isRequired
};

class ProjectList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filter: ''
        };
        this.setFilter = this.setFilter.bind(this);
    }

    setFilter(filter) {
        this.setState({ filter });
    }

    render() {
        return (
            <div className="projects__list">
                <h1 className="projects__list__title">
                    <FormattedMessage
                        id="projects.title"
                        description="Projects List"
                        defaultMessage="Projects List"
                    />
                </h1>
                <FilterSelect setFilter={this.setFilter} filters={filtersEntries} currentFilter={this.state.filter} />
                <ul className="projects__list__body">
                    <List filter={this.state.filter} />
                </ul>
            </div>
        );
    }
}

export default ProjectList;
