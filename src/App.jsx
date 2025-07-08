
import './App.css'
import { Routes, Route } from 'react-router-dom';
import HomePage from "./pages/Home"
import Story from './pages/Story';
import Stories from './pages/Stories';
function App() {
  return (
    <Routes>
      
      <Route path="/" element={<HomePage />} />
      <Route path="/stories/:id" element={<Story />} />
      <Route path="/stories/" element={<Stories />} />
    </Routes>
  )
}

export default App
