import { AppBar, Box, Button, Drawer, IconButton, Toolbar, Typography } from '@mui/material'
import React, { useState } from 'react'
import NavListDrawer from './NavListDrawer'
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LogoutIcon from '@mui/icons-material/Logout';
function Navbar() {
  const [open, setOpen] = useState(false)
  const navLinks = [
    {
      title: "Home", path: "/"
    },
    {
      title: "Blog", path: "/blog"
    },
    {
      title: "Nosotras", path: "/nosotras"
    }

  ]
  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: "#B35CCA" }}>
        <Toolbar>
          <IconButton color="inherit" size="large" onClick={() => setOpen(true)}
            sx={{ display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="a" href='#' sx={{
            textDecoration: "none", color: "#fff",
            flexGrow: 1
          }}><Typography variant="h6" component="span" sx={{ fontWeight: 700 }}>sense</Typography>box</Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {
              navLinks.map(item => (
                <Button color="inherit" key={item.title} component="a"
                  href={item.path}
                >{item.title}</Button>

              ))
            }
          </Box>
          <IconButton sx={{ backgroundColor: "#fff", color: "#000" }}>
            <ShoppingCartIcon fontSize="small" />
          </IconButton >
          <IconButton sx={{ backgroundColor: "#fff", color: "#000", marginLeft:1 }}>
            <LogoutIcon fontSize="small" />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer
        open={open}
        anchor="left"
        onClose={() => setOpen(false)}
        sx={{ display: { sm: "none" } }} >
        <NavListDrawer navLinks={navLinks} />
      </Drawer>

    </>
  )
}

export default Navbar