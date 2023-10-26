import { Box, Typography, styled, Button } from "@mui/material";
import React, { useState, useEffect } from "react";
import darkBlueColor from "../../../helpers/colors";
const Img = styled("img")({
    width: "80%",
    height: 300,
    objectFit: "cover",
    objectPosition: "center",
    marginTop: 40
});
const cajas = [{
    title: "Sensebox",
    img: "/assets/img/box1.png"
}, {
    title: "Sensebox",
    img: "/assets/img/box2.png"
}, {
    title: "Sensebox",
    img: "/assets/img/box3.png"
}, {
    title: "Sensebox",
    img: "/assets/img/box4.png"
},
]
const pasosSensebox = [{

    title: "Haz el Quiz",
    text: "Al saber como es tu piel y pelo, eligireos los prodctos adecuados para ti",
    img: "/assets/img/Group1.png"
},
{

    title: "Suscríbete",
    text: "Llena los datos de suscripcion y abona tu cajita. No te preocupes, no tenemos cláusulas de suscrpiión",
    img: "/assets/img/Group2.png"
},
{

    title: "Disfruta",
    text: "Todos los meses recibirás productos de alta calidad cuidadosamente seleccionados para tí y tu cuidado.",
    img: "/assets/img/Group3.png"
    ,
}
]



function HomeSectionTwo() {
    const [counts, setCounts] = useState({
        countClients: 0,
        countMarcas: 0,
        countYear: 0,
    });

    useEffect(() => {
        const incrementCountClients = () => {
            setCounts((prevCounts) => ({
                ...prevCounts,
                countClients: prevCounts.countClients < 10000 ? prevCounts.countClients + 20 : prevCounts.countClients,
            }));
        };

        const incrementCountMarcas = () => {
            setCounts((prevCounts) => ({
                ...prevCounts,
                countMarcas: prevCounts.countMarcas < 300 ? prevCounts.countMarcas + 1 : prevCounts.countMarcas,
            }));
        };

        const incrementCountYear = () => {
            setCounts((prevCounts) => ({
                ...prevCounts,
                countYear: prevCounts.countYear < 10 ? prevCounts.countYear + 1 : prevCounts.countYear,
            }));
        };

        const intervalClients = setInterval(incrementCountClients, 1); // Incrementa countClients cada 1 ms
        const intervalMarcas = setInterval(incrementCountMarcas, 1); // Incrementa countMarcas cada 1 ms
        const intervalYear = setInterval(incrementCountYear, 300); // Incrementa countYear cada 500 ms

        return () => {
            clearInterval(intervalClients);
            clearInterval(intervalMarcas);
            clearInterval(intervalYear);
        };
    }, []);

    const { countClients, countMarcas, countYear } = counts;
    return (
        <>
            <Box sx={{ display: { md: "none" } }}>
                <Box sx={{ background: "#FFED57", textAlign: "center" }}>
                    <Box sx={{ py: 10 }}>
                        <Typography variant="h4" sx={{ fontWeight: 700, color: "#1A1C3D" }}>¿Cómo funciona <Typography variant="h4" component="span" sx={{ fontWeight: 900 }}>sense</Typography>box? </Typography>

                        {
                            pasosSensebox.map(item => (
                                <Box p={4} key={item.title}>
                                    <img src={item.img} alt={item.title} border="0" />
                                    <Typography p={2} variant="h5" sx={{ fontWeight: 700, color: "#1A1C3D" }}>{item.title}</Typography>
                                    <Typography sx={{ color: "#1A1C3D" }}>{item.text}</Typography>
                                </Box>

                            ))
                        }
                    </Box>
                </Box>

                <Box
                    sx={{
                        pb: 2,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexDirection: "column",
                        textAlign: "center"
                    }}>


                    <Typography
                        variant="h3"
                        m={3}
                        align="center"
                        fontWeight={700}
                        color={darkBlueColor}
                    >
                        Nuestras cajas
                    </Typography>
                    <Img className="img" src="/assets/img/box1.png" alt="NuestrasCajas" border="0" />

                    <Typography mt={6} variant="h3" sx={{ fontWeight: 700, color: "#C66CDD" }}>
                        +  {countClients?.toLocaleString()}
                    </Typography>
                    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                        <Typography mt={1} sx={{ fontSize: "22px", fontWeight: 600 }}>Clientas felices</Typography>
                        <Box mt={3} sx={{ borderBottom: "4px solid #C66CDD", width: "80%", borderRadius: "10px" }}></Box>
                    </Box>
                    <Typography mt={6} variant="h3" sx={{ fontWeight: 700, color: "#C66CDD" }}>
                        +  {countMarcas?.toLocaleString()}
                    </Typography>
                    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                        <Typography mt={1} sx={{ fontSize: "22px", fontWeight: 600 }}>Marcas de lujos</Typography>
                        <Box mt={3} sx={{ borderBottom: "4px solid #C66CDD", width: "80%", borderRadius: "10px" }}></Box>
                    </Box>
                    <Typography mt={6} variant="h3" sx={{ fontWeight: 700, color: "#C66CDD" }}>
                        +  {countYear?.toLocaleString()} AÑOS
                    </Typography>
                    <Typography mb={10} mt={1} sx={{ fontSize: "22px", fontWeight: 600 }}>de experiencia</Typography>
                    <Button
                        sx={{

                            background: "#FF167D",
                            color: "#fff",
                            borderRadius: "50px",
                            width: "303px",
                            fontWeight: "400",
                            textTransform: "none",
                            fontSize: "19px",
                            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                            '&:hover': {
                                backgroundColor: '#9d0c4c',
                                color: "#fff"
                            },
                        }}>Prueba ahora</Button>
                </Box>
            </Box>

            {/*Destokp */}
            <Box sx={{ display: { xs: "none", md: "block" } }}>
                <Box sx={{ background: "#FFED57" }}>
                    <Box sx={{ py: 10, textAlign: "center" }}>
                        <Typography pr={4} variant="h3" sx={{ fontWeight: 700, color: "#1A1C3D" }}>¿Cómo funciona <Typography variant="h3" component="span" sx={{ fontWeight: 900 }}>sense</Typography>box? </Typography>
                        <Box px={8} sx={{ display: "flex" }}>
                            {
                                pasosSensebox.map(item => (
                                    <Box p={8} key={item.title}>
                                        <img src={item.img} alt={item.title} border="0" />
                                        <Typography p={2} variant="h5" sx={{ fontWeight: 700, color: "#1A1C3D" }}>{item.title}</Typography>
                                        <Typography sx={{ color: "#1A1C3D", fontSize: "18px" }}>{item.text}</Typography>
                                    </Box>

                                ))
                            }
                        </Box>
                    </Box>
                </Box>


                <Box  className="widthContainerCajas"
                    sx={{
                        pb: 2,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexDirection: "column",
                        textAlign: "center",
                        width:"1400px"
                    }}>


                    <Typography
                        variant="h2"
                        my={8}
                        align="center"
                        fontWeight={700}
                        color={darkBlueColor}
                    >
                        Conoce algunas de nuestras cajas
                    </Typography>

                    <Box sx={{ display: "flex" }} >
                        {
                            cajas.map(item => (
                                <Box key={item.title} mr={1} >
                                    <Img  className="img-cajita" src={item.img} alt="NuestrasCajas" border="0" />
                                </Box>
                            ))
                        }
                    </Box>


                    <Box mb={8} sx={{ display: "flex", height: "90px" }}>
                        <Box  >
                            <Typography mt={6} variant="h3" sx={{ fontWeight: 700, color: "#C66CDD" }}>
                                +  {countClients?.toLocaleString()}
                            </Typography>
                            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                                <Typography mt={1} sx={{ fontSize: "22px", fontWeight: 600 }}>Clientas felices</Typography>
                            </Box>

                        </Box >
                        <Box mt={8} mx={8} sx={{ borderRight: "2px solid #C66CDD", height: "50%", borderRadius: "10px" }}></Box>

                        <Box>
                            <Typography mt={6} variant="h3" sx={{ fontWeight: 700, color: "#C66CDD" }}>
                                +  {countMarcas?.toLocaleString()}
                            </Typography>
                            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                                <Typography mt={1} sx={{ fontSize: "22px", fontWeight: 600 }}>Marcas de lujos</Typography>

                            </Box>
                        </Box>
                        <Box mt={8} mx={8} sx={{ borderRight: "2px solid #C66CDD", height: "50%", borderRadius: "10px" }}></Box>
                        <Box>
                            <Typography mt={6} variant="h3" sx={{ fontWeight: 700, color: "#C66CDD" }}>
                                +  {countYear?.toLocaleString()} AÑOS
                            </Typography>
                            <Typography mb={10} mt={1} sx={{ fontSize: "22px", fontWeight: 600 }}>de experiencia</Typography>
                        </Box>
                    </Box>
                    <Button
                        sx={{
                            marginTop: "70px",
                            background: "#FF167D",
                            color: "#fff",
                            borderRadius: "50px",
                            width: "303px",
                            fontWeight: "400",
                            textTransform: "none",
                            fontSize: "19px",
                            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                            '&:hover': {
                                backgroundColor: '#9d0c4c',
                                color: "#fff"
                            },
                        }}>Prueba ahora</Button>
                </Box>
            </Box>

        </>
    )
}

export default HomeSectionTwo