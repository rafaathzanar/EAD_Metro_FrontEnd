/* eslint-disable no-undef */
import React, { useState } from "react";
import {
  TextField,
  MenuItem,
  Box,
  Typography,
  IconButton,
  Avatar,
  Grid2,
} from "@mui/material";
import { styled } from "@mui/material/styles";

const Input = styled("input")({
  display: "none",
});

function Modalcontent({ closeModal , onAddItem , dropdownSelections }) {
  const [productName, setProductName] = useState("");
  const [productID, setProductID] = useState("");
  const [category, setCategory] = useState("");
  const [qtyPurchased, setQtyPurchased] = useState("");
  const [unitCost, setUnitCost] = useState("");
  //const [unitPrice, setUnitPrice] = useState("");
  const [supplier, setSupplier] = useState("");
  const [image, setImage] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
    }
  };

  const calculateTotalAmount = () => {
    return qtyPurchased && unitCost ? qtyPurchased * unitCost : 0;
  };

  const handleSubmit = () => {
    const formData = {
      productName,
      productID,
      category,
      qtyPurchased,
      unitCost,
    //  unitPrice,
      supplier,
      image,
    };

    onAddItem(formData);

    closeModal();
  };

  const sxSetting = {
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

  return (
    <div>
      <div className="bg-white rounded-lg p-6 md-mt-10  w-full max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Add New Item
        </h2>
        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6"> */}
        <Grid2 container spacing={3} sx={{ gap: 3 }}>
          {/* Upload Photos Section */}
          <Grid2 size={{ xs: 12, md: 12, lg: 4 }}>
            <Box
              className="flex flex-col items-center"
              sx={{
                border: "1px solid #e0e0e0",
                borderRadius: "8px",
                padding: "24px",
                backgroundColor: "#f5f5f5",
                textAlign: "center",
              }}
            >
              <label htmlFor="imageUpload">
                <Input
                  id="imageUpload"
                  type="file"
                  accept="image/jpeg, image/png"
                  onChange={handleImageUpload}
                />
                <IconButton
                  component="span"
                  sx={{
                    width: {
                      xs: "70px", // 100% width on extra-small screens
                      sm: "60px", // 80% width on small screens
                      md: "100px", // 60% width on medium screens
                      lg: "150px", // 40% width on large screens
                    },
                    height: {
                      xs: "70px", // 100px height on extra-small screens
                      sm: "60px", // 120px height on small screens
                      md: "100px", // 140px height on medium screens
                      lg: "150px", // 160px height on large screens
                    },
                    backgroundColor: "#e0e0e0",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    "&:hover": {
                      backgroundColor: "#d6d6d6",
                    },
                  }}
                >
                  {image ? (
                    <Avatar
                      src={URL.createObjectURL(image)}
                      alt="Uploaded"
                      sx={{
                        width: "100%",
                        height: "100%",
                        borderRadius: "50%",
                        objectFit: "cover",
                      }}
                    />
                  ) : (
                    <Typography variant="h3" color="text.secondary">
                      +
                    </Typography>
                  )}
                </IconButton>
              </label>
              <Typography
                variant="body2"
                sx={{ marginTop: 2, color: "text.secondary" }}
              >
                Allowed formats: JPG, JPEG, PNG
              </Typography>
            </Box>
          </Grid2>
          {/* Input Fields Section */}
          {/* <div className="col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4"> */}
          <Grid2 size={{ xs: 12, md: 12, lg: 8 }}>
            <Grid2 container spacing={2} sx={{ width: "100%" }}>
              <Grid2 size={{ xs: 12, md: 12, lg: 6 }}>
                <TextField
                  label="Enter Product Name"
                  variant="outlined"
                  fullWidth
                  value={productName}
                  onChange={(e) => setProductName(e.target.value)}
                  sx={sxSetting}
                />
              </Grid2>
              <Grid2 size={{ xs: 12, md: 12, lg: 6 }}>
                <TextField
                  label="Enter ID"
                  variant="outlined"
                  fullWidth
                  value={productID}
                  onChange={(e) => setProductID(e.target.value)}
                  sx={sxSetting}
                />
              </Grid2>
              <Grid2 size={{ xs: 12, md: 12, lg: 6 }}>
                <TextField
                  select
                  label="Select Category"
                  variant="outlined"
                  fullWidth
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  sx={sxSetting}
                  >
                  {dropdownSelections.map((option, index) => (
                    <MenuItem key={index} value={option.label}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid2>
              <Grid2 size={{ xs: 12, md: 12, lg: 6 }}>
                <TextField
                  label="Enter Quantity"
                  variant="outlined"
                  fullWidth
                  type="number"
                  value={qtyPurchased}
                  onChange={(e) => setQtyPurchased(Number(e.target.value))}
                  sx={sxSetting}
                />
              </Grid2>

              <Grid2 size={{ xs: 12, md: 12, lg: 6 }}>
                <TextField
                  label="Enter Unit Cost"
                  variant="outlined"
                  fullWidth
                  type="number"
                  value={unitCost}
                  onChange={(e) => setUnitCost(Number(e.target.value))}
                  sx={sxSetting}
                />
              </Grid2>

              <Grid2 size={{ xs: 12, md: 12, lg: 6 }}>
                <TextField
                  label="Total Amount"
                  variant="outlined"
                  fullWidth
                  value={calculateTotalAmount()}
                  InputProps={{
                    readOnly: true,
                  }}
                  sx={sxSetting}
                />
              </Grid2>
              <Grid2 size={{ xs: 12, md: 12, lg: 6 }}>
                <TextField
                  label="Enter Supplier Name"
                  variant="outlined"
                  fullWidth
                  value={supplier}
                  onChange={(e) => setSupplier(e.target.value)}
                  sx={sxSetting}
                />
              </Grid2>

              {/* </div> */}
            </Grid2>
          </Grid2>
        </Grid2>
        {/* </div> */}
      </div>

      <div className="md:mr-6 flex justify-end">
        <button
          onClick={closeModal}
          className="mr-3 mt-4 bg-white border hover:bg-orange-500 text-orange-500 py-2 px-4 rounded hover:text-white"
        >
          Close
        </button>
        <button
          className="mt-4 bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded"
          onClick={handleSubmit}
        >
          Add Item
        </button>
      </div>
    </div>
  );
}

export default Modalcontent;
