/* eslint-disable no-undef */
import React, { useState , useEffect } from "react";
import { ArrowLeftCircleIcon } from "@heroicons/react/24/solid";
import Dropdown from "../Dropdown";
import Table from "./table";
import Modal from "../Modal/index.js";
import Modalcontent from "./modalcontent.js";
import EditModelContent from "./editModelContent.js";

function InventoryStockList() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [items, setItems] = useState([]);
  const [iseditModelopen, setIseditModelopen] = useState(false);


  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const closeEditModel = () => setIseditModelopen(false);

  const dropdownSelections = [
    { label: "All", href: "#" },
    { label: "Iphone 13 pro", href: "#" },
    { label: "Castify Cover", href: "#" },
    { label: "20W charger", href: "#" },
    { label: "Airpods AA", href: "#" },
  ];

  const dropdownSelections2 = [
    { label: "All", href: "#" },
    { label: "Phones", href: "#" },
    { label: "Tablets", href: "#" },
    { label: "Laptop", href: "#" },
    { label: "Monitor", href: "#" },
  ];

  const handleDropdownSelect = (selectedOption) => {
    console.log("Selected Option:", selectedOption);
    // Perform any additional logic here
  };

  const TempStock = [
    {
      id: 1,
      userName: "Product A",
      totalProduct: "P001",
      offer: "Category 1",
      qtyPurchased: 50,
      unitPrice: 10.5,
      totalAmount: 525,
      supplier: "Supplier A",
      return: 12,
      available: 40,
    },
    {
      id: 2,
      userName: "Product B",
      totalProduct: "P002",
      offer: "Category 2",
      qtyPurchased: 100,
      unitPrice: 12.0,
      totalAmount: 1200,
      supplier: "Supplier B",
      return: 12,
      available: 90,
    },
    {
      id: 3,
      userName: "Product C",
      totalProduct: "P003",
      offer: "Category 3",
      qtyPurchased: 200,
      unitPrice: 8.75,
      totalAmount: 1750,
      supplier: "Supplier C",
      return: 12,
      available: 180,
    },
    {
      id: 4,
      userName: "Product D",
      totalProduct: "P004",
      offer: "Category 1",
      qtyPurchased: 150,
      unitPrice: 9.5,
      totalAmount: 1425,
      supplier: "Supplier A",
      return: 34,
      available: 140,
    },
    {
      id: 5,
      userName: "Product E",
      totalProduct: "P005",
      offer: "Category 2",
      qtyPurchased: 120,
      unitPrice: 11.0,
      totalAmount: 1320,
      supplier: "Supplier B",
      return: 46,
      available: 110,
    },
  ];

  const handleAddItem = (newItem) => {
    setItems((prevItems) => [...prevItems, newItem]);
    console.log("New Item Added:", newItem);
  };

  useEffect(() => {
    console.log("Updated Items:", items);
  }, [items]); // This runs whenever `items` is updated


  const handleEdit = (product) => {
    console.log("Edit product:", product);
    setIseditModelopen(true);
  };

  const handleDelete = (productId) => {
    console.log("Delete product ID:", productId);
  };

  const handleEditItem = (updatedItem) => {
    console.log("Updated Item:", updatedItem);
    setIseditModelopen(false);
  }

  return (
    <div className="bg-gray-100 rounded-3xl p-8 m-4 xl:w-[85rem] w-full mx-auto shadow-lg">
      <div className="flex items-center justify-between mb-6">
        <h2 className="md:text-3xl font-semibold text-gray-800 sm:text-base">
          Stock List
        </h2>
        <button
          className="bg-[#f29425] hover:from-orange-400 hover:to-yellow-300 text-white font-semibold py-2 px-4 sm:py-3 sm:px-6 rounded-full shadow-xl transition-transform hover:scale-105 flex items-center"
          onClick={openModal}
        >
          <ArrowLeftCircleIcon className="h-5 w-5 sm:h-6 sm:w-6 mr-2" />
          <span className="hidden sm:inline">update Stock List</span>
        </button>
      </div>
      <div className="flex flex-wrap items-center gap-4 xl:pl-10 mb-6">
        {/* Dropdown for Items */}
        <div className="w-full sm:w-48">
          <Dropdown
            head="Items"
            selections={dropdownSelections}
            onSelect={handleDropdownSelect}
          />
        </div>

        {/* Dropdown for Categories */}
        <div className="w-full sm:w-48">
          <Dropdown
            head="Categories"
            selections={dropdownSelections2}
            onSelect={handleDropdownSelect}
          />
        </div>

        {/* Search Input */}
        <input
          type="text"
          placeholder="Search..."
          className="w-full sm:w-80  bg-white border border-orange-300 rounded-md px-4 py-2 shadow-sm focus:outline-none focus:ring-1 focus:ring-orange-400 focus:border-orange-400"
        />
      </div>
      <Table
        stockList={TempStock}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
      <Modal isOpen={isModalOpen} onClose={closeModal}>
       <Modalcontent closeModal={closeModal} onAddItem={handleAddItem} dropdownSelections={dropdownSelections2}/>
      </Modal>
      <Modal isOpen={iseditModelopen} onClose={closeEditModel}>
        <EditModelContent onClose={closeEditModel} onEditItem={handleEditItem} dropdownSelections={dropdownSelections2}/>
      </Modal>
    </div>
  );
}

export default InventoryStockList;
