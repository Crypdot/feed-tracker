import { useState } from "react";
import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { tokens } from "../../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import PetsIcon from '@mui/icons-material/Pets';
import KitchenIcon from '@mui/icons-material/Kitchen';

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      sx={{
        color: colors.grey[100],
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};

const MySidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [selected, setSelected] = useState("Dashboard");
  const { collapseSidebar, collapsed } = useProSidebar();

  const styles = {
    sidebar: {
        height: "100%",
        color: colors.primary[800]
    },
    menuItems: {
        margin: "10px 0 20px 0",
        "& .proSidebarInner": {
            background: `${colors.primary[800]} !important`,
          },
          "& .proIconWrapper": {
            backgroundColor: "transparent !important",
          },
          "& .proInnerItem": {
            padding: "5px 35px 5px 20px !important",
          },
          "& .proInnerItem:hover": {
            color: "#868dfb !important",
          },
          "& .proMenuItem.active": {
            color: "#6870fa !important",
          },
    }
  };

  return (
    <Box sx={styles.sidebar}>
      <Sidebar 
        transitionDuration={500}
        style={styles.sidebar}
        >
        <Menu iconShape="square" >
          {/* LOGO AND MENU ICON */}
          <MenuItem
            transitionDuration={500}
            onClick={() => collapseSidebar()}
            icon={collapsed ? <MenuOutlinedIcon /> : undefined}
            sx={styles.menuItems}
          >
            {!collapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h3" color={colors.grey[100]}>
                  FeedTracker
                </Typography>
                <IconButton onClick={() => collapseSidebar()}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {!collapsed && (
            <Box mb="25px">
                {/* This is the ICON */}
              <Box display="flex" justifyContent="center" alignItems="center">
                <img
                  alt="FT Logo"
                  width="100px"
                  height="100px"
                  src={`../../assets/user.png`}
                  style={{ cursor: "pointer", borderRadius: "50%" }}
                />
              </Box>
              
              </Box>
          )}

          <Box paddingLeft={collapsed ? undefined : "10%"} style={styles.menuItems}>
            <Item
              title="Dashboard"
              to="/"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Data
            </Typography>

            <Item
              title="Pets"
              to="/form"
              icon={<PetsIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            
            <Item
              title="Fridge"
              to="/form"
              icon={<KitchenIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Pages
            </Typography>
            
            <Item
              title="Feeding Calendar"
              to="/calendar"
              icon={<CalendarTodayOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="FAQ Page"
              to="/faq"
              icon={<HelpOutlineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Charts (these are probably useless for now) {/* Except maybe a histogram of a pet's feeding habits*/}
            </Typography>
            <Item
              title="Bar Chart"
              to="/bar"
              icon={<BarChartOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Pie Chart"
              to="/pie"
              icon={<PieChartOutlineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Line Chart"
              to="/line"
              icon={<TimelineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Geography Chart"
              to="/geography"
              icon={<MapOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
          </Box>
        </Menu>
      </Sidebar>
    </Box>
  );
};

export default MySidebar;
