import './App.css'
import {QueryClientProvider, QueryClient} from "@tanstack/react-query"
import {BrowserRouter, Routes, Route, useNavigate} from "react-router-dom"
import { useEffect } from 'react'
import Home from './pages/home'
import Login from './pages/login'

const client = new QueryClient();

function App() {

  return (
    <>
      <QueryClientProvider client={client}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </>
  )
}

export default App
