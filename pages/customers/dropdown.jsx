import React, { useState } from "react";

const DropdownExample = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <label htmlFor="orderStatus"></label>
      <select
        id="orderStatus"
        value={selectedOption}
        onChange={handleSelectChange}
        className={`border-none rounded-md ${
          selectedOption === "Pending"
            ? "bg-yellow-400 text-white"
            : selectedOption === "Delivered"
            ? "bg-green-300 text-white"
            : selectedOption === "Shipped"
            ? "bg-purple-300 text-white"
            : "bg-white text-black"
        }`}
      >
        <option value="">Provide status </option>
        <option value="Pending">Pending </option>
        <option value="Delivered">Delivered</option>
        <option value="Shipped">Shipped</option>
      </select>
    </div>
  );
};

export default DropdownExample;
