import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Authorized } from './views/Authorized.jsx'
import { Login } from './components/auth/Login.jsx'
import { Register } from './components/auth/Register.jsx'
import { ApplicationViews } from './views/applicationViews.jsx'

export const App = () => {

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} /> 
      
      <Route path="*" element={
        <Authorized>
          <ApplicationViews />
        </Authorized>
      } />
    </Routes>
  )
}
