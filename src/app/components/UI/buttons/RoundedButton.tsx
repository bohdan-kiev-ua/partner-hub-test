import React from "react";

type RoundedButtonProps = {
  text: string;
  color?: string;
};

const RoundedButton = ({ text, color }: RoundedButtonProps) => {  
  return (
    <button
      className={`w-full h-full flex justify-center items-center rounded-88px ${
        color || "bg-blue1000"
      } text-white text-sm font-semibold font-inter`}
    >
      {text}
    </button>
  );
};

export default RoundedButton;
