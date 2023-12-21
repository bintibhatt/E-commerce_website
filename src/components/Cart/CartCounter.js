import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ClearIcon from "@mui/icons-material/Clear";
import { useProduct } from "../Products/ProductContext";

export default function CartCounter({ pId }) {
  const { productCart, setProductCart } = useProduct();
  const [count, setCount] = useState(0);

  function addCount() {
    setCount(count + 1);
    console.log("After adding:", productCart, count);
  }

  function subtractCount() {
    const newCount = Math.max(count - 1, 0);
    console.log("After subtracting:", newCount);
  }

  function clearCount() {
    setCount(0);
    setProductCart({
      ...productCart,
      productCount: 0,
    });
    console.log("After clearing:", 0);
  }

  return (
    <Box
      sx={{
        color: "black",
        display: "flex",
        flexDirection: "column",
        "& > *": {
          marginBottom: 2,
        },
        "& .MuiBadge-root": {
          marginRight: 4,
        },
      }}
    >
      <ButtonGroup>
        <Button
          aria-label="reduce"
          onClick={subtractCount}
          style={{ color: "black", border: "1px solid black" }}
        >
          <RemoveIcon fontSize="small" />
        </Button>
        <Button disabled style={{ color: "black", border: "1px solid black" }}>
          {count}
        </Button>
        <Button
          aria-label="increase"
          onClick={addCount}
          style={{ color: "black", border: "1px solid black" }}
        >
          <AddIcon fontSize="small" />
        </Button>
        <Button
          aria-label="increase"
          onClick={clearCount}
          style={{ color: "black", border: "1px solid black" }}
        >
          <ClearIcon fontSize="small" />
        </Button>
      </ButtonGroup>
    </Box>
  );
}
