import React from 'react';
import PropTypes from 'prop-types';

const FilterSelect = ({ setFilter, filters, currentFilter }) => {
    const options = filters.map(filter => <option value={filter} key={`filter_${filter}`} >{filter}</option>);
    return (
        <select onInput={e => setFilter(e.target.value)} value={currentFilter} className="projects__list__filter-select">
            <option value="">all</option>
            {options}
        </select>
    );
};

FilterSelect.propTypes = {
    filters: PropTypes.arrayOf(PropTypes.string).isRequired,
    setFilter: PropTypes.func.isRequired,
    currentFilter: PropTypes.string.isRequired
};

export default FilterSelect;
