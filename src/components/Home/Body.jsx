/* eslint-disable react/prop-types */
import {useState} from 'react'

function Text(props) {

 
  const handelOnChange = (e) => {
    setText(e.target.value)
  }

  const handelUpClicked = () => {
    let newText = text.toUpperCase();
    setText(newText)
  }
  
  const handelLoClicked = () => {
    let newText = text.toLowerCase();
    setText(newText)
  }

  const handelClear = () => {
    setText('');
  }

  const [text, setText] = useState("")
  

  let wordCount = text.split(' ').length

  return (
    <div className={`bg-${props.mode}`}>
      <div className="mt-8 w-full">
        <div className=''>
          {/*  eslint-disable-next-line react/prop-types */}
          <label htmlFor="message" className={`block mb-3 pt-3 text-lg font-medium text-${props.mode === 'gray-100' ?'slate-600' : 'gray-100'} text-center`}>Your message</label>        
        </div>
        <textarea 
            value={text}
            id="message" 
            rows="8" 
            className={`block p-3 w-full text-lg text-gray-800 rounded-lg bg-slate-200 
            dark:placeholder-gray-400`}
            placeholder="Write your thoughts here..."
            onChange={handelOnChange}>
        </textarea>

        <button 
          onClick={handelUpClicked}
          type="button" 
          className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 mt-4">
           Convert to Uppercase
        </button>

        <button 
          onClick={handelLoClicked}
          type="button" 
          className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 mt-4">
           Convert to LowerCase
        </button>

        <button 
          onClick={handelClear}
          type="button" 
          className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 mt-4">
           Clear text
        </button>

        {/*  eslint-disable-next-line react/prop-types */}
        <div className={`text-${props.mode === 'gray-100' ?'slate-600' : 'gray-100'}`}>
          <h2 className='text-lg font-medium'>Your Text summary</h2>
          <p>{wordCount} words and {text.length} caracters</p>
          <p>{Math.floor(0.0042 * wordCount)} Minutes to read</p>
          <h2 className='text-lg font-medium '>Preview</h2>
          <p className='px-4 py-3 rounded-md'>{text.length>0 ? text: "Enter Text to Preview"}</p>
        </div>
       
      </div>
    </div>
  )
}

export default Text



