import React, { Component } from 'react'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { Stack } from '@mui/system'
import VideoPlayback from './videoplayback.mp4'
import CardMedia from '@mui/material/CardMedia'
import Card from '@mui/material/Card'
import VideoPoster from './img/About/cover.jpg'
import AboutImg1 from './img/About/AboutImg1.png'
import AboutImg2 from './img/About/AboutImg2.png'





export default class About extends Component {
  render() {
    return (
        <Container maxWidth="1046px" sx={{mt: 15, backgroundColor: "#FAFAFA" }}>
        <Container>
        <Typography variant="h2" sx={{textAlign: "center",color: "text_color.main"}}>Who We Are</Typography>
          <Typography maxWidth="510px" sx={{ fontFamily: "Montserrat",      fontStyle: "normal",      fontWeight: "500",      fontSize: "14px",      lineHeight: "20px",      letterSpacing: "0.2px",  textTransform: "none", mt:1, mx:"auto", textAlign: "center",color: "text_color2.main"}}>Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics</Typography>
          
          
            <Stack sx={{my: {md:12, xs:4}}} direction={{md:"row", sm:"column"}}>
              <Stack px={"0px"} sx={{mx:"auto"}} width={{xs:"100%", sm:"500px", md:"600px"}}>
                <CardMedia component='video' image={`${VideoPlayback}`} controls={true} poster={`${VideoPoster}`}        />
              </Stack>
              <Stack width={{xs:"100%", md:"600px"}} sx={{ml: {sm: 0, md: "60px", lg: "120px"}}}>
                <Typography variant="h2" sx={{mt:"20px", color: "text_color.main", textAlign:{md:"left", xs:"center",lg:"left"}}}>Most trusted in our field</Typography>
                <Typography variant="paragraph" sx={{mt:"10px",maxWidth:"500px", mx:"auto",textAlign:{md:"left", xs:"center",lg:"left"},color: "text_color2.main"}}>Most calendars are designed for teams. Slate 
is designed for freelancers who want a 
simple way to plan their schedule.</Typography>

                <Stack  alignItems="flex-start" justifyContent={{md:"flex-start",xs:"center"}} spacing={2.5} direction="row" mt={"50px"} >
                            <Stack>
                            <img width={"32px"}
                                    height={"32px"}
                                          style={{margin: 'auto'}}
                                              src={`${AboutImg1}`}
                                              alt={"AboutImg1"}
                                              loading="lazy"
                                          />
                            </Stack>
                            <Stack>
                              <Typography variant="h5" sx={{color: "text_color.main"}}>the quick fox jumps over the lazy dog</Typography>
                                            <Typography variant="h6" sx={{color: "text_color2.main"}}>Things on a very small scale ...</Typography>
                            </Stack>
                  </Stack>

                  <Stack  alignItems="flex-start" justifyContent={{md:"flex-start",xs:"center"}} spacing={2.5} direction="row" mt={"30px"} >
                            <Stack>
                            <img width={"32px"}
                                    height={"32px"}
                                          style={{margin: 'auto'}}
                                              src={`${AboutImg2}`}
                                              alt={"AboutImg1"}
                                              loading="lazy"
                                          />
                            </Stack>
                            <Stack>
                              <Typography variant="h5" sx={{color: "text_color.main"}}>the quick fox jumps over the lazy dog</Typography>
                                            <Typography variant="h6" sx={{color: "text_color2.main"}}>Things on a very small scale ...</Typography>
                            </Stack>
                  </Stack>
              </Stack>
                
            </Stack>
        </Container>
        </Container>
        )
  }
}
