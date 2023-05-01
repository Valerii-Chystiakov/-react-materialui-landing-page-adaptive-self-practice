import React, { Component } from 'react'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import ContactIcon1 from "./img/Contact/ContactIcon1.png"
import ContactIcon2 from "./img/Contact/ContactIcon2.png"
import ContactIcon3 from "./img/Contact/ContactIcon3.png"
import Button from '@mui/material/Button'



export default class Contact extends Component {
  render() {
    return (
      <Container maxWidth="1046px" sx={{backgroundColor: "#F3F3F3"}}>
        <Container>
          <Typography variant="h2" sx={{pt: 10,textAlign: "center",color: "text_color.main"}}>Get In Touch</Typography>
          <Typography maxWidth="510px" sx={{ fontFamily: "Montserrat",      fontStyle: "normal",      fontWeight: "500",      fontSize: "14px",      lineHeight: "20px",      letterSpacing: "0.2px",  textTransform: "none", mt:1, mx:"auto", textAlign: "center",color: "text_color2.main"}}>Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics</Typography>
              <Stack spacing={0} direction={{sm:"column",md:"row"}} sx={{mt:10, alignItems:"center", pb: "150px", justifyContent: "center"}}>
                <Card elevation={1} sx={{width: {xs:"320px",sm:"330px"}}}>
                        <CardContent sx={{display:"flex", flexFlow: "column", px:"40px", py:"50px"}}>
                            <img width={"72px"}
                            style={{margin: 'auto'}}
                                src={`${ContactIcon1}`}
                                alt={"ContactIcon1"}
                                loading="lazy"
                            />
                            <Typography variant="h6" sx={{color: "text_color.main", mt: 2, textAlign:"center"}}>georgia.young@example.com</Typography>
                            <Typography variant="h6" sx={{color: "text_color.main", mt: 0, textAlign:"center"}}>georgia.young@ple.com</Typography>
                            <Typography variant="h5" sx={{color: "text_color.main", my: 2, textAlign:"center"}}>Get Support</Typography>
                            <Button variant="outlined" color="primary" sx={{px:"20px",py:"10px",width:"auto",mx:"auto", mb:"26px"}}>
                              <Typography variant="h6" color="primary">Submit Request</Typography>
                            </Button>
                        </CardContent>
                    </Card>
                    <Card elevation={1} sx={{width: {xs:"320px",sm:"330px"}, backgroundColor:"bg_color_dark.main"}}>
                        <CardContent sx={{display:"flex", flexFlow: "column", px:"40px", py:"80px"}}>
                            <img width={"72px"}
                            style={{margin: 'auto'}}
                                src={`${ContactIcon2}`}
                                alt={"ContactIcon2"}
                                loading="lazy"
                            />
                            <Typography variant="h6" sx={{color: "text_color_light.main", mt: 2, textAlign:"center"}}>georgia.young@example.com</Typography>
                            <Typography variant="h6" sx={{color: "text_color_light.main", mt: 0, textAlign:"center"}}>georgia.young@ple.com</Typography>
                            <Typography variant="h5" sx={{color: "text_color_light.main", my: 2, textAlign:"center"}}>Get Support</Typography>
                            <Button variant="outlined" color={"text_color_light"} sx={{px:"20px",py:"10px",width:"auto",mx:"auto", mb:"26px"}}>
                              <Typography variant="h6" sx={{color:"text_color_light.main"}}>Submit Request</Typography>
                            </Button>
                        </CardContent>
                    </Card>
                    <Card elevation={1} sx={{width: {xs:"320px",sm:"330px"}}}>
                        <CardContent sx={{display:"flex", flexFlow: "column", px:"40px", py:"50px"}}>
                            <img width={"72px"}
                            style={{margin: 'auto'}}
                                src={`${ContactIcon3}`}
                                alt={"ContactIcon3"}
                                loading="lazy"
                            />
                            <Typography variant="h6" sx={{color: "text_color.main", mt: 2, textAlign:"center"}}>georgia.young@example.com</Typography>
                            <Typography variant="h6" sx={{color: "text_color.main", mt: 0, textAlign:"center"}}>georgia.young@ple.com</Typography>
                            <Typography variant="h5" sx={{color: "text_color.main", my: 2, textAlign:"center"}}>Get Support</Typography>
                            <Button variant="outlined" color="primary" sx={{px:"20px",py:"10px",width:"auto",mx:"auto", mb:"26px"}}>
                              <Typography variant="h6" color="primary">Submit Request</Typography>
                            </Button>
                        </CardContent>
                    </Card>
              </Stack>
        </Container>
      </Container>
    )
  }
}
