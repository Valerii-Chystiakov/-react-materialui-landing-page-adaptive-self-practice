import React, { Component } from 'react'
import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper';
import ClientsImg1 from "./img/Clients/ClientsImg1.png"
import ClientsImg2 from "./img/Clients/ClientsImg2.png"
import ClientsImg3 from "./img/Clients/ClientsImg3.png"
import ClientsImg4 from "./img/Clients/ClientsImg4.png"
import ClientsImg5 from "./img/Clients/ClientsImg5.png"
import ClientsImg6 from "./img/Clients/ClientsImg6.png"
import Button from '@mui/material/Button'
import { TextField } from '@mui/material';

export default class Clients extends Component {
  render() {
    return (
        <div>
            <Container maxWidth="1046px" sx={{ top:"62px", position:"relative", mt: 15, backgroundColor: 'transparent' }}>
                <Container>
                    <Stack sx={{flexWrap:"wrap"}} spacing={3} mb={"70px"} direction={"row"} justifyContent={"space-between"} alignItems={"center"}>                    <img width={"103px"}
                        height={"34px"}
                        style={{margin: 'auto'}}
                            src={`${ClientsImg1}`}
                            alt={"Hooli"}
                            loading="lazy"
                     />
                     <img width={"83px"}
                        height={"59px"}
                        style={{margin: 'auto'}}
                            src={`${ClientsImg2}`}
                            alt={"Lyft"}
                            loading="lazy"
                     />
                     <img width={"102px"}
                        height={"75px"}
                        style={{margin: 'auto'}}
                            src={`${ClientsImg3}`}
                            alt={"Pied-piper-hat"}
                            loading="lazy"
                     />
                     <img width={"103px"}
                        height={"42px"}
                        style={{margin: 'auto'}}
                            src={`${ClientsImg4}`}
                            alt={"Stripe"}
                            loading="lazy"
                     />
                     <img width={"104px"}
                        height={"62px"}
                        style={{margin: 'auto'}}
                            src={`${ClientsImg5}`}
                            alt={"Aws"}
                            loading="lazy"
                     />
                     <img width={"76px"}
                        height={"72px"}
                        style={{margin: 'auto'}}
                            src={`${ClientsImg6}`}
                            alt={"Reddit"}
                            loading="lazy"
                     />
                    </Stack>
                    <Stack sx={{justifyContent:"space-between"}} px={"50px"} py={"30px"} backgroundColor={"secondary2.main"} direction={{sm:"column", md:"row"}}>
                        <Typography variant="h3" sx={{color: "text_color_light.main", textAlign:{xs:"center",sm:"center", md:"left"}, maxWidth: {sm:"100%", md:"266px"}}}>Subscribe For Latest Newsletter</Typography>
                        <Paper
                        component="form"
                        sx={{ p: '1px 2px ', display: 'flex', flexDirection:{xs:"column",sm:"row"},alignItems: 'center', width: {sm:"100%", md:"50%"},maxWidth:"500px", margin:{sm:"auto", md:"0px"} }}>
                            <TextField variant='filled'
                                
                                sx={{ ml: 0, flex: 1, width:"100%" }}
                                label="Your Email"
                                inputProps={{ 'aria-label': 'enter your email to subscribe' }}
                            />
                            <Button type="button" variant="contained" color="primary" sx={{ width:{xs:"100%", sm:"auto"}, height: "100%", p: 1.5, borderTopLeftRadius: 0,borderBottomLeftRadius: {xs:"4px",sm:0}, borderTopRightRadius: {xs:0,sm:"4px"}  }} aria-label="subscribe">
                                <Typography variant="btn_text" sx={{color: "text_color_light.main",fontWeight: 400}}>Subscribe</Typography>
                            </Button>
                        </Paper>
                    </Stack>
                </Container>
            </Container>
            <Stack sx={{height:"77px",px:"0px",backgroundColor: "bg_color_dark.main"}} />
        </div>
    )
  }
}
