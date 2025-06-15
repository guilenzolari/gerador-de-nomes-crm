import React from "react";
import "./ToastContainer.css";

const Toast = ({ message, show }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="toast-container">
      <div className="toast-message">{message}</div>
    </div>
  );
};

export default Toast;