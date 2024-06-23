import React from 'react'
import data from './data.json'
import './App.css'
const FaqComponent = () => {
  return (
    <div>
     
      <div style={{display:'flex', justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
        {data.map((item, index) => (
          <div key={index}>
              {/* <p>{JSON.stringify(data[index].answer)}</p> */}
              {/* <p>{JSON.stringify(data[index].question)}</p> */}
              <div className='que-box'>
                  {JSON.stringify(data[index].question)}
              </div>
            </div>
          ))}
        </div>
    </div>
  )
}

export default FaqComponent