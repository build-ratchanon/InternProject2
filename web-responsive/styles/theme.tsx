import { createTheme } from "@mui/material/styles";

// Create a theme instance
const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1920,
    },
  },
  typography: {
    h2: {
      fontFamily: "Playfair Display",
      fontWeight: 700,
      fontSize: "clamp(1rem, 3.333vw, 4rem)", //64px
      fontStyle: "normal",
      lineHeight: "normal",
    },
    h5: {
      fontFamily: "Playfair Display",
      fontWeight: 700,
      fontSize: "1.625rem", //26px
      fontStyle: "normal",
      lineHeight: "normal",
    },
    h6: {
      fontFamily: "Manrope",
      fontWeight: 400,
      fontSize: "clamp(0.7rem, 1.042vw, 1.5rem)", //24px
      fontStyle: "normal",
      lineHeight: "170%",
    },
    subtitle2: {
      fontFamily: "Manrope",
      fontWeight: 400,
      fontSize: "0.875rem", //14px 0.875rem
      fontStyle: "normal",
      lineHeight: "170%",
    },
  },
});

export default theme;
