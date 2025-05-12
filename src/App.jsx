import { useMemo, useState } from "react";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import Home from "./pages/Home";
import { OrderProvider } from "./hooks/useOrder";
import getAppTheme from "./theme/theme";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const theme = useMemo(() => getAppTheme(darkMode), [darkMode]);

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
