import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import { format } from 'url';
import getVisibleExpenses from './selectors/expenses';

const store = configureStore();

console.log(store.getState());
store.dispatch(addExpense({description: 'Water bill'}));
store.dispatch(addExpense({description: 'Gas bill'}));
store.dispatch(setTextFilter('bill'));

const state=store.getState();

const getVisibleExpenses = getVisibleExpenses(state.expenses, state.filters);


ReactDOM.render(<AppRouter />, document.getElementById('app'));
