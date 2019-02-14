import React from 'react';
import { connect } from 'react-redux';
import removeExpense from '../actions/expenses';

const ExpenseListItem = ({dispatch, id , description, amount, createdAt}) => (
     <div>
        <h3>{description}</h3>
        <p>{amount}-{createdAt}</p>
        <button on onClick= { () => {
              dispatch( removeExpense({ id }));
        }}>Remove</button>
     </div>
);

//we do not require anything from the state so we keep the first
//bracket in connect() empty and keep our component ExpenseListItem in the second bracket 
//so that we get the dispatch and other functions to our component 
export default connect()(ExpenseListItem);