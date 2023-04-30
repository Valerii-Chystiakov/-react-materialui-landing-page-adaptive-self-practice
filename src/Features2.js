import React, { Component } from 'react'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import FeatureIcon1 from "./img/Features/FeatureIcon1.svg"
import FeatureIcon2 from "./img/Features/FeatureIcon2.svg"
import FeatureIcon3 from "./img/Features/FeatureIcon3.svg"
import FeatureIcon4 from "./img/Features/FeatureIcon4.svg"



export default class Features2 extends Component {
  render() {
    return (
      <Container maxWidth="1046px" sx={{mt: 15, pb: 10, backgroundColor: "#FAFAFA" }}>
        <Container>
          <Typography variant="h2" sx={{pt: 9,textAlign: "center",color: "text_color.main"}}>Designing Better Experience</Typography>
          <Typography maxWidth="510px" sx={{ fontFamily: "Montserrat",      fontStyle: "normal",      fontWeight: "500",      fontSize: "14px",      lineHeight: "20px",      letterSpacing: "0.2px",  textTransform: "none", mt:1, mx:"auto", textAlign: "center",color: "text_color2.main"}}>Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics</Typography>
          <Stack direction={{sm:"column", md:"row"}} sx={{mt: 6, width: "100%"}}>
              <Stack direction="row" sx={{width: {sm:"100%", md:"50%"}, mb: 4, justifyContent: "space-evenly"}}>
                <Card elevation={1} sx={{width: "240px"}}>
                    <CardContent sx={{display:"flex", flexFlow: "column", px:"40px", py:"35px"}}>
                        <img width={"48px"}
                        style={{margin: 'auto'}}
                            src={`${FeatureIcon1}`}
                            alt={"FeatureIcon1"}
                            loading="lazy"
                        />
                        <Typography variant="h2" sx={{color: "text_color.main", mt: 1, textAlign:"center"}}>972 +</Typography>
                        <Typography variant="h5" sx={{color: "text_color2.main", mt: 1, textAlign:"center"}}>Consumer Products</Typography>
                    </CardContent>
                </Card>
                <Card elevation={1} sx={{width: "240px"}}>
                    <CardContent sx={{display:"flex", flexFlow: "column", px:"40px", py:"35px"}}>
                        <img width={"48px"}
                        style={{margin: 'auto'}}
                            src={`${FeatureIcon2}`}
                            alt={"FeatureIcon2"}
                            loading="lazy"
                        />
                        <Typography variant="h2" sx={{color: "text_color.main", mt: 1, textAlign:"center"}}>181 +</Typography>
                        <Typography variant="h5" sx={{color: "text_color2.main", mt: 1, textAlign:"center"}}>Financial Services </Typography>
                    </CardContent>
                </Card>
              </Stack>
              <Stack direction="row" sx={{width: {sm:"100%", md:"50%"}, justifyContent: "space-evenly"}}>
                <Card elevation={1} sx={{width: "240px"}}>
                    <CardContent sx={{display:"flex", flexFlow: "column", px:"40px", py:"35px"}}>
                        <img width={"48px"}
                        style={{margin: 'auto'}}
                            src={`${FeatureIcon3}`}
                            alt={"FeatureIcon3"}
                            loading="lazy"
                        />
                        <Typography variant="h2" sx={{color: "text_color.main", mt: 1, textAlign:"center"}}>98%</Typography>
                        <Typography variant="h5" sx={{color: "text_color2.main", mt: 1, textAlign:"center"}}>Environmental</Typography>
                    </CardContent>
                </Card>
                <Card elevation={1} sx={{width: "240px"}}>
                    <CardContent sx={{display:"flex", flexFlow: "column", px:"40px", py:"35px"}}>
                        <img width={"48px"}
                        style={{margin: 'auto'}}
                            src={`${FeatureIcon4}`}
                            alt={"FeatureIcon4"}
                            loading="lazy"
                        />
                        <Typography variant="h2" sx={{color: "text_color.main", mt: 1, textAlign:"center"}}>746 +</Typography>
                        <Typography variant="h5" sx={{color: "text_color2.main", mt: 1, textAlign:"center"}}>Business & Finance </Typography>
                    </CardContent>
                </Card>
              </Stack>
          </Stack>
        </Container>
      </Container>
    )
  }
}
