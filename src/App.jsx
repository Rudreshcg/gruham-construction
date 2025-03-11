import { useState } from 'react'
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <Router>
        <Header />
    </Router>
  )
}

export default App
