import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';
//import { stat } from 'fs';

//we have used destructuring of objects everywhere

//Expenses reducer

const expensesReducerDefaultState = [];

const expensesReducer = (state= expensesReducerDefaultState, action) => {
     switch(action.type){
         case 'ADD_EXPENSE':
            return [
                ...state, 
                action.expense
            ];
         case 'REMOVE_EXPENSE':
            return state.filter(({ id }) => id !== action.id);
         case 'EDIT_EXPENSE':
            return state.map( ( expense ) => {
                if(expense.id === action.id){
                    return {
                        ...expense,
                        ...action.updates
                    }
                }else{
                    return expense;
                }
            });
         default:
            return state;
     }
};

//filters reducer

const filtersReducerDefaultState = {
    text :'',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};

const filterReducer = (state= filtersReducerDefaultState, action ) => {
   switch (action.type) {
      case 'SET_TEXT_FILTER':
         return  {
             ...state,
             text: action.text
         }
      case 'SORT_BY_AMOUNT':
          return {
              ...state,
              sortBy: 'amount'
          };
      case 'SORT_BY_DATE':
           return {
              ...state,
              sortBy: 'date'
           };
      case 'SET_START_DATE':
           return{
            ...state,
            startDate: action.startDate
           };
      case 'SET_END_DATE':
           return{
             ...state,
             endDate: action.endDate
           };               
      default:
         return state;
   }
};

//SET START DATE
const setStartDate = (startDate) => ({
     type: 'SET_START_DATE',
     startDate
});

//SET END DATE
const setEndDate = (endDate) => ({
      type: 'SET_END_DATE',
      endDate
});


const sortByDate = () => ({
    type: "SORT_BY_DATE"
});

const sortByAmount = () => ({
    type: "SORT_BY_AMOUNT"
});


//ADD EXPENSE

const addExpense = (
    {
     description = '',
     note = '',
     amount=0,
     createdAt=0
     } = {}
    ) => ({
     type: 'ADD_EXPENSE',
     expense:{
         id: uuid(),
         description,
         amount,
         createdAt 
     }
});

//SET_TEXT_FILTER

const setTextFilter = (text = '') => ({
   type: 'SET_TEXT_FILTER',
   text
});

// EDIT EXPENSE
const editExpense = ( id , updates ) => ({
    typeof: 'EDIT_EXPENSE',
    id,
    updates
}); 


//REMOVE EXPENSE

const removeExpense = ({id} = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
})


//GET VISIBLE EXPENSES
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate} ) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch= typeof endDate!== 'number' || expense.createdAt <= endDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());



        return startDateMatch && endDateMatch && textMatch;
    });
};

// store creation

const store = createStore(
   combineReducers({
       expenses: expensesReducer,
       filters: filterReducer
   })
);

store.subscribe(() => {
    const state= store.getState();
    const visibleExpenses = getVisibleExpenses( state.expenses , state.filters );
    console.log(visibleExpenses);
 });
 
const expenseOne= store.dispatch(addExpense({ description: 'rent', amount: 100, createdAt: 1000 }));
const expenseTwo= store.dispatch(addExpense({ description: 'coffee', amount: 300, createdAt: -1000 }));

// console.log(expenseOne);

// store.dispatch(removeExpense({ id: expenseOne.expense.id }));
// //store.dispatch(editExpense( expenseTwo.expense.id , {amount:500} ));
store.dispatch(setTextFilter('ffe'));
// store.dispatch(setTextFilter());
// store.dispatch(sortByAmount());
// store.dispatch(sortByDate());
store.dispatch(setStartDate(125));
// store.dispatch(setStartDate());
store.dispatch(setEndDate(1250));
// store.dispatch(setEndDate());

// const demoState = {
//     expenses : [{
//         id : 'dkfjbkjdf',
//         description: 'jan rent',
//         note: 'more description',
//         amount: 87587,
//         createdAt: 0     
//     }],
//     filters : {

//         text: 'rent',
//         sortBy: 'amount', //date or amount
//         startDate : undefined,
//         endDate: undefined
//     }
// };
