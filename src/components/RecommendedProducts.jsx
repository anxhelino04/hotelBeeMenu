import { Box, Typography, Card, CardContent } from "@mui/material";
import products from "../data/products.json";
import { useTheme } from "@mui/material/styles";
import { productCardStyle } from "../styles/sharedStyles";

const RecommendedProducts = ({ orderItems, addProduct }) => {
  const theme = useTheme();
  const cartCategories = orderItems.map((item) => item.category.name);
  const suggestionCategory = cartCategories.includes("Food")
    ? "Drinks"
    : "Food";
  const suggestedItems = products.filter(
    (product) => product.category.name == suggestionCategory
  );

  return (
    <Box sx={{ m: 2 }}>
      <Typography variant="h6">Recommended for you</Typography>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: 2,
          mt: 1,
        }}>
        {suggestedItems.map((product) => (
          <Card
            key={product.id}
            onClick={() => addProduct(product)}
            sx={{
              px: 1,
              py: 1,
              ...productCardStyle(theme),
            }}>
            <CardContent>
              <Typography variant="h6">{product.name}</Typography>
              <Typography variant="h7">{product.price} ALL</Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default RecommendedProducts;
