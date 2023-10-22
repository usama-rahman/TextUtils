// import React from 'react'

function Text() {
  return (
    <>
      <div className="mt-8">

        <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your message</label>

        <textarea 
            id="message" 
            rows="8" 
            className="block p-3 w-full text-md text-gray-900 bg-gray-50 rounded-lg border border-gray-300
             focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600
             dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
            placeholder="Write your thoughts here...">

        </textarea>

      </div>
    </>
  )
}

export default Text