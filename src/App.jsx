import React, { useMemo, useState } from "react";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import Home from "./pages/Home";
import { OrderProvider } from "./hooks/useOrder";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: darkMode ? "dark" : "light",
          main: {
            primary: "#FF5722",
            secondary: darkMode === true ? "#ffffff" : "#121212",
          },

          background: {
            paper: darkMode === false ? "#fbfbfb" : "#1e1e1e",
            main: darkMode === false ? "#ffffff" : "#121212",
          },
          border: {
            main: darkMode === false ? "#0000001a" : "#ffffff1a",
          },
        },
        typography: {
          fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
          h5: {
            fontWeight: 700,
            fontSize: "1.5rem",
            lineHeight: 1.3,
            textTransform: "uppercase",
            letterSpacing: "1.2px",
          },
          h6: {
            fontWeight: 600,
          },
          h7: {
            fontWeight: 700,
            color: "#FF5722",
          },
        },
        components: {
          MuiOutlinedInput: {
            styleOverrides: {
              root: {
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#FF5722",
                },
              },
            },
          },
        },
      }),
    [darkMode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <OrderProvider>
        <Home
          darkMode={darkMode}
          toggleDarkMode={() => setDarkMode((prev) => !prev)}
        />
      </OrderProvider>
    </ThemeProvider>
  );
}

export default App;
