import React, { Component } from 'react'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import HeadIcon1 from "./img/Head/HeadIcon1.svg"
import HeadIcon2 from "./img/Head/HeadIcon2.svg"
import HeadIcon3 from "./img/Head/HeadIcon3.svg"



export default class HeadContainer extends Component {
  render() {
    return (
        <Container sx={{px: "0px", pt: 23,  maxWidth:"1046px"}} >
            <Typography maxWidth="509px" variant="h1" sx={{color:"text_color.main"}}>Finance and Consultancy Solution</Typography>
            <Typography maxWidth="380px" variant="h4" sx={{pt: 4,color:"text_color2.main"}}>We know how large objects will act, but things on a small scale.</Typography>
            <Stack direction="row" spacing={2} sx={{mt: 4}}>
                <Button variant="contained" color="primary" sx={{borderRadius: "37px", py:1, px:4}}>
                  <Typography variant="btn_text" sx={{color:"text_color_light.main"}}>Get Quote Now</Typography>
                </Button>
                <Button variant="outlined" color="secondary" sx={{borderRadius: "37px", py:1, px:4}}>
                  <Typography variant="btn_text" color="secondary">Learn More</Typography>
                </Button>
            </Stack>
            <Stack direction={{sm:"column", md:"row"}} spacing={4} sx={{mt: 10}}>
            <Card elevation={1} sx={{width: "330px"}}>
                <CardContent sx={{px:"40px", py:"35px"}}>
                    <img
                        src={`${HeadIcon1}`}
                        alt={"HeadIcon1"}
                        loading="lazy"
                    />
                    <Typography variant="h3" sx={{color: "text_color.main", mt: 1}}>Environmental Consulting </Typography>
                    <Typography variant="p" sx={{color: "text_color2.main", mt: 1}}>We focus on ergonomics and meeting you where you work.</Typography>
                </CardContent>
            </Card>
            <Card elevation={1} sx={{width: "330px"}}>
                <CardContent sx={{px:"40px", py:"35px"}}>
                    <img
                        src={`${HeadIcon2}`}
                        alt={"HeadIcon2"}
                        loading="lazy"
                    />
                    <Typography variant="h3" sx={{color: "text_color.main", mt: 1}}>Finance and consultancy </Typography>
                    <Typography variant="p" sx={{color: "text_color2.main", mt: 1}}>Just type what's on your mind and we'll get you there.</Typography>
                </CardContent>
            </Card>
            <Card elevation={1} sx={{width: "330px", background: "#0D5C63"}}>
                <CardContent sx={{px:"40px", py:"35px"}}>
                    <img
                        src={`${HeadIcon3}`}
                        alt={"HeadIcon3"}
                        loading="lazy"
                    />
                    <Typography variant="h3" sx={{color: "text_color_light.main", mt: 1}}>Financial Services Consulting</Typography>
                    <Typography variant="p" sx={{color: "text_color_light.main", mt: 1}}>The quick fox jumps over the lazy dog. </Typography>
                </CardContent>
            </Card>
            </Stack>
        </Container>
    )
  }
}
