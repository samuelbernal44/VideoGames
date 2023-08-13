/* eslint-disable react/prop-types */
import { useState } from 'react';
import { MultiSelectOptions } from '../StyledComponent/StyledMultiSelect';

const MultiSelect = ({ label, options, onChange }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleOptionClick = (option) => {
    let newSelectedOptions;
    if (selectedOptions.includes(option)) {
      newSelectedOptions = selectedOptions.filter((o) => o !== option);
    } else {
      newSelectedOptions = [...selectedOptions, option];
    }
    setSelectedOptions(newSelectedOptions);
    onChange(newSelectedOptions);
  };

  return (
    <div>
      <label>{label}: </label>
      <MultiSelectOptions>
        {options.map((option) => (
          <li key={option}>
            <input
              type="checkbox"
              checked={selectedOptions.includes(option)}
              onChange={() => handleOptionClick(option)}
            />
            {option}
          </li>
        ))}
      </MultiSelectOptions>
    </div>
  );
};

export default MultiSelect;
