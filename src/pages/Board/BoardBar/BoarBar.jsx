import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import DashboardIcon from "@mui/icons-material/Dashboard";
import VpnLockIcon from "@mui/icons-material/VpnLock";
import AddToDriveIcon from "@mui/icons-material/AddToDrive";
import BoltIcon from "@mui/icons-material/Bolt";
import FilterListIcon from "@mui/icons-material/FilterList";
import { Avatar, AvatarGroup, Button, Tooltip } from "@mui/material";
import PersonAddIcon from '@mui/icons-material/PersonAdd';
function BoarBar() {
  return (
    <>
      <Box
        px={2}
        sx={{
          width: "100%",
          height: (theme) => theme.custom.boarBarHeigth,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 2,
          overflowX: "auto",
          borderTop: "1px solid #00bfa5",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Chip
            sx={{
              color: "primary.main",
              bgcolor: "white",
              border: "none",
              paddingX: "5px",
              borderRadius: "4px",
              ".MuiSvgIcon-root": { color: "primary.main" },
              "&:hover": {
                bgcolor: "primary.50",
              },
            }}
            icon={<DashboardIcon />}
            label="DashBoard"
            clickable
          />
          <Chip
            sx={{
              color: "primary.main",
              bgcolor: "white",
              border: "none",
              paddingX: "5px",
              borderRadius: "4px",
              ".MuiSvgIcon-root": { color: "primary.main" },
              "&:hover": {
                bgcolor: "primary.50",
              },
            }}
            icon={<VpnLockIcon />}
            label="Public/Private/WorkSpace"
            clickable
          />

          <Chip
            sx={{
              color: "primary.main",
              bgcolor: "white",
              border: "none",
              paddingX: "5px",
              borderRadius: "4px",
              ".MuiSvgIcon-root": { color: "primary.main" },
              "&:hover": {
                bgcolor: "primary.50",
              },
            }}
            icon={<AddToDriveIcon />}
            label="Add To Google Drive"
            clickable
          />

          <Chip
            sx={{
              color: "primary.main",
              bgcolor: "white",
              border: "none",
              paddingX: "5px",
              borderRadius: "4px",
              ".MuiSvgIcon-root": { color: "primary.main" },
              "&:hover": {
                bgcolor: "primary.50",
              },
            }}
            icon={<BoltIcon />}
            label="Automation"
            clickable
          />

          <Chip
            sx={{
              color: "primary.main",
              bgcolor: "white",
              border: "none",
              paddingX: "5px",
              borderRadius: "4px",
              ".MuiSvgIcon-root": { color: "primary.main" },
              "&:hover": {
                bgcolor: "primary.50",
              },
            }}
            icon={<FilterListIcon />}
            label="Filter"
            clickable
          />
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>

        <Button variant="outlined" startIcon={<PersonAddIcon/>}>Invalid</Button>

          <AvatarGroup max={4}>
            <Tooltip title="Danh sach">
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </Tooltip>
          </AvatarGroup>
        </Box>
      </Box>
    </>
  );
}

export default BoarBar;
