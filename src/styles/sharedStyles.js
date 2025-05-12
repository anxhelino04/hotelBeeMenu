
export const productCardStyle = (theme) => ({
  backgroundColor: theme.palette.background.main,
  border: `1px solid ${theme.palette.main.primary}`,
  borderRadius: 2,
  display: "flex",
  flexDirection: "column",
  overflow: "hidden",
  cursor: "pointer",
  "&:hover": {
    backgroundColor: theme.palette.action.hover,
  },
});
