import React, { useState, useEffect, useRef } from "react";
import DropdownContent from "../DropdownContent/DropdownContent";
import DropdownButton from "../DropdownButton/DropdownButton";
import "./Dropdown.css";

const Dropdown = ({ buttonText, content, selectedValue }) => {
  const [open, setOpen] = useState(false);
  const toggleDropdown = () => setOpen((open) => !open);
  const dropdownRef = useRef();

  useEffect(() => {
    const handler = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);

  return (
    <div className="dropdown" ref={dropdownRef}>
      <DropdownButton toggle={toggleDropdown} open={open}>
        {selectedValue || buttonText}
      </DropdownButton>
      <DropdownContent open={open}>{content}</DropdownContent>
    </div>
  );
};

export default Dropdown;
