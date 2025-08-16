import './App.css'
import {QueryClientProvider, QueryClient} from "@tanstack/react-query"
import {BrowserRouter, Routes, Route} from "react-router-dom"
// import { useEffect } from 'react'
import Home from './pages/Home'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Signup from './pages/signup'
import Notebooks from './pages/Notebooks'

const client = new QueryClient();

function App() {

  return (
    <>
      <QueryClientProvider client={client}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/create/notebook" element={<Notebooks />} />
            <Route path="/notebook/edit/:notebookID" element={<Notebooks />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </>
  );
}

export default App
