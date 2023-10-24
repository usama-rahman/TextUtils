import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Text from './components/Text'


function App() {

  const [mode, setMode] = useState('gray-100')

  const toggleMode = () => {
    if (mode === "gray-100") { 
      setMode('slate-600');
      document.body.style.backgroundColor = "#18181b"
    }else{
      setMode('gray-100');
      document.body.style.backgroundColor = "#cbd5e1"
    }
  }

  

  return (
    <div className={`bg-${mode} p-8 max-w-7xl w-full h-screen`}  >
      <Navbar toggleMode = {toggleMode} />
      <Text mode={mode} />
    </div>
  )
}

export default App
