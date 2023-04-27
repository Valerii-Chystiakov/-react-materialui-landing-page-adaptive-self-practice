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
            <Stack direction="row" spacing={4} sx={{pt: 10}}>
            <Card elevation={0} sx={{width: "330px"}}>
                <CardContent sx={{px:"40px", py:"35px"}}>
                    <img
                        src={`${HeadIcon1}`}
                        alt={"tool-box-icon"}
                        loading="lazy"
                    />
                    <Typography color="textSecondary">
                        content here
                    </Typography>
                </CardContent>
            </Card>
            <Card elevation={0} sx={{width: "330px"}}>
                <CardContent sx={{px:"40px", py:"35px"}}>
                    <img
                        src={`${HeadIcon2}`}
                        alt={"tool-box-icon"}
                        loading="lazy"
                    />
                    <Typography color="textSecondary">
                        content here
                    </Typography>
                </CardContent>
            </Card>
            <Card elevation={0} sx={{width: "330px"}}>
                <CardContent sx={{px:"40px", py:"35px"}}>
                    <img
                        src={`${HeadIcon2}`}
                        alt={"tool-box-icon"}
                        loading="lazy"
                    />
                    <Typography color="textSecondary">
                        content here
                    </Typography>
                </CardContent>
            </Card>
            </Stack>
        </Container>
    )
  }
}
