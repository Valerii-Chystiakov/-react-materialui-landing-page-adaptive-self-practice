import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";

function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };


  return (
    <AppBar position="absolute" color="transparent" elevation={0} sx={{px:0, width: "100%", mx:"auto"}}>
      <Container sx={{px:"0px", maxWidth: "1046px"}}>
        <Toolbar >
          <Box sx={{ flexGrow: 1, display: {xs: "flex", md: "none" } }}>
            <IconButton size="large" aria-label="account of current user" aria-controls="menu-appbar" aria-haspopup="true" onClick={handleOpenNavMenu} color="inherit">
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left"
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left"
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" }
              }}
            >
              <MenuItem onClick={handleCloseNavMenu}>
              <Typography textAlign="center" variant='link' sx={{color: "text_color2.main"}}>Home</Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
              <Typography textAlign="center" variant='link' sx={{color: "text_color2.main"}}>Product</Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
              <Typography textAlign="center" variant='link' sx={{color: "text_color2.main"}}>Pricing</Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
              <Typography textAlign="center" variant='link' sx={{color: "text_color2.main"}}>Contact</Typography>
              </MenuItem>
            </Menu>
          </Box>
          <Typography variant="h3" sx={{ display: "flex", flexGrow: {xs:"1", md: "0"}, mr: 2, color:"text_color.main"}}>
            Relvise
          </Typography>
          <Box sx={{pl: 15,  flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              <Button 
                onClick={handleCloseNavMenu} sx={{ color: "text_color2.main",my: 2, display: "block", textTransform: "none" }}>
                <Typography variant="link" >Home</Typography>
              </Button>
              <Button
                onClick={handleCloseNavMenu} sx={{ color: "text_color2.main",my: 2, display: "block", textTransform: "none" }}>
              <Typography variant="link">Product</Typography>
              </Button>
              <Button
                onClick={handleCloseNavMenu} sx={{ color: "text_color2.main",my: 2, display: "block", textTransform: "none" }}>
              <Typography variant="link">Pricing</Typography>
              </Button>
              <Button
                onClick={handleCloseNavMenu} sx={{ color: "text_color2.main",my: 2, display: "block", textTransform: "none" }}>
              <Typography variant="link">Contact</Typography>
              </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;
