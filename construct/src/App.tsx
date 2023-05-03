import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import {Index} from './Pages';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' Component={Index} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
