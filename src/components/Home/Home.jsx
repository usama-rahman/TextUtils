
import { useState } from 'react';
import Navbar from './Navbar';
import Body from './Body'

export default function Home() {
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
    <div className='flex w-full h-screen justify-center mt-10'>
        <div className={`bg-${mode} w-4/5  `}  >
        <Navbar toggleMode = {toggleMode} />
        <Body mode={mode} />
        </div>
    </div>
  )
}





