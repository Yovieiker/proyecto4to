import { Box, Typography } from '@mui/material'
import React from 'react'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import itemData from './itemData';
import "./sectionFour.css"
function HomeSectionFour() {

    return (
        <>
            <Box mt={6} sx={{ textAlign: "center" }}>
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
        </>
    )
}

export default HomeSectionFour