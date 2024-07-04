import React from 'react';

interface SubmitButtonProps {
  onClick: () => void;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ onClick }) => (
  <button className='bg-purple-200 rounded-lg' onClick={onClick}>Send to PayU</button>
);

export default SubmitButton;
