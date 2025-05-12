import { Box, Typography, useTheme } from "@mui/material";

const EmptyCartCard = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        border: (theme) => `1px solid ${theme.palette.main.primary}`,
        borderRadius: 2,
        backgroundColor: (theme) => theme.palette.background.paper,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        flex: 2,
        minHeight: 500,
      }}>
      <Typography
        variant="h6"
        color={theme.palette.main.primary}
        sx={{ fontWeight: 500 }}>
        No items in your order yet.
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
        Click on a product to add it to your order.
      </Typography>
    </Box>
  );
};

export default EmptyCartCard;
