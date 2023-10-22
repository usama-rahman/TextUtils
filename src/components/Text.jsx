import {useState} from 'react'

function Text() {
  
  const handelOnChange = (e) => {
    setText(e.target.value)
  }

  const handelUpClicked = () => {
    let newText = text.toUpperCase();
    setText(newText)
  }

  const [text, setText] = useState("Enter The Text")

  return (
    <>
      <div className="mt-8">
        <label htmlFor="message" className="block mb-2 text-lg font-medium text-gray-600 dark:text-white">Your message</label>
        <textarea 
            value={text}
            id="message" 
            rows="8" 
            className="block p-3 w-full text-md text-gray-900 bg-gray-50 rounded-lg border border-gray-300
             focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600
             dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
            placeholder="Write your thoughts here..."
            onChange={handelOnChange}
        >
        </textarea>
        <button 
          onClick={handelUpClicked}
          type="button" 
          className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 mt-4">
           Convert to Uppercase
        </button>
      </div>
    </>
  )
}

export default Text



