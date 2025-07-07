
import './App.css'
import { Routes, Route } from 'react-router-dom';
import HomePage from "./pages/Home"
import Story from './pages/Story';
function App() {
  return (
    <Routes>
      
      <Route path="/" element={<HomePage />} />
      <Route path="/story/:id" element={<Story />} />
    </Routes>
  )
}

export default App
