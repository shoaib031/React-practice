import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './components/Signup/Signup';
import Signin from './components/Signin/Signin';
import File from './components/file/File';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Another from './components/another/another'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      {/* <Another /> */}
      {/* <Signup /> */}
      <Routes>
        <Route path='/signup' element={<Signup />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/file' element={<File />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
