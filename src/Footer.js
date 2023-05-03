import React, { Component } from 'react'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import PhoneIcon from '@mui/icons-material/PhoneOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import TelegramIcon from '@mui/icons-material/Telegram';
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';


export default function Footer() {
    const [Companyopen, CompanysetOpen] = React.useState(true);
    const [Legalopen, LegalsetOpen] = React.useState(true);
    const [Featuresopen, FeaturessetOpen] = React.useState(true);
    const [Resourcesopen, ResourcessetOpen] = React.useState(true);


    const handleCompanyClick = () => {
        CompanysetOpen(!Companyopen);
      };
    const handleLegalClick = () => {
    LegalsetOpen(!Legalopen);
    };
    const handleFeaturesClick = () => {
        FeaturessetOpen(!Featuresopen);
    };
    const handleResourcesClick = () => {
        ResourcessetOpen(!Resourcesopen);
      };
    return (
        <div>
            <Container maxWidth="1046px" sx={{backgroundColor: "#FAFAFA",mb:"40px"}}>
                <Container>
                <Stack mt={"40px"} direction={{xs:"column", sm:"row"}} justifyContent={"space-between"}>
                <Stack>
                    <Typography sx={{width:"100%"}} variant="h3" color="text_color.main">Consulting Agency For Your Business</Typography>
                    <Typography mt={"10px"} variant="paragraph" color="text_color2.main">the quick fox jumps over the lazy dog</Typography>
                </Stack>
                <Button sx={{px:"40px",mt:{sm:"0px",xs:"20px"}, py:"15px", maxHeight:"60px"}} variant="contained" color="primary">
                    <Typography sx={{minWidth:"83px"}} variant="btn_text" color="text_color_light.main">Contact Us</Typography>
                </Button>
                </Stack>
                </Container>
            </Container>
            <Container maxWidth="1046px" sx={{backgroundColor: "secondary2.main"}}>
                <Container>
                <Stack display={{xs:"none",md:"flex"}} direction={"row"} spacing={2} sx={{py:"50px", justifyContent:"space-between"}}>
                    <Stack sx={{px:"0px"}}>
                        <Typography variant="h5" color="text_color_light.main">Company Info</Typography>
                        <List component="nav" sx={{pt:"20px"}}>
                            <ListItem button disablePadding sx={{my:"5px"}}><Typography variant="link" color="text_color_light.main">About Us</Typography>
                            </ListItem>
                            <ListItem button disablePadding sx={{my:"5px"}}><Typography variant="link" color="text_color_light.main">Carrier</Typography>
                            </ListItem>
                            <ListItem button disablePadding sx={{my:"5px"}}><Typography variant="link" color="text_color_light.main">We are hiring</Typography>
                            </ListItem>
                            <ListItem button disablePadding sx={{my:"5px"}}><Typography variant="link" color="text_color_light.main">Blog</Typography>
                            </ListItem>
                        </List>
                    </Stack>
                    <Stack maxWidth="xs" >
                        <Typography variant="h5" color="text_color_light.main">Legal</Typography>
                        <List component="nav" sx={{pt:"20px"}}>
                            <ListItem button disablePadding sx={{my:"5px"}}><Typography variant="link" color="text_color_light.main">About Us</Typography>
                            </ListItem>
                            <ListItem button disablePadding sx={{my:"5px"}}><Typography variant="link" color="text_color_light.main">Carrier</Typography>
                            </ListItem>
                            <ListItem button disablePadding sx={{my:"5px"}}><Typography variant="link" color="text_color_light.main">We are hiring</Typography>
                            </ListItem>
                            <ListItem button disablePadding sx={{my:"5px"}}><Typography variant="link" color="text_color_light.main">Blog</Typography>
                            </ListItem>
                        </List>
                    </Stack>
                    <Stack maxWidth="xs" >
                        <Typography variant="h5" color="text_color_light.main">Features</Typography>
                        <List component="nav" sx={{pt:"20px"}}>
                            <ListItem button disablePadding sx={{my:"5px"}}><Typography variant="link" color="text_color_light.main">Business Marketing</Typography>
                            </ListItem>
                            <ListItem button disablePadding sx={{my:"5px"}}><Typography variant="link" color="text_color_light.main">User Analytic</Typography>
                            </ListItem>
                            <ListItem button disablePadding sx={{my:"5px"}}><Typography variant="link" color="text_color_light.main">Live Chat</Typography>
                            </ListItem>
                            <ListItem button disablePadding sx={{my:"5px"}}><Typography variant="link" color="text_color_light.main">Unlimited Support</Typography>
                            </ListItem>
                        </List>
                    </Stack>
                    <Stack maxWidth="xs">
                        <Typography variant="h5" color="text_color_light.main">Resources</Typography>
                        <List component="nav" sx={{pt:"20px"}}>
                            <ListItem button disablePadding sx={{my:"5px"}}><Typography variant="link" color="text_color_light.main">IOS & Android</Typography>
                            </ListItem>
                            <ListItem button disablePadding sx={{my:"5px"}}><Typography variant="link" color="text_color_light.main">Watch a Demo</Typography>
                            </ListItem>
                            <ListItem button disablePadding sx={{my:"5px"}}><Typography variant="link" color="text_color_light.main">Customers</Typography>
                            </ListItem>
                            <ListItem button disablePadding sx={{my:"5px"}}><Typography variant="link" color="text_color_light.main">API</Typography>
                            </ListItem>
                        </List>
                    </Stack>
                    <Stack maxWidth="xs">
                        <Typography variant="h5" color="text_color_light.main">Get In Touch</Typography>
                        <List component="nav" sx={{pt:"20px"}}>
                            <ListItem button disablePadding sx={{my:"5px"}}>
                                    <PhoneIcon sx={{color:"#8EC2F2", fontSize:"30px"}}/>
                                <Typography variant="link" color="text_color_light.main">(480) 555-0103</Typography>
                            </ListItem>
                            <ListItem button disablePadding sx={{my:"5px"}}>
                                    <LocationOnOutlinedIcon sx={{color:"#8EC2F2", fontSize:"30px"}}/>
                                <Typography variant="link" color="text_color_light.main">4517 Washington Ave.</Typography>
                            </ListItem>
                            <ListItem button disablePadding sx={{my:"5px"}}>
                            
                                    <TelegramIcon sx={{color:"#8EC2F2", fontSize:"30px"}}/>
                                
                                <Typography variant="link" color="text_color_light.main">debra.holt@example.com</Typography>
                            </ListItem>
                        </List>
                    </Stack>
                </Stack>
                <Stack display={{xs:"none",sm:"flex",md:"none"}} direction={"row"} spacing={0} sx={{justifyContent:"space-evenly"}}>
                    <Stack>
                    <Stack sx={{py:"0px"}}>
                        <List component="nav" sx={{pt:"20px"}}>
                        <ListItemButton disablePadding sx={{py:"0px"}} onClick={handleCompanyClick}>
                        <Typography variant="h5" color="text_color_light.main">Company Info</Typography>
                        {Companyopen ? <ExpandLess sx={{color:"bg_color_light.main"}}/> : <ExpandMore sx={{color:"bg_color_light.main"}}/>}
                        </ListItemButton>
                        <Collapse in={Companyopen} timeout="auto" unmountOnExit>
                            <List component="nav">
                                <ListItem button disablePadding sx={{my:"5px"}}><Typography variant="link" color="text_color_light.main">About Us</Typography>
                                </ListItem>
                                <ListItem button disablePadding sx={{my:"5px"}}><Typography variant="link" color="text_color_light.main">Carrier</Typography>
                                </ListItem>
                                <ListItem button disablePadding sx={{my:"5px"}}><Typography variant="link" color="text_color_light.main">We are hiring</Typography>
                                </ListItem>
                                <ListItem button disablePadding sx={{my:"5px"}}><Typography variant="link" color="text_color_light.main">Blog</Typography>
                                </ListItem>
                            </List>
                        </Collapse>
                        </List>
                    </Stack>
                    <Stack sx={{py:"0px"}}>
                        <List component="nav" sx={{px:"0px"}}>
                        <ListItemButton disablePadding sx={{py:"0px"}} onClick={handleLegalClick}>
                        <Typography variant="h5" color="text_color_light.main">Legal</Typography>
                        {Legalopen ? <ExpandLess sx={{color:"bg_color_light.main"}}/> : <ExpandMore sx={{color:"bg_color_light.main"}}/>}
                        </ListItemButton>
                        <Collapse in={Legalopen} timeout="auto" unmountOnExit>
                            <List component="nav">
                                <ListItem button disablePadding sx={{py:"0px"}}><Typography variant="link" color="text_color_light.main">About Us</Typography>
                                </ListItem>
                                <ListItem button disablePadding sx={{py:"0px"}}><Typography variant="link" color="text_color_light.main">Carrier</Typography>
                                </ListItem>
                                <ListItem button disablePadding sx={{py:"0px"}}><Typography variant="link" color="text_color_light.main">We are hiring</Typography>
                                </ListItem>
                                <ListItem button disablePadding sx={{py:"0px"}}><Typography variant="link" color="text_color_light.main">Blog</Typography>
                                </ListItem>
                            </List>
                        </Collapse>
                        </List>
                    </Stack>
                    <Stack sx={{py:"0px"}}>
                        <List component="nav">
                        <ListItemButton disablePadding sx={{py:"0px"}} onClick={handleFeaturesClick}>
                        <Typography variant="h5" color="text_color_light.main">Features</Typography>
                        {Featuresopen ? <ExpandLess sx={{color:"bg_color_light.main"}}/> : <ExpandMore sx={{color:"bg_color_light.main"}}/>}
                        </ListItemButton>
                        <Collapse in={Featuresopen} timeout="auto" unmountOnExit>
                        <List component="nav">
                            <ListItem button disablePadding sx={{my:"5px"}}><Typography variant="link" color="text_color_light.main">Business Marketing</Typography>
                            </ListItem>
                            <ListItem button disablePadding sx={{my:"5px"}}><Typography variant="link" color="text_color_light.main">User Analytic</Typography>
                            </ListItem>
                            <ListItem button disablePadding sx={{my:"5px"}}><Typography variant="link" color="text_color_light.main">Live Chat</Typography>
                            </ListItem>
                            <ListItem button disablePadding sx={{my:"5px"}}><Typography variant="link" color="text_color_light.main">Unlimited Support</Typography>
                            </ListItem>
                        </List>
                        </Collapse>
                        </List>
                    </Stack>
                    <Stack sx={{py:"0px"}}>
                        <List component="nav">
                        <ListItemButton disablePadding sx={{py:"0px"}} onClick={handleResourcesClick}>
                        <Typography variant="h5" color="text_color_light.main">Resources</Typography>
                        {Resourcesopen ? <ExpandLess sx={{color:"bg_color_light.main"}}/> : <ExpandMore sx={{color:"bg_color_light.main"}}/>}
                        </ListItemButton>
                        <Collapse in={Resourcesopen} timeout="auto" unmountOnExit>
                        <List component="nav">
                            <ListItem button disablePadding sx={{my:"5px"}}><Typography variant="link" color="text_color_light.main">IOS & Android</Typography>
                            </ListItem>
                            <ListItem button disablePadding sx={{my:"5px"}}><Typography variant="link" color="text_color_light.main">Watch a Demo</Typography>
                            </ListItem>
                            <ListItem button disablePadding sx={{my:"5px"}}><Typography variant="link" color="text_color_light.main">Customers</Typography>
                            </ListItem>
                            <ListItem button disablePadding sx={{my:"5px"}}><Typography variant="link" color="text_color_light.main">API</Typography>
                            </ListItem>
                        </List>
                        </Collapse>
                        </List>
                    </Stack>
                    </Stack>
                    <Divider sx={{my:"15px"}} color={"#FAFAFA"} orientation="vertical" flexItem/>
                                <Stack pt={"20px"} maxWidth="xs">
                                    <Typography variant="h5" color="text_color_light.main">Get In Touch</Typography>
                                    <List component="nav" sx={{pt:"20px"}}>
                                        <ListItem button disablePadding sx={{my:"5px"}}>
                                                <PhoneIcon sx={{color:"#8EC2F2", fontSize:"30px"}}/>
                                            <Typography variant="link" color="text_color_light.main">(480) 555-0103</Typography>
                                        </ListItem>
                                        <ListItem button disablePadding sx={{my:"5px"}}>
                                                <LocationOnOutlinedIcon sx={{color:"#8EC2F2", fontSize:"30px"}}/>
                                            <Typography variant="link" color="text_color_light.main">4517 Washington Ave.</Typography>
                                        </ListItem>
                                        <ListItem button disablePadding sx={{my:"5px"}}>
                                        
                                                <TelegramIcon sx={{color:"#8EC2F2", fontSize:"30px"}}/>
                                            
                                            <Typography variant="link" color="text_color_light.main">debra.holt@example.com</Typography>
                                        </ListItem>
                                    </List>
                                </Stack>
                </Stack>
                <Stack display={{xs:"flex",sm:"none",md:"none"}} direction={"column"} spacing={0} sx={{justifyContent:"space-evenly"}}>
                    <Stack>
                    <Stack sx={{py:"0px"}}>
                        <List component="nav" sx={{pt:"20px"}}>
                        <ListItemButton disablePadding sx={{py:"0px"}} onClick={handleCompanyClick}>
                        <Typography variant="h5" color="text_color_light.main">Company Info</Typography>
                        {Companyopen ? <ExpandLess sx={{color:"bg_color_light.main"}}/> : <ExpandMore sx={{color:"bg_color_light.main"}}/>}
                        </ListItemButton>
                        <Collapse in={Companyopen} timeout="auto" unmountOnExit>
                            <List component="nav">
                                <ListItem button disablePadding sx={{my:"5px"}}><Typography variant="link" color="text_color_light.main">About Us</Typography>
                                </ListItem>
                                <ListItem button disablePadding sx={{my:"5px"}}><Typography variant="link" color="text_color_light.main">Carrier</Typography>
                                </ListItem>
                                <ListItem button disablePadding sx={{my:"5px"}}><Typography variant="link" color="text_color_light.main">We are hiring</Typography>
                                </ListItem>
                                <ListItem button disablePadding sx={{my:"5px"}}><Typography variant="link" color="text_color_light.main">Blog</Typography>
                                </ListItem>
                            </List>
                        </Collapse>
                        </List>
                    </Stack>
                    <Stack sx={{py:"0px"}}>
                        <List component="nav" sx={{px:"0px"}}>
                        <ListItemButton disablePadding sx={{py:"0px"}} onClick={handleLegalClick}>
                        <Typography variant="h5" color="text_color_light.main">Legal</Typography>
                        {Legalopen ? <ExpandLess sx={{color:"bg_color_light.main"}}/> : <ExpandMore sx={{color:"bg_color_light.main"}}/>}
                        </ListItemButton>
                        <Collapse in={Legalopen} timeout="auto" unmountOnExit>
                            <List component="nav">
                                <ListItem button disablePadding sx={{py:"0px"}}><Typography variant="link" color="text_color_light.main">About Us</Typography>
                                </ListItem>
                                <ListItem button disablePadding sx={{py:"0px"}}><Typography variant="link" color="text_color_light.main">Carrier</Typography>
                                </ListItem>
                                <ListItem button disablePadding sx={{py:"0px"}}><Typography variant="link" color="text_color_light.main">We are hiring</Typography>
                                </ListItem>
                                <ListItem button disablePadding sx={{py:"0px"}}><Typography variant="link" color="text_color_light.main">Blog</Typography>
                                </ListItem>
                            </List>
                        </Collapse>
                        </List>
                    </Stack>
                    <Stack sx={{py:"0px"}}>
                        <List component="nav">
                        <ListItemButton disablePadding sx={{py:"0px"}} onClick={handleFeaturesClick}>
                        <Typography variant="h5" color="text_color_light.main">Features</Typography>
                        {Featuresopen ? <ExpandLess sx={{color:"bg_color_light.main"}}/> : <ExpandMore sx={{color:"bg_color_light.main"}}/>}
                        </ListItemButton>
                        <Collapse in={Featuresopen} timeout="auto" unmountOnExit>
                        <List component="nav">
                            <ListItem button disablePadding sx={{my:"5px"}}><Typography variant="link" color="text_color_light.main">Business Marketing</Typography>
                            </ListItem>
                            <ListItem button disablePadding sx={{my:"5px"}}><Typography variant="link" color="text_color_light.main">User Analytic</Typography>
                            </ListItem>
                            <ListItem button disablePadding sx={{my:"5px"}}><Typography variant="link" color="text_color_light.main">Live Chat</Typography>
                            </ListItem>
                            <ListItem button disablePadding sx={{my:"5px"}}><Typography variant="link" color="text_color_light.main">Unlimited Support</Typography>
                            </ListItem>
                        </List>
                        </Collapse>
                        </List>
                    </Stack>
                    <Stack sx={{py:"0px"}}>
                        <List component="nav">
                        <ListItemButton disablePadding sx={{py:"0px"}} onClick={handleResourcesClick}>
                        <Typography variant="h5" color="text_color_light.main">Resources</Typography>
                        {Resourcesopen ? <ExpandLess sx={{color:"bg_color_light.main"}}/> : <ExpandMore sx={{color:"bg_color_light.main"}}/>}
                        </ListItemButton>
                        <Collapse in={Resourcesopen} timeout="auto" unmountOnExit>
                        <List component="nav">
                            <ListItem button disablePadding sx={{my:"5px"}}><Typography variant="link" color="text_color_light.main">IOS & Android</Typography>
                            </ListItem>
                            <ListItem button disablePadding sx={{my:"5px"}}><Typography variant="link" color="text_color_light.main">Watch a Demo</Typography>
                            </ListItem>
                            <ListItem button disablePadding sx={{my:"5px"}}><Typography variant="link" color="text_color_light.main">Customers</Typography>
                            </ListItem>
                            <ListItem button disablePadding sx={{my:"5px"}}><Typography variant="link" color="text_color_light.main">API</Typography>
                            </ListItem>
                        </List>
                        </Collapse>
                        </List>
                    </Stack>
                    </Stack>
                     <Divider sx={{mt:"12px"}} color={"#FAFAFA"} />
                                <Stack  sx={{justifyContent:"center"}} pt={"20px"} pl={"16px"} maxWidth="xs">
                                    <Typography variant="h5" color="text_color_light.main">Get In Touch</Typography>
                                    <List component="nav" sx={{pt:"20px"}}>
                                        <ListItem button disablePadding sx={{my:"5px"}}>
                                                <PhoneIcon sx={{color:"#8EC2F2", fontSize:"30px"}}/>
                                            <Typography variant="link" color="text_color_light.main">(480) 555-0103</Typography>
                                        </ListItem>
                                        <ListItem button disablePadding sx={{my:"5px"}}>
                                                <LocationOnOutlinedIcon sx={{color:"#8EC2F2", fontSize:"30px"}}/>
                                            <Typography variant="link" color="text_color_light.main">4517 Washington Ave.</Typography>
                                        </ListItem>
                                        <ListItem button disablePadding sx={{my:"5px"}}>
                                        
                                                <TelegramIcon sx={{color:"#8EC2F2", fontSize:"30px"}}/>
                                            
                                            <Typography variant="link" color="text_color_light.main">debra.holt@example.com</Typography>
                                        </ListItem>
                                    </List>
                                </Stack>
                </Stack>
                </Container>
            </Container>
            <Container maxWidth="1046px" sx={{backgroundColor: "#FAFAFA"}}>
                <Container>
                    <Stack py={"25px"} direction={"row"} flexWrap={"wrap"} justifyContent="space-between" alignItems={"center"}>
                        <Stack>                        <Typography variant="h6" color="text_color2.main">Template Made By Figmaland All Right Reserved</Typography>
                        <Typography variant="h6" color="text_color2.main">React Frontend Coding Made by Zork</Typography>

</Stack>  
                                              <List component="nav" direction={"row"} sx={{width:"160px", display:"flex", justifyContent:"flex-end"}}>
                            <ListItem button disablePadding>
                                    <FacebookIcon sx={{color:"#335BF5", fontSize:"24px"}}/>
                            </ListItem>
                            <ListItem button disablePadding>
                                    <InstagramIcon sx={{color:"#E51F5A", fontSize:"24px"}}/>
                            </ListItem>
                            <ListItem button disablePadding>
                                    <TwitterIcon sx={{color:"#21A6DF", fontSize:"24px"}}/>
                            </ListItem>
                            <ListItem button disablePadding>
                                    <YouTubeIcon sx={{color:"#E42F08", fontSize:"24px"}}/>
                            </ListItem>
                        </List>
                    </Stack>
                </Container>
            </Container>
        </div>
        
    )
}

