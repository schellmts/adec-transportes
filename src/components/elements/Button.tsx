import React from "react";

type ButtonProps = {
  text: string;
  onClick?: () => void;
};

export default function Button({ text, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className="bg-dark text-[#f2f2f2] px-4 py-3 rounded-lg mt-5 cursor-pointer"
    >
      {text}
    </button>
  );
}
