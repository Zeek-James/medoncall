import {
  AppBar,
  Box,
  Button,
  IconButton,
  Link,
  Menu,
  MenuItem,
  Slide,
  Toolbar,
  Typography,
  useScrollTrigger,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React, { useState } from "react";
import { Logo } from "../utils/styles/logo";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const HideOnScroll = ({ children }) => {
  const trigger = useScrollTrigger();
  return (
    <div>
      <Slide appear={false} direction="down" in={!trigger}>
        {children}
      </Slide>
    </div>
  );
};

export const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  return (
    <div>
      <HideOnScroll>
        <AppBar elevation={0}>
          <Toolbar sx={{ ml: 5, py: 1 }}>
            <Logo />
            <Box sx={{ flexGrow: 1 }} />
            <Box
              sx={{
                display: { xs: "flex", md: "none" },
                color: "#ff0000",
                fontWeight: 700,
              }}
            >
              <>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  <MenuIcon size="large" />
                </IconButton>
              </>
            </Box>
            <Box
              sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}
            >
              <>
                <Button
                  aria-controls="simple-menu"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  sx={{
                    mx: 3,
                    color: "#000",
                    textTransform: "capitalize",
                  }}
                  endIcon={<KeyboardArrowDownIcon />}
                >
                  <Typography variant="h6">Features</Typography>
                </Button>
                <Menu
                  id="simple-menu"
                  anchorEl={anchorElNav}
                  keepMounted
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                >
                  <MenuItem>Book Consultation</MenuItem>
                  <MenuItem>Drug Store</MenuItem>
                </Menu>
              </>
              <Link>
                <Typography
                  sx={{
                    textTransform: "uppercase",
                    color: "#000",
                  }}
                  variant="h6"
                >
                  Faq
                </Typography>
              </Link>
              <Link>
                <Typography
                  variant="h6"
                  sx={{
                    mx: 3,
                    color: "#000",
                    textTransform: "capitalize",
                  }}
                >
                  Contact
                </Typography>
              </Link>
              <Button
                variant="contained"
                color="secondary"
                sx={{
                  mr: 9.2,
                  textTransform: "capitalize",
                  px: 4.5,
                  py: 1.5,
                }}
              >
                Get it now
              </Button>
            </Box>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
    </div>
  );
};
