import React from 'react';
import { connect } from 'react-redux';

const ExpenseList = () => (
   <div>
      <h1>
         Expense List
      </h1>
   </div>
);

const mapStateToProps = (state) => {
    return {
       expenses: state.expenses,
       filters: state.filters
    };
};

export default connect(mapStateToProps)(ExpenseList);