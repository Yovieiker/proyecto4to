import { Box, Typography } from '@mui/material'
import React from 'react'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import itemData from './itemData';
import "./sectionFour.css"
function HomeSectionFour() {

    return (
        <>
            <Box mt={6} sx={{ display: { md: "none" } , textAlign: "center" }}>
                <Box mb={6} p={1}>
                    <Typography variant="h3" sx={{ color: "#1A1C3D" }}>
                        Conoce nuestra comunidad
                    </Typography>
                </Box>
                <Box >
                    <Typography>
                        Publicaciones recientes en instragram
                    </Typography>
                    <Box m={3}>
                        <ImageList sx={{ height: "auto", weight: 450 }} cols={3}>
                            {itemData.map((item) => (
                                <ImageListItem key={item.img} >
                                    <img className="imgInstagram"
                                        srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                        src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                                        alt="publicaciones instagram"
                                        loading="lazy"
                                    />
                                </ImageListItem>
                            ))}
                        </ImageList>

                    </Box>
                </Box>
            </Box>

            {/**DESTOPK */}
            <Box mb={10} mt={6} sx={{ display: { xs: "none", md: "block" }, textAlign: "center" }}>
                <Box mb={6} p={1}>
                    <Typography variant="h2" sx={{ color: "#1A1C3D", fontWeight:"800" }}>
                        Conoce nuestra comunidad 
                    </Typography>
                </Box>
                <Box >
                    <Typography ml={15} sx={{textAlign:"left"}}>
                        Publicaciones recientes en instragram
                    </Typography>
                    <Box m={3} sx={{display:"flex", alignItems:"center", justifyContent:"center"}}>
                        <ImageList sx={{ height: "auto", width: "600px", marginRight:"10px" }} cols={3}>
                            {itemData.map((item) => (
                                <ImageListItem key={item.img} >
                                    <img className="imgInstagram"
                                        srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                        src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                                        alt="publicaciones instagram"
                                        loading="lazy"
                                    />
                                </ImageListItem>
                            ))}
                        </ImageList>
                        <ImageList sx={{ height: "auto", width: "600px" }} cols={3}>
                            {itemData.map((item) => (
                                <ImageListItem key={item.img} >
                                    <img className="imgInstagram"
                                        srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                        src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                                        alt="publicaciones instagram"
                                        loading="lazy"
                                    />
                                </ImageListItem>
                            ))}
                        </ImageList>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default HomeSectionFour