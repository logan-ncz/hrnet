import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import store from './redux/store';

import Home from './pages/Home';
import EmployeeList from './pages/EmployeeList';

import './sass/main.scss';
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/employeeList' element={<EmployeeList />} />
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
