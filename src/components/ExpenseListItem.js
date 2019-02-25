import React from 'react';
import { Link } from 'react-router-dom';

const ExpenseListItem = ({id , description, amount, createdAt}) => (
     <div>
      <Link to={`/edit/${id}`}>
        <h3>{description}</h3>
      </Link>  
      <p>{amount}-{createdAt}</p>
       
     </div>
);

//we do not require anything from the state so we keep the first
//bracket in connect() empty and keep our component ExpenseListItem in the second bracket 
//so that we get the dispatch and other functions to our component 
export default ExpenseListItem;