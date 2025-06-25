import React from 'react';
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import "./DropdownButton.css"
import dados from "../../../../dados.json"

const DropdownButton = ({ children, open, toggle }) => {

  function isJsonKey(text) {
    const upperText = String(text).toUpperCase();
    const upperKeys = Object.keys(dados).map(k => k.toUpperCase())

    return upperKeys.includes(upperText)
  }

  const isKey = isJsonKey(children)

  return (
    <div 
        onClick={toggle} 
        className={`dropdown-btn ${open ? "button-open" : null} ${isKey ? "textGray": ""}`}>
      {children}
      <span className='toggle-icon'>
        {open ? <FaChevronUp/> : <FaChevronDown />}
      </span>
    </div>
  );
};

export default DropdownButton;
