import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import CloseIcon from "@mui/icons-material/Close";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import "./navbar.css";

const pages = ["home", "skills", "work", "contact"];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <AppBar
        position="fixed"
        sx={{
          background: "transparent",
          backdropFilter: "blur(5px)",
          zIndex: "100",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            {/* normal view header */}
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                width: "400px",
                justifyContent: "center",

                color: "white",
                textDecoration: "none",
              }}
            >
              LOGO
            </Typography>

            {/* Mobile View */}

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleDrawerOpen}
                edge="start"
                color="inherit"
                sx={{ color: "white" }}
              >
                <MenuIcon />
              </IconButton>
            </Box>

            <Typography
              variant="h5"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "#960018 ",
                textDecoration: "none",
              }}
            >
              Saad
            </Typography>

            {/*  NORMAL VIEW */}

            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                justifyContent: "right",
                marginRight: "3rem",
              }}
            >
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{
                    color: "white",
                    display: "block",
                    marginRight: "1rem",
                  }}
                >
                  {page}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer
        variant="persistent"
        anchor="left"
        open={open}
        PaperProps={{
          className: "drawer",
          sx: {
            display: "flex",
            width: "20rem",
            background: "url(/Assets/Images/bgWhite.png)",
            backgroundColor: "transparent",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            boxShadow: "1px 1px 20px 0px rgb(150, 0, 24, 0.28)",
            backdropFilter: "blur(10px)",
            color: "white",

            /* background: "transparent",
            color: "white",
            , */
          },
        }}
      >
        <CloseIcon
          fontSize="medium"
          sx={{
            marginTop: "1rem",
            padding: "1rem 1rem 1rem",
          }}
          onClick={handleDrawerClose}
        />

        <List>
          {pages.map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton onClick={handleDrawerClose}>
                <ListItemText
                  primary={text}
                  sx={{ textAlign: "right", paddingRight: "10%" }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
}
export default Navbar;
