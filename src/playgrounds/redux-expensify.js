import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

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
      default:
         return state;
   }
};

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

// store creation

const store = createStore(
   combineReducers({
       expenses: expensesReducer,
       filters: filterReducer
   })
);

store.subscribe(() => {
    console.log(store.getState());
 });
 
const expenseOne= store.dispatch(addExpense({ description: 'rent', amount: 100}));
const expenseTwo= store.dispatch(addExpense({ description: 'coffee', amount: 300}));

console.log(expenseOne);

store.dispatch(removeExpense({ id: expenseOne.expense.id }));
// store.dispatch(editExpense( expenseTwo.expense.id , {amount:500} ));
store.dispatch(setTextFilter('rent'));
store.dispatch(setTextFilter());


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

