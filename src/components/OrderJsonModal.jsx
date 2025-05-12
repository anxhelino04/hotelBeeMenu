import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  useTheme,
} from "@mui/material";

const OrderJsonModal = ({ open, onClose, jsonData }) => {
  const theme = useTheme();

  const jsonString = JSON.stringify(jsonData, null, 2);

  const handleCopy = () => {
    navigator.clipboard.writeText(jsonString);
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle>Generated Order JSON</DialogTitle>
      <DialogContent>
        <TextField
          multiline
          fullWidth
          minRows={10}
          value={jsonString}
          sx={{ outline: "none" }}
        />
      </DialogContent>
      <DialogActions>
        <Button sx={{ color: theme.palette.main.primary }} onClick={handleCopy}>
          Copy JSON
        </Button>
        <Button sx={{ color: theme.palette.main.primary }} onClick={onClose}>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default OrderJsonModal;
