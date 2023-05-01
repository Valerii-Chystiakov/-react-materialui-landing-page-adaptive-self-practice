import React, { Component } from 'react'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import FeatureImg1 from "./img/Features2/FeatureImg1.jpg"
import FeatureImg2 from "./img/Features2/FeatureImg2.jpg"
import FeatureImg3 from "./img/Features2/FeatureImg3.jpg"
import FeatureImg4 from "./img/Features2/FeatureImg4.jpg"



export default class Features2 extends Component {
  render() {
    return (
      <Container maxWidth="1046px" sx={{mt: 15, backgroundColor: "#FAFAFA" }}>
        <Container>
          <Typography variant="h2" sx={{textAlign: "center",color: "text_color.main"}}>Practice Advice</Typography>
          <Typography maxWidth="470px" sx={{ fontFamily: "Montserrat",      fontStyle: "normal",      fontWeight: "500",      fontSize: "14px",      lineHeight: "20px",      letterSpacing: "0.2px",  textTransform: "none", mt:1, mx:"auto", textAlign: "center",color: "text_color2.main"}}>Problems trying to resolve the conflict between <br/>the two major realms of Classical physics: Newtonian mechanics </Typography>
          <Stack direction={{sm:"column", md:"row"}} sx={{mt: 6, width: "100%"}}>
              <Stack spacing={2} direction={{xs:"column",sm:"row"}} sx={{alignItems:{xs:"center",sm:"stretch"},width: {sm:"100%", md:"50%"}, mb: 4, justifyContent: "space-evenly"}}>
              <Card elevation={1} sx={{width: "240px", display:"flex", flexDirection:"column", justifyContent: 'space-between'}}>
                    <CardContent sx={{display:"flex", flexFlow: "column", p:"30px"}}>
                        <Typography variant="h5" sx={{color: "text_color.main"}}>A single source 
of truth</Typography>
                        <Typography variant="paragraph" sx={{color: "text_color2.main", mt:2}}>Newton thought that 
light was made up of 
particles, but then it 
was discovered </Typography>
                    </CardContent>
                    <img width={"100%"}
                        style={{margin: '0px'}}
                            src={`${FeatureImg1}`}
                            alt={"FeatureIcon1"}
                            loading="lazy"
                     />
                </Card>
                <Card elevation={1} sx={{width: "240px", display:"flex", flexDirection:"column", justifyContent: 'space-between'}}>
                    <CardContent sx={{display:"flex", flexFlow: "column", p:"30px"}}>
                        <Typography variant="h5" sx={{color: "text_color.main"}}>Fastest way to 
organize</Typography>
                        <Typography variant="paragraph" sx={{color: "text_color2.main", mt:2}}>“Quantum mechanics” 
is the description of the 
behaviour of matter </Typography>
                    </CardContent>
                    <img width={"100%"}
                        style={{margin: '0px'}}
                            src={`${FeatureImg2}`}
                            alt={"FeatureIcon1"}
                            loading="lazy"
                     />
                </Card>
              </Stack>
              <Stack spacing={2} direction={{xs:"column",sm:"row"}} sx={{alignItems:{xs:"center",sm:"stretch"},width: {sm:"100%", md:"50%"}, mb: 4, justifyContent: "space-evenly"}}>
              <Card elevation={1} sx={{width: "240px", display:"flex", flexDirection:"column", justifyContent: 'space-between'}}>
                    <CardContent sx={{display:"flex", flexFlow: "column", p:"30px"}}>
                        <Typography variant="h5" sx={{color: "text_color.main"}}>Fastest way to 
take action</Typography>
                        <Typography variant="paragraph" sx={{color: "text_color2.main", mt:2}}>They describe a 
universe consisting of 
bodies moving</Typography>
                    </CardContent>
                    <img width={"100%"}
                        style={{margin: '0px'}}
                            src={`${FeatureImg3}`}
                            alt={"FeatureIcon1"}
                            loading="lazy"
                     />
                </Card>
                <Card elevation={1} sx={{width: "240px", display:"flex", flexDirection:"column", justifyContent: 'space-between'}}>
                    <CardContent sx={{display:"flex", flexFlow: "column", p:"30px"}}>
                        <Typography variant="h5" sx={{color: "text_color.main"}}>Work better 
together</Typography>
                        <Typography variant="paragraph" sx={{color: "text_color2.main", mt:2}}>They finally obtained 
a consistent description 
of the behaviour</Typography>
                    </CardContent>
                    <img width={"100%"}
                        style={{margin: '0px'}}
                            src={`${FeatureImg4}`}
                            alt={"FeatureIcon1"}
                            loading="lazy"
                     />
                </Card>
              </Stack>
          </Stack>
        </Container>
      </Container>
    )
  }
}
