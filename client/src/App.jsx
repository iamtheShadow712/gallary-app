import { useState } from 'react'
import './App.css'
import LeftBar from './components/leftBar/LeftBar'
import TopBar from './components/topbar/TopBar'
import Gallary from './components/gallary/Gallary'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='app'>
      <LeftBar />
      <div className='content'>
        <TopBar />
        <Gallary />
      </div>
    </div>
  )
}

export default App
