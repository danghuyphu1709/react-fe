import { Height } from "@mui/icons-material";
import { experimental_extendTheme as extendTheme } from "@mui/material/styles";
const APP_BAR_HEIGHT = "58px";
const BOARD_BAR_HEIGHT = "58px";
const BOARD_CONTENT_HEIGHT = `calc(100vh - ${APP_BAR_HEIGHT} - ${BOARD_BAR_HEIGHT})`;

const theme = extendTheme({
  custom: {
    appBarHeigth: BOARD_BAR_HEIGHT,
    boarBarHeigth: BOARD_BAR_HEIGHT,
    BoardContentHeigth: BOARD_CONTENT_HEIGHT,
  },
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: "#0099FF",
        },
      },
    },
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          ".&:MuiTypography-body1": { fontSize: "0.875rem" },
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          "*::-webkit-scrollbar ": {
            with: "5px",
            height: "5px",
          },
          "*::-webkit-scrollbar-thumb ": {
            backgroundColor: "#EEEEEE",
            borderRadius: "5px",
          },
          "*::-webkit-scrollbar-thumb:hover ": {
            backgroundColor: "#888888",
            borderRadius: "5px",
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: ({ theme }) => {
          return {
            color: theme.palette.primary.main,
            fontSize: "0.875rem",
            ".MuiOutlinedInput-notchedOutline": {
              borderColor: theme.palette.primary.light,
            },
            "&:hover": {
              ".MuiOutlinedInput-notchedOutline": {
                borderColor: theme.palette.primary.main,
              },
            },
          };
        },
      },
    },
  },
});

export default theme;
