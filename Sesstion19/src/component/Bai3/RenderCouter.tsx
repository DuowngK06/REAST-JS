import React, { useRef, useState, type ChangeEvent } from "react";

export const RenderCouter = () => {
  const [value, setValue] = useState("");
  const countRef = useRef(0);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    countRef.current++;
  };

  return (
    <>
      <h3>Component Render Counter</h3>
      <label htmlFor="">Input: </label>
      <input type="text" name={value} onChange={handleChange} />
      <p>Component da render: {countRef.current} lan</p>
    </>
  );
};