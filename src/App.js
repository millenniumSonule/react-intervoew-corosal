import React from 'react'
import './App.css'
import data from './data.json'

const App = () => {
  
  return (
    <div>
        {data.map((item,index) => (
          <div key={index}>
            {item.email}
          </div>
        ))}
    </div>
  )
}

export default App