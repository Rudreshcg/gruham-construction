import Dashboard from './components/Dashboard/Dashboard';
import GoogleAnalytics from './components/SEO/GoogleAnalytics';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <Router>
      <GoogleAnalytics />
      <Routes>
        <Route path='/*' element={<Dashboard/>}/>
      </Routes>
    </Router>
  )
}

export default App
