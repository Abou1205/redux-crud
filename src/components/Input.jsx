import React from "react";

const Input = ({ value, placeholder, id, name, type, onChange }) => {
  return (
    <input
      className="h-10 w-full border rounded-md p-2 mt-3 outline-none"
      value={value}
      placeholder={placeholder}
      name={name}
      type={type}
      id={id}
      onChange={onChange}
    />
  );
};

export default Input;
