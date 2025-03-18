import Box from "@mui/material/Box";
import AppsIcon from "@mui/icons-material/Apps";
import Typography from "@mui/material/Typography";
import WorkSpace from "./Menus/WorkSpace";
import Templates from "./Menus/Templates";
import Profile from "./Menus/Profile";
import Starred from "./Menus/Starred";
import Recent from "./Menus/Recent";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Badge from "@mui/material/Badge";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import Tooltip from "@mui/material/Tooltip";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

function AppBar() {
  return (
    <>
      <Box px={2}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          height: (theme) => theme.custom.appBarHeigth,
          gap: 2,
          overflowX:'auto'
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
          }}
        >
          <AppsIcon />
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
            }}
          >
            <Typography
              variant="span"
              sx={{ fontSize: "1.2rem", fontWeight: "bold", color: "black" }}
            >
              Trello
            </Typography>
           
              <Box sx={{ display:{ xs:'none',md:'flex' },gap:1 }}>

              <WorkSpace />
              <Templates />
              <Starred />
              <Recent />
              <Button variant="outlined">Create</Button>

              </Box>
              

          </Box>

        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
          }}
        >
          <TextField
            id="outlined-search"
            label="Search..."
            type="search"
            size="small"
            sx={{ minWidth:120 }}
          />
          <Tooltip title="Notifications" sx={{ cursor: "pointer" }}>
            <Badge color="secondary" variant="dot">
              <NotificationsNoneIcon />
            </Badge>
          </Tooltip>
          <Tooltip title="help" sx={{ cursor: "pointer" }}>
            <HelpOutlineIcon />
          </Tooltip>
          <Profile />
          Model selects
        </Box>
      </Box>
    </>
  );
}

export default AppBar;
