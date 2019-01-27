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
store.dispatch(addExpense({ description: 'coffee', amount: 300}));
console.log(expenseOne);
store.dispatch(removeExpense({ id: expenseOne.expense.id }));



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

