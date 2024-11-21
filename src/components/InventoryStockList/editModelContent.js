/* eslint-disable no-undef */
import { Grid2, TextField, Typography, Button , MenuItem} from "@mui/material";
import React, { useState } from "react";

function EditModelContent({ onClose, onEditItem, dropdownSelections }) {
  const [productName, setProductName] = useState("");
  const [productID, setProductID] = useState("");
  const [category, setCategory] = useState("");
  const [qtyPurchased, setQtyPurchased] = useState("");
  const [unitPrice, setUnitPrice] = useState("");
  // const [totalAmount, setTotalAmount] = useState("");
  const [supplier, setSupplier] = useState("");
  const [available, setAvailable] = useState("");
  const [stockReturn, setStockReturn] = useState("");

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

  const sxsettingButton = {
    backgroundColor: "orange",
    height: "53px",
    color: "white",
    padding: "10px 20px",
    transition: "background-color 0.3s ease",
    "&:hover": {
      backgroundColor: "darkorange",
      boxShadow: "0px 6px 8px rgba(0, 0, 0, 0.15)",
    },
    "&:focus": {
      outline: "none",
      boxShadow: "0px 0px 4px 2px rgba(255, 165, 0, 0.6)",
    },
    textAlign:"right"
  };

  const handleUpdateProduct = () => {
    const updatedProduct = {
      productName,
      productID,
      category,
      qtyPurchased,
      unitPrice,
      supplier,
      available,
      stockReturn,
    };
    console.log("Updated Product:", updatedProduct);

    onEditItem(updatedProduct);

    onClose();
  };

  //total amount calculation
  const calculateTotalAmount = () => {
    return qtyPurchased && unitPrice ? qtyPurchased * unitPrice : 0;
  };

  return (
    <div className="m-6">
      <Grid2 container spacing={2}>
        <Grid2 size={{ xs: 12, md: 12, lg: 12 }}>
          <Typography variant="h6" gutterBottom textAlign={"center"}>
            Update Product
          </Typography>
        </Grid2>
        <Grid2 size={{ xs: 12, md: 6, lg: 6 }}>
          <TextField
            fullWidth
            label="Product Name"
            variant="outlined"
            value={productName}
            sx={sxSetting}
            onChange={(e) => setProductName(e.target.value)}
          />
        </Grid2>
        <Grid2 size={{ xs: 12, md: 6, lg: 6 }}>
          <TextField
            fullWidth
            label="Product ID"
            variant="outlined"
            value={productID}
            sx={sxSetting}
            onChange={(e) => setProductID(e.target.value)}
          />
        </Grid2>
        <Grid2 size={{ xs: 12, md: 6, lg: 6 }}>
          <TextField
            select
            fullWidth
            label="Category"
            variant="outlined"
            value={category}
            sx={sxSetting}
            onChange={(e) => setCategory(e.target.value)}
          >
            {dropdownSelections.map((option, index) => (
              <MenuItem key={index} value={option.label}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid2>
        <Grid2 size={{ xs: 12, md: 6, lg: 6 }}>
          <TextField
            fullWidth
            label="QTY Purchased"
            variant="outlined"
            value={qtyPurchased}
            sx={sxSetting}
            onChange={(e) => setQtyPurchased(Number(e.target.value))}
          />
        </Grid2>
        <Grid2 size={{ xs: 12, md: 6, lg: 6 }}>
          <TextField
            fullWidth
            label="Unit Price"
            variant="outlined"
            value={unitPrice}
            sx={sxSetting}
            onChange={(e) => setUnitPrice(Number(e.target.value))}
          />
        </Grid2>
        <Grid2 size={{ xs: 12, md: 6, lg: 6 }}>
          <TextField
            fullWidth
            label="Total Amount"
            variant="outlined"
            value={calculateTotalAmount()}
            sx={sxSetting}
          />
        </Grid2>
        <Grid2 size={{ xs: 12, md: 6, lg: 6 }}>
          <TextField
            fullWidth
            label="Supplier"
            variant="outlined"
            value={supplier}
            sx={sxSetting}
            onChange={(e) => setSupplier(e.target.value)}
          />
        </Grid2>
        <Grid2 size={{ xs: 12, md: 6, lg: 6 }}>
          <TextField
            fullWidth
            label="Return"
            variant="outlined"
            value={stockReturn}
            sx={sxSetting}
            onChange={(e) => setStockReturn(Number(e.target.value))}
          />
        </Grid2>
        <Grid2 size={{ xs: 12, md: 6, lg: 9 }}>
          <TextField
            fullWidth
            label="Available"
            variant="outlined"
            value={available}
            sx={sxSetting}
            onChange={(e) => setAvailable(Number(e.target.value))}
          />
        </Grid2>

        <Grid2 size={{ xs: 12, md: 6, lg: 3 }}>
          <Button onClick={handleUpdateProduct} sx={sxsettingButton}>
            Update
          </Button>
        </Grid2>
      </Grid2>
    </div>
  );
}

export default EditModelContent;
