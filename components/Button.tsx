import React from "react";

type TButton = {
  onButtonClick: React.MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
};

/**
 * Primary UI component for user interaction
 */
const Button = ({ onButtonClick, children }: TButton) => {
  return (
    <button
      onClick={onButtonClick}
      className="bg-blue-500 text-white font-marugo rounded-xl py-2 px-6"
    >
      {children}
    </button>
  );
};

export default Button;
