import React, { useState } from 'react'

function App() {
  const [input, setInput] = useState('Hello world')
  const [alert, setAlert] = useState('')

  function slugify(str: string) {
    return str
      .replace(/\s/g, '-')
      .replace(/[^\w.-]/gi, '')
      .toLowerCase()
  }

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setInput(event.target.value)
  }

  async function handleCopyToClipboard() {
    await navigator.clipboard.writeText(input)
    setAlert('Copied 👍')
    setTimeout(() => {
      setAlert('')
    }, 1000)
  }

  const slugifiedInput = slugify(input)

  return (
    <div className="max-w-2xl my-4 mx-auto">
      <h1 className="text-xl mb-3">Slugify</h1>
      <label htmlFor="input" className="block mb-1">
        Enter some string to slugify
      </label>

      <input
        type="text"
        placeholder="Enter string"
        id="input"
        className="block border py-1 px-2 w-[230px]"
        value={input}
        onChange={handleInputChange}
      />

      {slugifiedInput && (
        <section className="mt-4 flex items-center">
          <div className="text-green-800 mr-3">{slugifiedInput}</div>
          <button
            className="text-sm bg-gray-200 border py-1 px-3 hover:bg-gray-300"
            onClick={handleCopyToClipboard}
          >
            {alert ? alert : 'Copy text'}
          </button>
        </section>
      )}
    </div>
  )
}

export default App
