import { Button, Typography } from '@mui/material'
import { Box } from '@mui/system'
import faqData from "./QuestionData";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import React, { useState } from "react";
import CarouselMarcas from './CarouselMarcas';
import { NavLink } from 'react-router-dom';

function HomeSectionThree() {
  const [expanded, setExpanded] = useState(false);
  const [visibleNumbers, setVisibleNumbers] = useState(Array.from({ length: 3 }, (_, index) => index + 1));
  const visibleFaqs = expanded ? faqData : faqData.slice(0, 3);

  const toggleExpanded = (event) => {
    setExpanded(!expanded);
    if (!expanded) {
      const nextNumbers = Array.from({ length: faqData.length - 3 }, (_, index) => index + 4);
      setVisibleNumbers([...visibleNumbers, ...nextNumbers]);
    }
    event.preventDefault();
  };


  const suportWsp = () => {
    window.open('https://api.whatsapp.com/send/?phone=573126601727&text&type=phone_number&app_absent=0', '_blank');
  }
  return (
    <>
      <Box>
        <Box mt={6} p={3} sx={{ backgroundColor: "#FBEEFF", textAlign: "center", color: "#1A1C3D" }}>
          <Typography variant="h3" sx={{ fontWeight: 700 }}> Marcas aliadas </Typography>
        </Box>
        <Box m={2} sx={{
          textAlign: "center",
          backgroundColor: "#fff"
        }}>
          <CarouselMarcas />

        </Box>
      </Box>

      <Box sx={{ textAlign: "center", alignItems: "center", flexDirection: "column", display: { md: "none", xs: "flex" } }}>
        <Box mt={6} p={4} sx={{ backgroundColor: "#EB94FF", color: "#1A1C3D" }} >
          <Typography variant="h3" sx={{ fontWeight: 700 }}> Preguntas Frecuentes </Typography>
        </Box>
        <Box sx={{ textAlign: "justify" }} p={4}>
          {visibleFaqs.map((faq, index) => (
            <Box key={index} sx={{ color: "#000" }}>
              <Typography variant="h5" sx={{ fontWeight: 600 }}>{faq.question}</Typography>
              <Typography my={3}  >{faq.answer}</Typography>
            </Box>
          ))}
          {!expanded && (
            <Box my={5} sx={{ textAlign: "center", display: "flex", color: "#C66CDD", justifyContent: "center", alignContent: "center" }}>
              <Typography variant="h5" component="a" sx={{ cursor: "pointer", textDecoration: "underline" }} onClick={toggleExpanded}>Ver respuestas más preguntas frecuentes </Typography>
              <ArrowBackIosIcon sx={{ transform: "rotate(270deg)", fontSize: "xxx-large" }} />
            </Box>

          )}
        </Box>
        <Button  component={NavLink}
                to="/encuesta"
          sx={{
            marginRight: "10px",
            background: "#B35CCA",
            color: "#fff",
            borderRadius: "50px",
            width: "303px",
            fontWeight: "400",
            textTransform: "none",
            fontSize: "19px",
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            '&:hover': {
              backgroundColor: '#61366d',
            },
          }}>Quiero probar Sensebox</Button>

        <Button onClick={suportWsp}
          sx={{
            marginTop: "25px",
            marginBottom: "25px",

            border: "1px solid #B35CCA",
            background: "#fff",
            color: "#B35CCA",
            borderRadius: "50px",
            width: "303px",
            fontWeight: "400",
            textTransform: "none",
            fontSize: "19px",
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            '&:hover': {
              backgroundColor: '#B35CCA',
              color: "#fff"
            },
          }}>Tengo más dudas</Button>
      </Box>
      {/*desktop */}
      <Box sx={{ textAlign: "center", display: { xs: "none", md: "block" }, alignItems: "center", flexDirection: "column" }}>
        <Box sx={{ background: "url(/assets/img/fondoQuestions.png)", color: "#1A1C3D" }}>
          <Box pb={8} pt={15} >
            <Typography variant="h3" sx={{ fontWeight: 700 }}>Preguntas Frecuentes</Typography>

          </Box>
          <Box ml={20} sx={{
            display: "flex",
            alignItems: "baseline",
            justifyContent: "center"
          }}>
            <Box>
              {visibleNumbers.map((number) => (
                <Box height={145}>
                  <Box my={6} sx={{
                  width: "97px",
                  height: "97px",
                  backgroundColor: "#fff",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}>
                  <Box sx={{
                    width: "79px",
                    height: "79px",
                    borderRadius: "50%",
                    border: "1px solid #1A1C3D",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}><Typography variant="h4" sx={{ fontWeight: 600 }}>{number}</Typography></Box>
                </Box>
                </Box>
              ))}
            </Box>

            <Box mb={6} ml={10} sx={{ background: "#f7d1e5", textAlign: "justify", borderRadius: "20px" }} pt={8} px={10} >

              {visibleFaqs.map((faq, index) => (
                <Box key={index} sx={{ color: "#000" }}>
                  <Typography variant="h5" sx={{ fontWeight: 600 }}>{faq.question}</Typography>
                  <Typography my={3}>{faq.answer}</Typography>
                </Box>
              ))}

              {!expanded && (
                <Box my={5} sx={{ textAlign: "center", display: "flex", color: "#1A1C3D", justifyContent: "left"}}>
                  <Typography variant="h5" component="a" sx={{ cursor: "pointer", textDecoration: "underline" }} onClick={toggleExpanded}>
                    Ver respuestas más preguntas frecuentes
                  <ArrowBackIosIcon sx={{ transform: "rotate(270deg)", fontSize: "xxx-large" }} />

                  </Typography>
                </Box>
              )}
            </Box>
          </Box>
        </Box>
        

       <Box my={8}>
       <Button onClick={suportWsp}
          sx={{
          

            border: "1px solid #B35CCA",
            background: "#fff",
            color: "#B35CCA",
            borderRadius: "50px",
            width: "303px",
            fontWeight: "400",
            textTransform: "none",
            fontSize: "19px",
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            '&:hover': {
              backgroundColor: '#B35CCA',
              color: "#fff"
            },
          }}>Tengo más dudas</Button>
          <Button  component={NavLink}
                to="/encuesta"
          sx={{
            marginLeft: "10px",
            background: "#B35CCA",
            color: "#fff",
            borderRadius: "50px",
            width: "303px",
            fontWeight: "400",
            textTransform: "none",
            fontSize: "19px",
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            '&:hover': {
              backgroundColor: '#61366d',
            },
          }}>Quiero probar Sensebox</Button>
       </Box>
      </Box>
    </>
  )
}

export default HomeSectionThree