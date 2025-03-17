import { experimental_extendTheme as extendTheme } from "@mui/material/styles";

// Tạo theme với chế độ sáng và tối
const theme = extendTheme({
  custom: {
    appBarHeigth :'58px',
    boarBarHeigth: '60px',
  },
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: "#ff5252",
        },
      },
    },
    dark: {
      palette: {
        primary: {
          main: "#000",
        },
      },
    },
  },
});

export default theme;
