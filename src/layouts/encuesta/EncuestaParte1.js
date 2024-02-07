import { Box, Button, IconButton, Paper, TextField, Typography } from '@mui/material'
import React from 'react'
import CloseIcon from '@mui/icons-material/Close';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import BreadcrumbsMobile from '../../components/breadcrumbs/BreadCrumbsMobile';
function EncuestaParte1({ onNext, onSkip, onBackHome }) {
  const handleNext = () => {
    onNext();
  };

  const handleSkip = () => {
    onSkip();
  };

  const handleBackToHome = () => {
    onBackHome();
  }


  return (
    <>
      <Box pb={4} sx={{ background: "#f0cfe6", textAlign: "center", display: { md: "none" } }}>
      <BreadcrumbsMobile valor={false} textTitle={"Encuesta"} />
      <Paper sx={{ padding: "8px", marginTop: "16px", borderRadius: "20px", position: "relative", color: "#4F4F4F",marginLeft:"16px",marginRight:"16px" }}>
          <IconButton sx={{ position: "absolute", top: 0, right: 0, color: "#8F559E" }}>
            <CloseIcon />
          </IconButton>
          <Typography variant="h4" component="h2" sx={{ textAlign: "center", paddingTop: 5, color: "#4F4F4F" }}>Quiz de belleza</Typography>
          <Typography variant="body1" component="p" sx={{ textAlign: "center", paddingTop: 2, paddingBottom: 2, color: "#8F559E" }}>Cuéntanos un poco sobre ti, queremos saber cómo es tu pelo, tu piel y tus preferencias en temas de maquillaje y skin care.
          </Typography>
          <Typography variant="h6"> Queremos conocerte <br /> un poco más</Typography>
          <Box pb={4} component="form" sx={{ '& > :not(style)': { m: 1 } }} noValidate autoComplete="off">
            {/* Campos del formulario */}
            <Typography sx={{ textAlign: "center" }}>¿Cómo te gusta que te llamen?</Typography>
            <TextField id="name" label="Nombre" variant="standard" />
            <Typography sx={{ textAlign: "center" }}>¿Qué edad tienes?</Typography>
            <TextField id="edad" label="Edad" variant="standard" />
            <Typography sx={{ textAlign: "center" }}>¿Cuál es tu correo?</Typography>
            <TextField id="email" label="Correo" variant="standard" />

            {/* Botones */}
            <Box sx={{ textAlign: "center" }}>
              <IconButton sx={{ border: "1px solid #C66CDD", color: "#C66CDD" }} onClick={handleBackToHome}>
                <ArrowBackIcon />
              </IconButton>
              <Button sx={{ color: "#C66CDD", borderRadius: "20px", marginLeft: 8, marginRight: 8 }} onClick={handleSkip} >
                Saltar
              </Button>
              <IconButton sx={{ border: "1px solid #C66CDD", color: "#C66CDD" }} onClick={handleNext}>
                <ArrowForwardIcon />
              </IconButton>
            </Box>
          </Box>
        </Paper>
      </Box>
    </>
  )
}

export default EncuestaParte1