import { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Test from './components/Test'

function App() {
  const [count, setCount] = useState(0)
  const options = ['1', '2', '5']
  return (
    <div className="App">
      <h1>Hello world</h1>
      <Routes>
        <Route path='/test' element={<Test options={options} />} />
      </Routes>
    </div>
  )
}

export default App
