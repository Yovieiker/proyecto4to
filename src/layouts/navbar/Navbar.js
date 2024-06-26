import {
  AppBar,
  Box,
  Button,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import NavListDrawer from "./NavListDrawer";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LogoutIcon from "@mui/icons-material/Logout";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";
import SearchIcon from "@mui/icons-material/Search";
import { NavLink, useNavigate, Link } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const navLinks = [
    {
      title: "Inicio",
      path: "/",
    },
    {
      title: "Blog",
      path: "/blog",
    },
    {
      title: "Nosotras",
      path: "/nosotras",
    },
  ];

  const handleLogout = () => {
    // Eliminar el token de autenticación almacenado en el cliente
    localStorage.removeItem("token");
    localStorage.removeItem("idUser");
    localStorage.removeItem("encuestaData");
    localStorage.removeItem("idCheckout");
    // Redirigir al usuario a la página de inicio de sesión o cualquier otra página deseada
    window.location.reload();

    navigate("/");
  };

  const token = localStorage.getItem("token");

  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: "#B35CCA" }}>
        <Toolbar>
          <IconButton
            color="inherit"
            size="large"
            onClick={() => setOpen(true)}
            sx={{ display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component={NavLink}
            to="/"
            sx={{
              textDecoration: "none",
              color: "#fff",
              flexGrow: 1,
            }}
          >
            <Typography variant="h6" component="span" sx={{ fontWeight: 700 }}>
              sense
            </Typography>
            box
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navLinks.map((item) => (
              <Button
                color="inherit"
                key={item.title}
                component={NavLink}
                to={item.path}
              >
                {item.title}
              </Button>
            ))}
          </Box>
          <IconButton sx={{ backgroundColor: "#fff", color: "#000" }}>
            <ShoppingCartIcon fontSize="small" />
          </IconButton>
          <IconButton
            sx={{
              display: { xs: "grid", sm: "none" },
              backgroundColor: "#fff",
              color: "#000",
              marginLeft: 1,
            }}
          >
            <LogoutIcon fontSize="small" />
          </IconButton>
          {token ? (
            <Button
              onClick={handleLogout}
              sx={{
                display: { xs: "none", sm: "block" },
                width: "110px",
                marginLeft: 1,
                backgroundColor: "#8F559E",
                color: "#fff",
                borderRadius: "20px",
              }}
            >
              Salir
            </Button>
          ) : (
            <Button
              component={NavLink}
              to="/login"
              sx={{
                textAlign: "center",
                display: { xs: "none", sm: "block" },
                width: "110px",
                backgroundColor: "#8F559E",
                color: "#fff",
                borderRadius: "20px",
              }}
            >
              Login
            </Button>
          )}
          <IconButton
            sx={{
              display: { xs: "none", sm: "grid" },
              backgroundColor: "#fff",
              color: "#000",
              marginLeft: 1,
            }}
          >
            <SearchIcon fontSize="small" />
          </IconButton>

          <IconButton
            sx={{
              display: { xs: "none", sm: "grid" },
              backgroundColor: "#fff",
              color: "#000",
              marginLeft: 1,
            }}
          >
            <HeadsetMicIcon fontSize="small" />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer
        open={open}
        anchor="left"
        onClose={() => setOpen(false)}
        sx={{ display: { sm: "none" } }}
      >
        <NavListDrawer navLinks={navLinks} setOpen={setOpen} />
      </Drawer>
    </>
  );
}

export default Navbar;
