import React, { useState } from 'react';
import data from './data.json';
import './App.css';

const FaqComponent = () => {
  const [isOpen, setOpen] = useState(null);

  const openAccordion = (index) => {
    setOpen(isOpen === index ? null : index);
  };

  return (
    <div className="container">
      <div className="faq-wrapper">
        {data.map((item, index) => (
          <div key={index} className="faq-item">
            <div className='que-box' onClick={() => openAccordion(index)}>
              {item.question}
              <button className="toggle-button">{isOpen === index ? '▲' : '▼'}</button>
            </div>
            {index === isOpen && (
              <div className='answer-box'>
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqComponent;
