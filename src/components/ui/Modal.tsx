import React, { useState } from "react";

type ModalProps = {
  title: string;
  message: string;
  showModal: boolean;
  setShowModal: any;
};

const Modal: React.FC<ModalProps> = ({
  title,
  message,
  showModal,
  setShowModal,
}) => {
  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="bg-gray-100 p-4 min-h-screen">
      {showModal && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-lg w-full max-w-md p-6 text-center">
            <div className="flex items-center justify-center w-16 h-16 mx-auto bg-green-100 text-green-600 rounded-full">
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h2 className="mt-4 text-xl font-semibold text-gray-800">
              {title}
            </h2>
            <p className="mt-2 text-gray-600">{message}</p>
            <button
              onClick={closeModal}
              className="mt-4 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
            >
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
