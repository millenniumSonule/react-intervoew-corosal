import React from 'react'
import './App.css'
import data from './data.json'

const App = () => {
  
  return (
    <div>
      {JSON.stringify(data)}
    </div>
  )
}

export default App