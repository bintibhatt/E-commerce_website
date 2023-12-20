import React, { useState } from "react";
import data from "../../json/data.json"; // Adjust the path based on your project structure

function AddToProfile() {
  // State to hold the input value, category, and JSON data
  const [inputValue, setInputValue] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(""); // Add state for category
  const [jsonData, setJsonData] = useState(data);

  // Function to handle changes in the input field
  function handleInputChange(event) {
    setInputValue(event.target.value);
  }

  // Function to handle category changes
  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  // Function to handle form submission
  function handleSubmit(event) {
    event.preventDefault();

    // Create a copy of the existing JSON data
    const newData = [...jsonData];

    // Add the new value to the data with the selected category
    newData.push({ key: inputValue, category: selectedCategory });

    // Update the state with the new data
    setJsonData(newData);

    // Clear the input field and category
    setInputValue("");
    setSelectedCategory("");
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Value:
          <input type="text" value={inputValue} onChange={handleInputChange} />
        </label>
        <label>
          Category:
          <input
            type="text"
            value={selectedCategory}
            onChange={handleCategoryChange}
          />
        </label>
        <button type="submit">Add Value</button>
      </form>

      <ul>
        {/* Display the list of values from the JSON data */}
        {jsonData.map((item, index) => (
          <li key={index}>
            {item.key} - Category: {item.category}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AddToProfile;
