import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter } from '../actions/filters';

//since mapStateToProps has access to filters and thus ExpenseListFilters has access 
// to props.filters.text

const ExpenseListFilters = (props) => (
    <div>
      <input type="text" value={props.filters.text} onChange={ (e) => {
           props.dispatch(setTextFilter(e.target.value));         
      }}  />
    </div>
);
 
const mapStateToProps = (state) => {
   return {
      //grabbing all the filters from the state
      filters: state.filters
   };
};

export default connect(mapStateToProps)(ExpenseListFilters );