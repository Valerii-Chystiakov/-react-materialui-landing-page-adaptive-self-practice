import React, { Component } from 'react'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'


export default class Footer extends Component {
  render() {
    return (
        <div>
            <Container maxWidth="1046px" sx={{backgroundColor: "#FAFAFA",mb:"40px"}}>
                <Container>
                    <Typography pt={"40px"} variant="h3" color="text_color.main">Consulting Agency For Your Business</Typography>
                    <Typography mt={"10px"} variant="paragraph" color="text_color2.main">the quick fox jumps over the lazy dog</Typography>
                </Container>
            </Container>
            <Container maxWidth="1046px" sx={{backgroundColor: "secondary2.main"}}>
                <Container>
                    nnn
                </Container>
            </Container>
            <Container maxWidth="1046px" sx={{backgroundColor: "#FAFAFA"}}>
                <Container>
                    nnn
                </Container>
            </Container>
        </div>
        
    )
  }
}
