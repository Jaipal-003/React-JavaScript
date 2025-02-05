import React, { useId } from "react";

const Input = React.forwardRef(function Input(
  { label, type = "text", className = "", ...props },
  ref
) {
  const id = useId()
  return (
    <div className="w-full">
      {label && 
        <label className="inline-block md-1 pl-1" htmlFor={id}>
          {label}
        </label>
      
      }
    </div> 
  );
});
export default Input;
