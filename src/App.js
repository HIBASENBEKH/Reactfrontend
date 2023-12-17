// App.js
import React from 'react';
import { Route,  Routes } from 'react-router-dom';

import Home from './pages/Home';
import EmployeeForm from './components/EmployeeForm';
import Main from './pages/Main';
import Navbar from './components/Navbar';



function App() {
  return (
    <>
  <Routes >
        <Route path='/' element={<Home/>}>  </Route>
        <Route path='/employee' element={<EmployeeForm/>}></Route>
        
  </Routes>
    </>
  );
}
export default App;
