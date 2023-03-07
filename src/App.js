import React from 'react';
import { Dashboard, Login,  Error } from './pages';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    
      <Router>
        <Routes>
          <Route
            path='/dashboard'
            element={
                <Dashboard />
            
            }
          />
          <Route path='/' element={<Login />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </Router>
  );
}

export default App;
