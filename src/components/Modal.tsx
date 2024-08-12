// src/components/Modal.tsx
import React from 'react';

interface ModalProps {
  title: string;
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ title, isOpen, onClose, children }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white w-1/3 rounded p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl">{title}</h2>
          <button onClick={onClose}>✖️</button>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
