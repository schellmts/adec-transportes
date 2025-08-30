import React from "react";

type ButtonProps = {
  text: string;
  onClick?: () => void;
};

export default function ButtonReserva({ text, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className="bg-dark text-[#f2f2f2] w-full px-3 py-2 rounded-lg mt-5 cursor-pointer font-semibold"
    >
      {text}
    </button>
  );
}
