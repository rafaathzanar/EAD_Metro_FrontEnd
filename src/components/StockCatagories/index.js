/* eslint-disable no-undef */
import React, { useState } from "react";
import { PlusIcon } from "@heroicons/react/24/solid";
import Modal from "../Modal/index.js";
import TextField from "@mui/material/TextField";
import { Grid2, Box, Button } from "@mui/material";

function StockCategories({ categories }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newCategory, setNewCategory] = useState("");

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const sxSettingTextInput = {
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "orange",
      },
      "&:hover fieldset": {
        borderColor: "darkorange",
      },
      "&.Mui-focused fieldset": {
        borderColor: "orange",
      },
    },
    "& .MuiInputLabel-root": {
      color: "orange",
    },
    "& .MuiInputLabel-root.Mui-focused": {
      color: "darkorange",
    },
  };

  const sxsettingButton = {
    backgroundColor: "orange",
    height: "53px",
    color: "white",
    padding: "10px 20px",
    borderRadius: "4px",
    fontSize: "13px",
    letterSpacing: "0.5px",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    transition: "background-color 0.3s ease",
    "&:hover": {
      backgroundColor: "darkorange",
      boxShadow: "0px 6px 8px rgba(0, 0, 0, 0.15)",
    },
    "&:focus": {
      outline: "none",
      boxShadow: "0px 0px 4px 2px rgba(255, 165, 0, 0.6)", // Highlight on focus
    },
    "&:disabled": {
      backgroundColor: "gray",
      color: "white",
      boxShadow: "none",
    },
  };

  const sxsettingBox = {
    width: "100%",
margin: "auto",
position: "absolute",
top: "50%",
left: "50%",
transform: "translate(-50%, -50%)", // Center horizontally and vertically
padding: "20px",
bgcolor: "background.paper",
borderRadius: "8px",
border: "1px solid orange",
boxShadow: 24,
};

  const handleAddCatagory = () => {
    console.log("New Category:", newCategory);
    // Perform any additional logic here
    closeModal();
  };

  return (
    <div className="bg-gray-100 rounded-3xl p-8 m-4 xl:w-[85rem] w-full mx-auto shadow-lg">
      <div className="flex items-center justify-between mb-6">
        <h2 className="md:text-3xl font-semibold text-gray-800 sm:text-base">
          Categories
        </h2>
        <button
          className="bg-[#f29425] hover:from-orange-400 hover:to-yellow-300 text-white font-semibold py-2 px-4 sm:py-3 sm:px-6 rounded-full shadow-xl transition-transform hover:scale-105 flex items-center"
          onClick={openModal}
        >
          <PlusIcon className="h-5 w-5 sm:h-6 sm:w-6 mr-2" />
          <span className="hidden sm:inline">Add Category</span>
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {categories.map((category, index) => (
          <div
            key={index}
            className="bg-[#FFDEAD] text-[#4F4F4F] h-32 font-semibold text-lg font-sans p-6 rounded-2xl shadow-md flex items-center justify-center hover:shadow-xl hover:scale-105 transition-transform duration-300"
          >
            {category}
          </div>
        ))}
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <Box
           sx={sxsettingBox}
        >
          <Grid2
            container
            spacing={2}
            alignItems="center"
            justifyContent="center"
          >
            <Grid2 xs={12}>
              <TextField
                id="outlined-basic"
                label="Enter Category Name"
                variant="outlined"
                fullWidth
                sx={sxSettingTextInput}
                onChange={(e) => {
                  setNewCategory(e.target.value);
                }}
              />
            </Grid2>

            <Grid2 xs={12} container justifyContent="center">
              <Button
                className="mt-4"
                sx={sxsettingButton}
                onClick={handleAddCatagory}
              >
                Add Category
              </Button>
            </Grid2>
          </Grid2>
        </Box>
      </Modal>
    </div>
  );
}

export default StockCategories;
