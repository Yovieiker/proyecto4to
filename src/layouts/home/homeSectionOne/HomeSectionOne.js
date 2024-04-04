import { Box, Button, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

function HomeSectionOne() {
  return (
    <>
      <Box sx={{ display: { md: "none" } }}>
        <Box
          sx={{
            backgroundColor: "#7889FE",
            height: "750px",
            textAlign: "center",
            color: "#fff",
          }}
        >
          <Swiper
            className="mySwiper"
            modules={[Autoplay]}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
          >
            <SwiperSlide>
              <Link to="/encuesta">
                <img src="/assets/img/banner-responsive.png" alt="" />
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to="/encuesta">
                <img src="/assets/img/banner-responsive.png" alt="" />
              </Link>
            </SwiperSlide>
          </Swiper>
        </Box>

        <Box px={6} sx={{ textAlign: "center" }}>
          <Box>
            <Typography
              variant="h4"
              sx={{ fontWeight: 700, pt: 10, color: "#C66CDD" }}
            >
              Caja Sensebox{" "}
            </Typography>
            <Typography sx={{ pt: 5 }}>
              Recibe todos los meses entre 4 y 5 productos sorpresa <br />{" "}
              <br /> Puedes elegir uno de ellos a tu gusto todos los mes
            </Typography>
            <Typography
              variant="h4"
              className="textGradient"
              sx={{ fontWeight: 700, py: 5 }}
            >
              {" "}
              55.900 BS Mensual
            </Typography>
          </Box>
          <Box mb={4} sx={{ position: "relative" }}>
            <Button
              component={NavLink}
              to="/encuesta"
              className="btnPosition"
              sx={{
                position: "absolute",
                top: "10%",
                left: "15%",
                background: "linear-gradient(135deg, #FF0080 0%, #7928CA 100%)",
                color: "#fff",
                borderRadius: "50px",
                width: "197px",
                fontWeight: "400",
                textTransform: "none",
                fontSize: "19px",
                boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
              }}
            >
              Prueba ahora
            </Button>
            <img
              src="/assets/img/boxYellow.png"
              alt="Maquillaje"
              border="0"
              className="img"
            />
          </Box>
        </Box>
      </Box>
      {/* Desktop */}
      <Box sx={{ display: { lg: "block", md: "block", xs: "none" } }}>
        <Box
          sx={{
            textAlign: "left",
            color: "#fff",
            display: "flex",
            height: "745px",
            width: "auto",
          }}
        >
          {/* <Box pl={6}>
                        <Typography variant="h2" component="h1" sx={{ fontWeight: 700 }}>
                            La <Typography variant="h2" component="span" sx={{ fontWeight: 700, color: "#F8C9CE" }}>caja de belleza</Typography> que estabas buscando

                        </Typography>
                        <Typography py={5} sx={{ fontSize: "22px" }}>

                            Recibe entre
                            4 y 5 productos de belleza y cuidado personal de las mejores marcas por solo $55.900/Mes
                        </Typography>
                        <Button sx={{
                            backgroundColor: "#C5FFD5",
                            color: "#4F4F4F",
                            borderRadius: "50px",
                            width: "303px",
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
                    <img src="/assets/img/image1Desktop.png" alt="Maquillaje" border="0" className='img' /> */}
          <Swiper className="mySwiper">
            <SwiperSlide>
              <Link to="/encuesta">
                <img src="/assets/img/banner.png" alt="" />
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to="/encuesta">
                <img src="/assets/img/banner.png" alt="" />
              </Link>{" "}
            </SwiperSlide>
          </Swiper>
        </Box>

        <Box
          px={6}
          sx={{
            textAlign: "left",
            display: "flex",
            justifyContent: "start",
            position: "relative",
            height: "680px",
          }}
        >
          <Box px={8}>
            <Box sx={{ width: "600px" }}>
              <Typography
                variant="h3"
                sx={{ fontWeight: 700, pt: 10, color: "#C66CDD" }}
              >
                Caja Sensebox{" "}
              </Typography>
              <Typography
                sx={{ pr: 18, pt: 5, fontSize: "22px", fontWeight: 600 }}
              >
                Recibe todos los meses entre 4 y 5 productos sorpresa <br />
                <br /> Puedes elegir uno de ellos a tu gusto todos los mes
              </Typography>
              <Typography
                variant="h3"
                className="textGradient"
                sx={{ fontWeight: 700, py: 5 }}
              >
                {" "}
                55.900 BS Mensual
              </Typography>
              <Button
                component={NavLink}
                to="/encuesta"
                sx={{
                  backgroundColor: "#C66CDD",
                  color: "#fff",
                  borderRadius: "50px",
                  width: "303px",
                  fontWeight: "400",
                  textTransform: "none",
                  fontSize: "19px",
                  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                  "&:hover": {
                    backgroundColor: "#61366d",
                    color: "#fff",
                  },
                }}
              >
                Prueba ahora
              </Button>
            </Box>
          </Box>
          <Box mb={4} sx={{ position: "absolute", top: "-10%", left: "45%" }}>
            <img
              src="/assets/img/boxYellowDesktop.png"
              alt="Maquillaje"
              border="0"
              className="imgBoxYellow"
            />
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default HomeSectionOne;
