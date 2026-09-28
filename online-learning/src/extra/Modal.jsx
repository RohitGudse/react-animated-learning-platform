import React from "react";

const Modal = ({ children, close }) => {
  const handleClose = () => {
    close();
  };

  return (
    <div className="modal">
      <div className="box">
        <button type="button" onClick={handleClose}>
          Close
        </button>

        <div className="modal-content">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;