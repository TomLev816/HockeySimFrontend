import React from 'react';
import {Routes, Route, Navigate } from 'react-router-dom';
import './App.css';

import Container from '@mui/material/Container';
import PageLanding from './Landing/PageLanding'
import Dashboard from './Dashboard/DashLanding'
import Login from './Components/Login'
import Navigation from './Components/Navigation'

import {useAuth} from "./auth"

function App() {
  const [logged] = useAuth();

  return (
    <div className="App">
      <Navigation logged={logged}/>
      <Container maxWidth="lg">
        <Routes>
          {!logged && (
            <>
              <Route path="/" element={<PageLanding />} />
              <Route path="/login" element={<Login />} />
              <Route path="*" element={<Navigate to ="/login" />}/>
            </>
          )}
          {logged && (
            <>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="*" element={<Navigate to ="/dashboard" />}/>
            </>
          )}
        </Routes>
      </Container>
    </div>
  );
}

export default App;
