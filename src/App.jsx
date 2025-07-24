import React from 'react'
import './index.css'
import { Routes, Route } from 'react-router-dom';
import Register from './Pages/Register'
import Personal from './Pages/Personal'
import Address1 from './Pages/Address1'
import Address2  from './Pages/Address2'
import Success from './Pages/Success';
import Login from './Pages/Login';
import ProtectedRoute from './Components/ProtectedRoute';
import Dashboard from './Pages/Dashboard';


const App = () => {
  return (
    <div>
      
      
      <Routes>
        <Route path='/' element={<Register />} />
        <Route path='/personal' element={<Personal />} />
        <Route path='/address1' element={<Address1 />} />
        <Route path='/address2' element={<Address2 />} />
        <Route path='/success' element={<Success />} />
        <Route path='/login' element={<Login />} />
        <Route
          path='Dashboard'
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />  
      </Routes>
      
    </div>
  )
}

export default App
