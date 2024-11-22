import React from 'react';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  const handleOverlayClick = (e) => {
    // Close the modal if the user clicks on the overlay (not the modal content)
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 overflow-auto md:pt-[240px] sm:pt-[200px] lg:pt-[250px] xl:pt-[20px]"
      onClick={handleOverlayClick}
    >
      <div className="bg-white rounded-lg shadow-lg w-3/4 sm:w-1/2 p-6 relative">
        {/* <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 hover:text-gray-900"
        >
          &times;
        </button> */}
        {children}
      </div>
    </div>
  );
};

export default Modal;
