import { Box, Button, Typography } from '@mui/material'
import React from 'react'

function HomeSectionOne() {
    return (
        <>

            <Box sx={{ backgroundColor: "#7889FE", height: "750px", textAlign: "center", color: "#fff" }}>
                <Box p={6}>
                    <Typography variant="h4" component="h1" sx={{ fontWeight: 700 }}>
                        La <Typography variant="h4" component="span" sx={{fontWeight: 700, color:"#F8C9CE"}}>caja de belleza</Typography> que buscas

                    </Typography>
                    <Typography py={3} >

                        Recibe entre
                        4 y 5 productos de belleza y cuidado personal de las mejores marcas por solo $55.900/Mes
                    </Typography>
                    <Button sx={{
                        backgroundColor: "#C5FFD5",
                        color: "#4F4F4F",
                        borderRadius: "50px",
                        width: "197px",
                        fontWeight: "400",
                        textTransform: "none",
                        fontSize: "19px",
                        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                        '&:hover': {
                            backgroundColor: '#668f71',
                            color: "#fff"
                          },
                    }}>Prueba ahora</Button>

                </Box>
                <img src="/assets/img/image1.png" alt="Maquillaje" border="0" className='img' />
            </Box>

            <Box px={6} sx={{ textAlign: "center" }} >
                <Box  >

                    <Typography variant="h4" sx={{ fontWeight: 700, pt: 10, color: "#C66CDD" }}>Caja Sensebox </Typography>
                    <Typography sx={{ pt: 5 }}>Recibe todos los meses entre 4 y 5 productos sorpresa <br />  <br /> Puedes elegir uno de ellos a tu gusto todos los mes</Typography>
                    <Typography variant="h4" className="textGradient" sx={{ fontWeight: 700, py: 5 }}> 55.900 COP Mensual</Typography>
                </Box>
                <Box mb={4} sx={{ position: "relative" }}>
                    <Button className="btnPosition"
                        sx={{
                            position: "absolute",
                            top: "10%",
                            left:"15%",
                            background: "linear-gradient(135deg, #FF0080 0%, #7928CA 100%)",
                            color: "#fff",
                            borderRadius: "50px",
                            width: "197px",
                            fontWeight: "400",
                            textTransform: "none",
                            fontSize: "19px",
                            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)"
                        }}>Prueba ahora</Button>
                    <img src="/assets/img/boxYellow.png" alt="Maquillaje" border="0" className='img' />
                </Box>

            </Box>

        </>
    )
}

export default HomeSectionOne