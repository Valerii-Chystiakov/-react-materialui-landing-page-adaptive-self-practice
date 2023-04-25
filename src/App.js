
import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline, Typography, Paper, AppBar, Container, Toolbar, IconButton, Box } from '@mui/material';
import { Menu } from '@mui/icons-material'
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ResponsiveAppBar from './Header';




const theme = createTheme({
  palette: {
    primary:{
      main: '#FF7B47'
    },
    secondary:{
      main: '#0D5C63',
    },
    secondary2:{
      main: '#17213C',
    },
    text_color:{
      main: '#252B42'
    },
    text_color2:{
      main: "#737373",
    },
    text_color_light:{
      main: "#FFFFFF"
    },
    bg_color_dark:{
      main: "#252B42"
    },
    bg_color_light: {
      main: "#FFFFFF"
    }
  },
  typography:{
    h1: {
      fontFamily: "Montserrat",
      fontSize: "58px",
      fontWeight: "800",
      lineHeight: "80px",
      letterSpacing: "0.2px",
      fontStyle: "normal",
    },
    h2: {
      fontFamily: "Montserrat",
      fontSize: "40px",
      fontWeight: "700",
      lineHeight: "57px",
      letterSpacing: "0.2px",
      fontStyle: "normal",
    },
    h3: {
      fontFamily: "Montserrat",
      fontStyle: "normal",
      fontWeight: "700",
      fontSize: "24px",
      lineHeight: "32px",
      letterSpacing: "0.1px", 
    },
    h4: {
      fontFamily: "Montserrat",
      fontStyle: "normal",
      fontWeight: "500",
      fontSize: "20px",
      lineHeight: "30px",
      letterSpacing: "0.2px",
    },
    h5: {
      fontFamily: "Montserrat",
      fontStyle: "normal",
      fontWeight: "700",
      fontSize: "16px",
      lineHeight: "24px",
      letterSpacing: "0.1px",
    },
    h6: {
      fontFamily: "Montserrat",
      fontStyle: "normal",
      fontWeight: "600",
      fontSize: "14px",
      lineHeight: "24px",
      letterSpacing: "0.2px",
    },
    btn_text: {
      fontFamily: "Montserrat",
      fontStyle: "normal",
      fontWeight: "700",
      fontSize: "28px",
      lineHeight: "32px",
      letterSpacing: "0.2px",
    },
    mobile_menu: {
      fontFamily: "Montserrat",
      fontStyle: "normal",
      fontWeight: "400",
      fontSize: "30px",
      lineHeight: "45px",
      letterSpacing: "0.2px",
    },
    paragraph: {
      fontFamily: "Montserrat",
      fontStyle: "normal",
      fontWeight: "500",
      fontSize: "14px",
      lineHeight: "20px",
      letterSpacing: "0.2px",
    },
    list: {
      fontFamily: "Montserrat",
      fontStyle: "normal",
      fontWeight: "400",
      fontSize: "20px",
      lineHeight: "30px",
      letterSpacing: "0.2px",
    },
    link: {
      fontFamily: "Montserrat",
      fontStyle: "normal",
      fontWeight: "600",
      fontSize: "14px",
      lineHeight: "24px",
      letterSpacing: "0.2px",
    },
  }
});

export default function App() {
  
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
        <div>
          <ResponsiveAppBar />
        </div>
    </ThemeProvider>
    
  );
}
