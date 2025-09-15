import HeaderLayout from './components/layouts/HeaderLayout'
import HomePage from './pages/home-page/Homepage'
import Login from './pages/login/Login'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/meme" element={<HeaderLayout><HomePage /></HeaderLayout>} />
      </Routes>
    </Router>
  )
}
export default App
