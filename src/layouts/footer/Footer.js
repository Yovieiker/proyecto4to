import { Box, IconButton, Typography } from '@mui/material'
import React from 'react'
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const iconsREdes = [
    {
        title: "Youtube",
        icon: <YouTubeIcon />,
        link: "https://www.youtube.com"

    },
    {
        title: "Facebook",
        icon: <FacebookIcon />,
        link: "https://www.facebook.com"
    },
    {
        title: "Instagram",
        icon: <InstagramIcon />,
        link: "https://www.instagram.com"

    },
    {
        title: "WhatsApp",
        icon: <WhatsAppIcon />,
        link: "https://www.whatsapp.com"
    }
]

function Footer() {
    return (
        <>
            <Box component="footer">
                <Box  sx={{ display: { md: "none" }, height: "130vh", background: "#C66CDD", color: "#fff" }}>
                    <Box p={4} sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                        <Typography variant="h5">Síguenos en nuestras redes sociales</Typography>
                        <img src='/assets/img/iconSB.png' alt="Sensebox" />
                    </Box>
                    <Box p={4} sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #fff" }}>
                        {
                            iconsREdes.map(item => (
                                <Box  ml="5px" key={item.title} >
                                    <Box ml="5px" sx={{ borderRadius: "10px", width: "50px", height: "50px", background: "linear-gradient(135deg, #FF0080 0%, #7928CA 100%)" }}>
                                        <IconButton href={item.link} target="_blank" size="large" sx={{ color: "#fff" }}>
                                            {item.icon}
                                        </IconButton>
                                    </Box>
                                    <Typography>{item.title}</Typography>
                                </Box>
                            ))
                        }

                    </Box>
                    <Box m={3}>
                        <Box>
                            <Typography mb={3} variant="h5">Contáctanos</Typography>
                            <Typography >Sensebox ofrece la posibilidad de probar productos mes a mes.</Typography>
                            <Typography mt={1}>info@sensebox.com.co</Typography>
                            <Typography mt={1}>(+57) 312 660 1727</Typography>
                            <Typography mt={1}>Lunes a Viernes – 8:30 am a 6:00 pm</Typography>
                        </Box>
                        <Box sx={{ display: "grid" }}>
                            <Typography my={3} variant="h5">Información</Typography>
                            <Typography component="a" href='#' sx={{ cursor: "pointer", textDecoration: "none", color: "#fff" }} mt={1}>Nosotros</Typography>
                            <Typography component="a" href='#' sx={{ cursor: "pointer", textDecoration: "none", color: "#fff" }} mt={1}>Contacto</Typography>
                            <Typography component="a" href='#' sx={{ cursor: "pointer", textDecoration: "none", color: "#fff" }} mt={1}>Información</Typography>
                            <Typography component="a" href='#' sx={{ cursor: "pointer", textDecoration: "none", color: "#fff" }} mt={1}>Preguntas frecuentes</Typography>
                            <Typography component="a" href='#' sx={{ cursor: "pointer", textDecoration: "none", color: "#fff" }} mt={1}>Términos y condiciones</Typography>
                            <Typography component="a" href='#' sx={{ cursor: "pointer", textDecoration: "none", color: "#fff" }} mt={1}>Política de privacidad</Typography>
                        </Box>
                        <Box my={4} sx={{ textAlign: "center" }}>
                            <img src='/assets/img/industriaComercio.png' alt="Industria y Comercio" />
                            <Typography>NIT 900.827.343-6.</Typography>
                            <Typography mt={4}>Copyright © 2023 <Typography component="a" href='https://sensebox.com.co/' target="_blank" >SenseBox, Inc </Typography> </Typography>
                        </Box>
                    </Box>
                </Box>
                {/*DESKTOP*/}
                
                <Box sx={{ display: { xs: "none", md: "block" }, height: "60vh", background: "#C66CDD", color: "#fff" }}>
                    <Box pt={10} mx={3} sx={{ display: "flex", justifyContent: "center" }}>
                        <Box>
                            <Typography variant="h5">Contáctanos</Typography>
                            <Typography >Sensebox ofrece la posibilidad de probar <br /> productos mes a mes.</Typography>
                            <Typography mt={1}>info@sensebox.com.co</Typography>
                            <Typography mt={1}>(+57) 312 660 1727</Typography>
                            <Typography mt={1}>Lunes a Viernes – 8:30 am a 6:00 pm</Typography>
                        </Box>
                        <Box mx={8} sx={{ display: "flex", flexDirection: "column" }}>
                            <Typography variant="h5">Información</Typography>
                            <Typography component="a" href='#' sx={{ cursor: "pointer", textDecoration: "none", color: "#fff" }} >Nosotros</Typography>
                            <Typography component="a" href='#' sx={{ cursor: "pointer", textDecoration: "none", color: "#fff" }} >Contacto</Typography>
                            <Typography component="a" href='#' sx={{ cursor: "pointer", textDecoration: "none", color: "#fff" }} >Información</Typography>
                            <Typography component="a" href='#' sx={{ cursor: "pointer", textDecoration: "none", color: "#fff" }}>Preguntas frecuentes</Typography>
                            <Typography component="a" href='#' sx={{ cursor: "pointer", textDecoration: "none", color: "#fff" }}>Términos y condiciones</Typography>
                            <Typography component="a" href='#' sx={{ cursor: "pointer", textDecoration: "none", color: "#fff" }}>Política de privacidad</Typography>
                        </Box>

                        <Box mx={7}>
                            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                                <Typography variant="h5">Síguenos en nuestras <br /> redes sociales </Typography>
                            </Box>
                            <Box pt={4} sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                                {
                                    iconsREdes.slice(0, 3).map(item => (
                                        <Box ml={2} key={item.title} >
                                            <Box ml={1} sx={{ borderRadius: "10px", width: "50px", height: "50px", background: "linear-gradient(135deg, #FF0080 0%, #7928CA 100%)" }}>
                                                <IconButton href={item.link} target="_blank" size="large" sx={{ color: "#fff" }}>
                                                    {item.icon}
                                                </IconButton>
                                            </Box>
                                            <Typography>{item.title}</Typography>
                                        </Box>
                                    ))
                                }

                            </Box>
                            <Box my={4} sx={{ textAlign: "center" }}>
                                <img src='/assets/img/industriaComercio.png' alt="Industria y Comercio" />
                                <Typography>NIT 900.827.343-6.</Typography>
                                <Typography mt={4}>Copyright © 2023 <Typography component="a" href='https://sensebox.com.co/' target="_blank" >SenseBox, Inc </Typography> </Typography>
                            </Box>
                        </Box>
                        <Box width={200} height={130}>

                            <img src='/assets/img/senseLogo.png' alt="SenseBox" />

                        </Box>


                    </Box>
                </Box>
            </Box>

        </>
    )
}

export default Footer