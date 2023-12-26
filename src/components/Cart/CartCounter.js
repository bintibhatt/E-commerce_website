import * as React from "react";
import Box from "@mui/material/Box";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ClearIcon from "@mui/icons-material/Clear";
import { useProduct } from "../Products/ProductContext";

export default function CartCounter({ pId }) {
  const { productCart, setProductCart } = useProduct();

  function addCount() {
    if (!productCart.find((element) => element.id === pId)) {
      setProductCart((prev) => [...prev, { id: pId, productCount: 1 }]);
    } else {
      setProductCart((prev) =>
        prev.map((element) =>
          element.id === pId
            ? { ...element, productCount: element.productCount + 1 }
            : element
        )
      );
    }
  }

  function subtractCount() {
    productCart.forEach((element) => {
      if (element.id === pId && element.productCount > 0) {
        element.productCount--;
        setProductCart([...productCart]);
      }
    });
  }

  function clearCount() {
    productCart.forEach((element) => {
      if (element.id === pId) {
        element.productCount = 0;
        setProductCart([...productCart]);
      }
    });
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
          {productCart.find((item) => item.id === pId)?.productCount || 0}
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
