
import { experimental_extendTheme as extendTheme } from "@mui/material/styles";

const theme = extendTheme({
  custom: {
    appBarHeigth :'58px',
    boarBarHeigth: '60px',
    textColorDefault:'#ff5252'
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
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform:'none',
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: ({theme}) => {
          return {
           color:theme.palette.primary.main,
           fontSize:'0.875rem',
           '.MuiOutlinedInput-notchedOutline':{
            borderColor: theme.palette.primary.light
           },
           '&:hover':{
            '.MuiOutlinedInput-notchedOutline':{
              borderColor: theme.palette.primary.main
             }
           }
          }
        }
      },
    },
  },
});

export default theme;
