
import { useState } from 'react';
import Navbar from './Navbar';
import Body from './Body'
import Alert from './Alert';

export default function Home() {
    const [mode, setMode] = useState('gray-100')

    const [alert, setAlert] = useState(null)

    const showAlert = (massege) => {
      setAlert({
        msg : massege
      })
      setTimeout( () => {
        setAlert(null)
      },1000)
    }

    const toggleMode = () => {
      if (mode === "gray-100") { 
        setMode('slate-600');
        document.body.style.backgroundColor = "#18181b"
        showAlert("Dark mode enabled")
      }else{
        setMode('gray-100');
        document.body.style.backgroundColor = "#cbd5e1"
        showAlert("Light mode enabled")
      }
    }
  return (
    <div className='flex w-full h-screen justify-center mt-10'>
        <div className={`bg-${mode} w-4/5  `}  >
        <Navbar toggleMode = {toggleMode} />
        <Alert alert={alert} />
        <Body mode={mode} />
        </div>
    </div>
  )
}





