
import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { orange, purple } from '@mui/material/colors';
import Button from '@mui/material/Button';
import { CssBaseline } from '@mui/material';

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
});

export default function Palette() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
        <div>
            
        </div>
    </ThemeProvider>
  );
}
