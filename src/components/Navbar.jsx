import { useTheme } from "@mui/material/styles";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
  Container,
  InputBase,
  Paper,
} from "@mui/material";
import {
  Search,
  DarkMode,
  LightMode,
  RestaurantMenu,
} from "@mui/icons-material";
import { useOrder } from "../hooks/useOrder";

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const { setSearchQuery } = useOrder();
  const theme = useTheme();
  return (
    <AppBar
      position="static"
      color="default"
      elevation={0}
      sx={{
        bgcolor: theme.palette.main.primary,
        borderBottom: `1px solid ${theme.palette.border.main}`,
      }}>
      <Container sx={{ py: 1 }}>
        <Toolbar
          sx={{
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 2,
            px: 0,
          }}>
          <Box display="flex" alignItems="center">
            <RestaurantMenu sx={{ color: "#ffffff", fontSize: 28 }} />
            <Typography
              variant="h5"
              sx={{
                ml: 1,
                fontWeight: 700,
                display: { xs: "none", sm: "block" },
                color: "#ffffff",
              }}>
              Hotel Bee
            </Typography>
          </Box>

          <Box flex={1} display="flex" justifyContent="center">
            <Paper
              component="form"
              sx={{
                px: 2,
                py: 0.5,
                display: "flex",
                alignItems: "center",
                width: "100%",
                maxWidth: 500,
                borderRadius: 30,
                background: theme.palette.background.main,
                border: `1px solid ${theme.palette.main.primary}`,
                boxShadow: "none",
              }}>
              <IconButton sx={{ color: theme.palette.main.secondary }}>
                <Search />
              </IconButton>
              <InputBase
                sx={{
                  ml: 1,
                  flex: 1,
                  color: theme.palette.main.secondary,
                  "&::placeholder": {
                    color: theme.palette.border.main,
                  },
                }}
                placeholder="Search menu..."
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                }}
              />
            </Paper>
          </Box>

          <Box>
            <IconButton
              onClick={toggleDarkMode}
              sx={{ color: theme.palette.main.secondary }}>
              {darkMode ? <LightMode /> : <DarkMode />}
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
