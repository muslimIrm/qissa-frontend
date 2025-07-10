import { lazy, Suspense } from 'react';
import './App.css'
import { Routes, Route } from 'react-router-dom';

const Story = lazy(() => import('./pages/Story'));
const HomePage = lazy(()=> import("./pages/Home"))
const Stories = lazy(()=> import('./pages/Stories'))

function App() {
  return (
    <Routes>

      <Route path="/" element={
      <Suspense fallback={<div>جاري التحميل...</div>}>
        <HomePage />
      </Suspense>
      } />
      <Route path="/stories/:id" element={
      <Suspense fallback={<div>جاري التحميل...</div>}>
        <Story />
      </Suspense>} />
      <Route path="/stories/" element={
        <Suspense fallback={<div>جاري التحميل...</div>}>
        <Stories />
      </Suspense>
      } />
    </Routes>
  )
}

export default App
