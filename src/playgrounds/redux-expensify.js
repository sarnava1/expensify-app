import { createStore, combineReducers } from 'redux';

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