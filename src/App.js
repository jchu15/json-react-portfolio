import React from 'react'
import {Routes, Route} from 'react-router-dom'

import Home from './Pages/Home'
import { Projects } from './Pages/Projects';
function App() {
  return (
    <>
       <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/projects' element={<Projects />} />
      </Routes>
    </>
  );
}

export default App;
