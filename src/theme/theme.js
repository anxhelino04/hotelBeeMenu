import { createTheme } from "@mui/material";

const getAppTheme = (darkMode) => {
  const primaryColor = "#FF5722";
  const lightText = "#ffffff";
  const darkText = "#121212";
  const lightPaper = "#fafafa	";
  const darkPaper = "#1e1e1e";
  const lightMain = "#ffffff";
  const darkMain = "#121212";
  const lightBorder = "#0000001a";
  const darkBorder = "#ffffff1a";

  return createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
      main: {
        primary: primaryColor,
        secondary: darkMode ? lightText : darkText,
      },
      background: {
        paper: darkMode ? darkPaper : lightPaper,
        main: darkMode ? darkMain : lightMain,
      },
      border: {
        main: darkMode ? darkBorder : lightBorder,
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
        color: primaryColor,
      },
    },
    components: {
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: primaryColor,
            },
          },
        },
      },
    },
  });
};

export default getAppTheme;
