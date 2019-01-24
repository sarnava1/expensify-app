import React from 'react';
import ReactDOM from 'react-dom';
import {Route, BrowserRouter} from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const ExpenseDashboardPage = () => (
    <div>
       This is from expense dashboard page
    </div>
);

const EditExpensePage = () => (
    <div>
       This is from edit expense page
    </div>
);

const AddExpensePage = () => (
    <div>
       This is from add expense page
    </div>
);

const HelpPage = () => (
    <div>
       This is from help page
    </div>
);

const routes = (
   <BrowserRouter>
     <div>
       <Route path="/" component={ExpenseDashboardPage} exact={true} />
       <Route path="/edit" component={EditExpensePage} />
       <Route path="/create" component={AddExpensePage}  />
       <Route path="/help" component={HelpPage} />
     </div>
   </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));
