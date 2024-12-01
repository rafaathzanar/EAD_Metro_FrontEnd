/* eslint-disable no-undef */
import React, { useState, useEffect } from "react";
import { ArrowLeftCircleIcon } from "@heroicons/react/24/solid";
import Dropdown from "../Dropdown";
import Table from "./table";
import Modal from "../Modal/index.js";
import Modalcontent from "./modalcontent.js";
import EditModelContent from "./editModelContent.js";
import * as ApiRoutes from "../../apiroutes.js";
import axios from "axios";

function InventoryStockList() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [iseditModelopen, setIseditModelopen] = useState(false);
  const [stockList, setStockList] = useState([]);
  const [originalStockList, setOriginalStockList] = useState([]);
  const [itemData, setItemData] = useState([]);
  const [catagoires, setCatagoires] = useState([]);
  const [changehappen, setChangehappen] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => {
    setChangehappen(!changehappen);
    setIsModalOpen(false)
  };
  const closeEditModel = () => {
    setChangehappen(!changehappen);
    setIseditModelopen(false)
  };

  const handleDropdownSelect = (selectedOption) => {
    // Filter the stock list based on the selected option
    const filteredStockList = originalStockList.filter((item) => item.name === selectedOption.name);
    setStockList(filteredStockList);
  };

  const handleDropdownSelectforcategory = (selectedOption) => {
    // Filter the stock list based on the selected option
    
    const filteredStockList = originalStockList.filter((item) => item.category === selectedOption.name);
    setStockList(filteredStockList);
  };

  useEffect(() => {
    axios.get(ApiRoutes.GET_ALL_PRODUCTS).then((response) => {
      const stockList = response?.data;
      setStockList(stockList);
      setOriginalStockList(stockList);

      const seenNames = new Set(); 
      const itemData = stockList
        .filter((item) => {
          if (seenNames.has(item.name)) {
            return false; 
          }
          seenNames.add(item.name);
          return true;
        })
        .map((item) => ({
          id: item.id,
          name: item.name,
        }));

      setItemData(itemData);

      //get differnet types of cataogries with id
      const seenCatagoires = new Set();
      const catagoires = stockList
        .filter((item) => {
          if (seenCatagoires.has(item.category)) {
            return false;
          }
          seenCatagoires.add(item.category);
          return true;
        })
        .map((item) => ({
          id: item.id,
          name : item.category,
        }));
      setCatagoires(catagoires);
    });
  }, [changehappen]); //get all products


  const handleEdit = (product) => {
    console.log("Edit product:", product);
    setEditingProduct(product);
    setIseditModelopen(true);
  };

  const handleDelete = async(productId) => {
    console.log("Delete product ID:", productId);

    try {
      const response = await axios.delete(`${ApiRoutes.DELETE_PRODUCT}?id=${productId}`);
      console.log("Delete product response:", response);
      setChangehappen(!changehappen);
    } catch (error) {
      console.error("Error deleting product:", error);    
    }
  };



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
        <div className="w-full lg:w-64 sm:w-48">
          <Dropdown
            head="Items"
            selections={itemData}
            onSelect={handleDropdownSelect}
            onclosehappen={() => setStockList(originalStockList)} 
            />
        </div>

        {/* Dropdown for Categories */}
        <div className="w-full lg:w-64 sm:w-48">
          <Dropdown
            head="Categories"
            selections={catagoires}
            onSelect={handleDropdownSelectforcategory}
            onclosehappen={() => setStockList(originalStockList)} 
          />
        </div>

      </div>
      <Table
        stockList={stockList}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <Modalcontent
          closeModal={closeModal}
          dropdownSelections={catagoires}
        />
      </Modal>
      <Modal isOpen={iseditModelopen} onClose={closeEditModel}>
        <EditModelContent
          product={editingProduct}
          onclose={closeEditModel}
          dropdownSelections={catagoires}
        />
      </Modal>
    </div>
  );
}

export default InventoryStockList;
