import { createStore, combineReducers } from 'redux';

//Expenses reducer

const expensesReducerDefaultState = [];

const expensesReducer = (state= expensesReducerDefaultState, action) => {
     switch(action.type){
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

// store creation

const store = createStore(
   combineReducers({
       expenses: expensesReducer,
       filters: filterReducer
   })
);


const demoState = {
    expenses : [{
        id : 'dkfjbkjdf',
        description: 'jan rent',
        note: 'more description',
        amount: 87587,
        createdAt: 0     
    }],
    filters : {
        text: 'rent',
        sortBy: 'amount', //date or amount
        startDate : undefined,
        endDate: undefined
    }
};