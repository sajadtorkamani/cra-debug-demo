import React, { useEffect } from 'react'
import './App.css'

function App() {
  useEffect(() => {
    console.log('Hey')
  }, [])

  function printSomething() {
    console.log('Hi')
  }

  function printSomethingElse() {
    console.log('Hi 2')
  }

  return (
    <div className="App">
      <p>Hello</p>
    </div>
  )
}

export default App
