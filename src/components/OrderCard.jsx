import React, { useState } from "react";
import { useOrder } from "../hooks/useOrder";
import {
  Box,
  Typography,
  List,
  ListItem,
  IconButton,
  Divider,
  TextField,
  Button,
  Card,
} from "@mui/material";
import { Add, Remove, Delete } from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";
import RecommendedProducts from "./RecommendedProducts";
import OrderJsonModal from "./OrderJsonModal";
import EmptyCartCard from "./EmptyCartCard";

const OrderCard = () => {
  const theme = useTheme();
  const {
    order,
    addProduct,
    removeProduct,
    updateProductQuantity,
    updateNote,
    setOrderNote,
    clearOrder,
  } = useOrder();
  const orderItems = order.products;
  const totalAmount = orderItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const formatOrderForSubmission = (order) => {
    return {
      ...order,
      products: order.products.map(({ id, price, quantity, note }) => ({
        id,
        price,
        quantity,
        note: note || "",
      })),
    };
  };

  const [openJSONModal, setOpenJSONModal] = useState(false);
  const [jsonData, setJsonData] = useState({});
  return orderItems.length === 0 ? (
    <EmptyCartCard />
  ) : (
    <Card
      sx={{
        mb: 4,
        borderRadius: 3,
        flex: 2,
        overflow: "hidden",
        border: `1px solid ${theme.palette.main.primary}`,
        display: "flex",
        flexDirection: "column",
      }}>
      <Box sx={{ p: 2, bgcolor: theme.palette.main.primary, color: "white" }}>
        <Typography variant="h6" sx={{ textAlign: "center" }}>
          Your Order
        </Typography>
      </Box>

      <Box sx={{ p: 2 }}>
        <List sx={{ width: "100%", p: 0 }}>
          {orderItems.map((item, index) => (
            <Box key={item.id}>
              {index > 0 && (
                <Divider
                  component="li"
                  sx={{
                    borderColor: theme.palette.border.main,
                  }}
                />
              )}
              <ListItem sx={{ py: 2, px: 0 }}>
                <Box
                  sx={{
                    flex: 1,
                    display: "flex",
                    gap: 1,
                    alignItems: "center",
                  }}>
                  <Typography variant="h7" color="text.secondary">
                    {item.name}
                  </Typography>
                  <Typography variant="h7">{item.price} ALL</Typography>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    border: `1px solid ${theme.palette.border.main}`,
                    background: theme.palette.background.main,
                    borderRadius: 1,
                  }}>
                  <IconButton
                    size="small"
                    onClick={() => updateProductQuantity(item.id, -1)}>
                    <Remove fontSize="small" />
                  </IconButton>
                  <Typography sx={{ px: 1 }}>{item.quantity}</Typography>
                  <IconButton
                    size="small"
                    onClick={() => updateProductQuantity(item.id, 1)}>
                    <Add fontSize="small" />
                  </IconButton>
                </Box>
                <IconButton
                  size="small"
                  sx={{ color: theme.palette.main.primary }}
                  onClick={() => removeProduct(item.id)}>
                  <Delete fontSize="small" />
                </IconButton>
              </ListItem>

              <ListItem sx={{ pt: 0, px: 0 }}>
                <TextField
                  fullWidth
                  placeholder="Add note (optional)"
                  //   variant="outlined"
                  size="small"
                  onChange={(e) => updateNote(item.id, e.target.value)}
                />
              </ListItem>
            </Box>
          ))}
        </List>

        <Divider
          sx={{
            my: 2,
            borderColor: theme.palette.border.main,
          }}
        />

        <Box sx={{ mb: 3, gap: 2, display: "flex", flexDirection: "column" }}>
          <Typography variant="h7" color="text.secondary">
            Order Note
          </Typography>
          <TextField
            fullWidth
            multiline
            rows={2}
            variant="outlined"
            placeholder="Add note (optional)"
            onChange={(e) => setOrderNote(e.target.value)}
          />
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 2,
          }}>
          <Typography variant="h6">Total:</Typography>
          <Typography variant="h6" sx={{ color: theme.palette.main.primary }}>
            {totalAmount} ALL
          </Typography>
        </Box>

        <Button
          variant="contained"
          fullWidth
          size="large"
          onClick={() => {
            const filteredOrder = formatOrderForSubmission(order);
            setJsonData(filteredOrder);
            setOpenJSONModal(true);
          }}
          sx={{
            textTransform: "none",
            fontWeight: 600,
            mt: 1,
            py: 1.5,
            mb: 2,
            borderRadius: 30,
            bgcolor: theme.palette.main.primary,
            color: "#ffffff",
            "&:hover": {
              opacity: 0.8,
            },
          }}>
          Submit Order
        </Button>
        <Button
          variant="outlined"
          fullWidth
          size="small"
          sx={{
            textTransform: "none",
            fontWeight: 600,
            mb: 2,
            py: 1,
            borderRadius: 30,
            color: theme.palette.main.primary,
            borderColor: theme.palette.main.primary,
            background: theme.palette.background.main,
            "&:hover": {
              background: theme.palette.action.hover,
            },
          }}
          onClick={clearOrder}>
          Clear Order
        </Button>
      </Box>
      <RecommendedProducts orderItems={orderItems} addProduct={addProduct} />
      <OrderJsonModal
        open={openJSONModal}
        onClose={() => setOpenJSONModal(false)}
        jsonData={jsonData}
      />
    </Card>
  );
};

export default OrderCard;
