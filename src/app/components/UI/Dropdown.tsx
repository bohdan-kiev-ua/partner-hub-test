import React from "react";

type DropdownProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Dropdown({ children, className }: DropdownProps) {
  return (
    <ul
      className={`flex flex-col gap-4 w-220px rounded-2xl shadow-cardShadow bg-white ${className}`}
    >
      {children}
    </ul>
  );
}
