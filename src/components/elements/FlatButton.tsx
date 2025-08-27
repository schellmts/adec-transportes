import React from "react";

type ButtonProps = {
  text: string;
  onClick?: () => void;
  paddingX: number;
  paddingY: number
};

export default function FlatButton({ text, onClick, paddingX, paddingY }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`bg-transparent border border-[#f2f2f2] text-sm hover:bg-[#f2f2f2] hover:text-dark duration-200 text-[#f2f2f2] px-${paddingX} py-${paddingY} rounded-lg mt-5 cursor-pointer`}
    >
      {text}
    </button>
  );
}
