
import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Container } from '@mui/material';
import Header from './Header';
import HeadContainer from './HeadContainer';
import background from "./background.png"
import Features from './Features';




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
      textTransform: "none",
    },
    h2: {
      fontFamily: "Montserrat",
      fontSize: "40px",
      fontWeight: "700",
      lineHeight: "57px",
      letterSpacing: "0.2px",
      fontStyle: "normal",
      textTransform: "none",
    },
    h3: {
      fontFamily: "Montserrat",
      fontStyle: "normal",
      fontWeight: "700",
      fontSize: "24px",
      lineHeight: "32px",
      letterSpacing: "0.1px", 
      textTransform: "none",
    },
    h4: {
      fontFamily: "Montserrat",
      fontStyle: "normal",
      fontWeight: "500",
      fontSize: "20px",
      lineHeight: "30px",
      letterSpacing: "0.2px",
      textTransform: "none",
    },
    h5: {
      fontFamily: "Montserrat",
      fontStyle: "normal",
      fontWeight: "700",
      fontSize: "16px",
      lineHeight: "24px",
      letterSpacing: "0.1px",
      textTransform: "none",
    },
    h6: {
      fontFamily: "Montserrat",
      fontStyle: "normal",
      fontWeight: "600",
      fontSize: "14px",
      lineHeight: "24px",
      letterSpacing: "0.2px",
      textTransform: "none",

    },
    btn_text: {
      fontFamily: "Montserrat",
      fontStyle: "normal",
      fontWeight: "700",
      fontSize: "14px",
      lineHeight: "28px",
      letterSpacing: "0.2px",
      textTransform: "none",
    },
    mobile_menu: {
      fontFamily: "Montserrat",
      fontStyle: "normal",
      fontWeight: "400",
      fontSize: "30px",
      lineHeight: "45px",
      letterSpacing: "0.2px",
      textTransform: "none",
    },
    p: {
      fontFamily: "Montserrat",
      fontStyle: "normal",
      fontWeight: "500",
      fontSize: "14px",
      lineHeight: "20px",
      letterSpacing: "0.2px",
      textTransform: "none",
    },
    list: {
      fontFamily: "Montserrat",
      fontStyle: "normal",
      fontWeight: "400",
      fontSize: "20px",
      lineHeight: "30px",
      letterSpacing: "0.2px",
      textTransform: "none",
    },
    link: {
      fontFamily: "Montserrat",
      fontStyle: "normal",
      fontWeight: "600",
      fontSize: "14px",
      lineHeight: "24px",
      letterSpacing: "0.2px",
      textTransform: "none",
    },
  },
  });

export default function App() {
  
  return (
    <ThemeProvider theme={theme}>
      {/* <CssBaseline/> */}
        <div>
          <Header />
          <Container position="absolute" maxWidth="100%"  sx={{ height: "800px", background: {sm: `url(${background}) 100% 100% / cover no-repeat`, xs: `url(${background}) 80% 100% / cover no-repeat`}}} >
          <HeadContainer/>
          </Container>
          <Features/>
        </div>
    </ThemeProvider>
    
  );
}
