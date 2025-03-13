import Dashboard from './components/Dashboard/Dashboard';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/*' element={<Dashboard/>}/>
      </Routes>
    </Router>
  )
}

export default App
