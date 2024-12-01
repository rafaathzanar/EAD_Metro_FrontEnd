/* eslint-disable no-undef */
import React, { useState, useRef } from 'react';
import { ChevronDownIcon, XMarkIcon } from '@heroicons/react/24/solid';

const Dropdown = ({ head, selections, onSelect , onclosehappen }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTitle, setSelectedTitle] = useState(head); // Manage selected title
  const [isSelected, setIsSelected] = useState(false); // Track if an item is selected
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  const handleSelection = (item) => {
    setSelectedTitle(item.name); // Update the title to the selected option
    setIsSelected(true); // Mark item as selected
    setIsOpen(false); // Close the dropdown
    onSelect(item); // Notify the parent component of the selected option
  };

  const clearSelection = () => {
    setSelectedTitle(head); // Reset to the initial header
    setIsSelected(false); // Mark item as not selected
    setIsOpen(false); // Close the dropdown
  };

  React.useEffect(() => {
    document.addEventListener('mousedown', closeDropdown);
    return () => {
      document.removeEventListener('mousedown', closeDropdown);
    };
  }, []);

  return (
    <div className="relative inline-block w-full max-w-xs" ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className="w-full text-white bg-orange-500 hover:bg-orange-600 font-medium rounded-lg text-sm px-5 py-2.5 flex items-center justify-between dark:bg-orange-600 dark:hover:bg-orange-500"
        type="button"
        aria-expanded={isOpen}
      >
        <span>{selectedTitle}</span>
        {isSelected ? (
          <XMarkIcon
            className="h-4 w-4 ml-2"
            onClick={(e) => {
              e.stopPropagation(); // Prevent dropdown from toggling
              clearSelection();
              onclosehappen();
            }}
          />
        ) : (
          <ChevronDownIcon className="h-4 w-4 ml-2" />
        )}
      </button>

      <div
        className={`z-20 ${
          isOpen ? 'block' : 'hidden'
        } absolute left-0 mt-2 bg-white divide-y divide-gray-100 rounded-lg shadow w-full dark:bg-gray-700`}
      >
        <ul
          className="py-2 text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="dropdownButton"
        >
          {selections.map((item, index) => (
            <li key={index}>
              <button
                onClick={() => handleSelection(item)} // Handle selection
                className="block w-full text-left px-4 py-2 hover:bg-orange-200 hover:text-white dark:hover:bg-gray-600 dark:hover:text-white"
              >
                {item.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dropdown;
