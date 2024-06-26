import React, { useState } from 'react'
import data from './data.json'
import './App.css'
const FaqComponent = () => {

  const[isOpen,setOpen] = useState(0);

  return (
    <div>
     
      <div style={{display:'flex', justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
        {data.map((item, index) => (
          <div key={index}>

              <div className='que-box'>
                  {JSON.stringify(data[index].question)}
                  <button>{'> '}</button>
              </div>
                <div className='answer-box'>
                {JSON.stringify(data[index].answer)}
                </div>
            </div>
          ))}
        </div>
    </div>
  )
}

export default FaqComponent