import React, { Component } from 'react'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { Stack } from '@mui/system'
import VideoPlayback from './videoplayback.mp4'
import CardMedia from '@mui/material/CardMedia'
import Card from '@mui/material/Card'
import VideoPoster from './img/About/cover.jpg'




export default class About extends Component {
  render() {
    return (
        <Container maxWidth="1046px" sx={{mt: 15, backgroundColor: "#FAFAFA" }}>
        <Container>
        <Typography variant="h2" sx={{textAlign: "center",color: "text_color.main"}}>Who We Are</Typography>
          <Typography maxWidth="510px" sx={{ fontFamily: "Montserrat",      fontStyle: "normal",      fontWeight: "500",      fontSize: "14px",      lineHeight: "20px",      letterSpacing: "0.2px",  textTransform: "none", mt:1, mx:"auto", textAlign: "center",color: "text_color2.main"}}>Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics</Typography>
            <Stack sx={{my: 12}} direction={{lg:"row", md:"column"}}>
                <Container sx={{MaxWidth:{lg: "400px", md:"300px"}}}>
                <CardMedia component='video' image={`${VideoPlayback}`} controls={true} poster={`${VideoPoster}`}        />
                </Container>
                <Container sx={{ml: "120px", maxWidth:"333px"}}>
                  <Typography variant="body1" color="initial">Most trusted in our field</Typography>
                </Container>
            </Stack>
        </Container>
        </Container>
        )
  }
}
