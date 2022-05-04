import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Signup from './comonets/Signup';
import Result from './comonets/Result';
import Que from './comonets/Que';

function App() {
  return (
   <>
   <Routes>
     <Route path='/' element={<Signup/>}/>
     <Route path='/quiz' element={<Que/>}/>
     <Route path='/result' element={<Result/>}/>
   </Routes>
   
   </>
  );
}

export default App;
