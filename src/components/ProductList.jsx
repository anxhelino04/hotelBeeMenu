import { useMemo } from "react";
import { useOrder } from "../hooks/useOrder";
import { productCardStyle } from "../styles/sharedStyles";
import {
  ListItem,
  ListItemButton,
  Box,
  Typography,
  useTheme,
  List,
} from "@mui/material";
import products from "../data/products.json";
const ProductList = () => {
  const { searchQuery } = useOrder();

  const filteredProducts = useMemo(() => {
    return products.filter((product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [products, searchQuery]);
  const { addProduct } = useOrder();

  const theme = useTheme();

  return (
    <List sx={{ mt: 2 }}>
      {filteredProducts.map((product) => (
        <ListItem key={product.id} disablePadding sx={{ marginBottom: 2 }}>
          <ListItemButton
            onClick={() => addProduct(product)}
            sx={{
              px: 2,
              py: 2,
              ...productCardStyle(theme),
            }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
                mb: 1,
              }}>
              <Typography variant="h6">{product.name}</Typography>
              <Typography variant="body2" color="text.secondary">
                {typeof product.category === "object"
                  ? product.category.name
                  : product.category}
              </Typography>
            </Box>

            <Box sx={{ width: "100%" }}>
              <Typography variant="h7">{product.price} ALL</Typography>
            </Box>
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
};

export default ProductList;
