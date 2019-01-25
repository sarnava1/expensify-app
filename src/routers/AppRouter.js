import React from 'react';
import {Route, BrowserRouter, Switch, Link, NavLink} from 'react-router-dom';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import EditExpensePage from '../components/EditExpensePage';
import AddExpensePage from '../components/AddExpensePage';
import HelpPage from '../components/NotFoundPage'
import Header from '../components/Header'
import NotFoundPage from '../components/NotFoundPage'

const AppRouter = () => (
    <BrowserRouter>
    <div>
    <Header />
    <Switch>
      <Route path="/" component={ExpenseDashboardPage} exact={true} />
      <Route path="/edit" component={EditExpensePage} />
      <Route path="/create" component={AddExpensePage}  />
      <Route path="/help" component={HelpPage} />
      <Route component={NotFoundPage} />
    </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
