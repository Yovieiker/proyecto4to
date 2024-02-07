import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";

function EncuestaParteWeb({  onNext , onSkip}) {
    const handleNext = () => {
        onNext();
    }
    const handleSkip = () => {
      onSkip()
    }
  return (
    <>
      <Box
        p={8}
        sx={{
          background:
            "linear-gradient(0deg, #f0689a 0%, #f0689a 50%, #903763 100%)",
        }}
      >
        <Paper sx={{ padding: "24px", borderRadius:"20px" }}>
          <Box sx={{ border: "1px solid #C66CDD ", textAlign: "center", borderRadius:"20px" }}>
            <Box>
              <Typography
                variant="h4"
                component="h2"
                sx={{ textAlign: "center", paddingTop: 5, color: "#4F4F4F" }}
              >
                Quiz de bellezza
              </Typography>
              <Typography
                variant="body1"
                component="p"
                sx={{
                  textAlign: "center",
                  paddingTop: 2,
                  paddingBottom: 2,
                  color: "#C66CDD",
                }}
              >
                Cuéntanos un poco sobre ti, queremos saber cómo es tu pelo, tu
                <br /> piel y tus preferencias en temas de maquillaje y skin
                care.
              </Typography>
              <Typography variant="h4">
                Queremos conocerte un poco más
              </Typography>
            </Box>
            <Box
              p={4}
              component="form"
              sx={{ "& > :not(style)": { m: 1 } }}
              noValidate
              autoComplete="off"
            >
              {/* Campos del formulario */}
             <Box>
             <Typography sx={{ textAlign: "center" }}>
                ¿Cómo te gusta que te llamen?
              </Typography>
              <TextField id="name" label="Nombre" variant="standard"   sx={{ m: 2, width: '25ch' }}/>
              <Typography sx={{ textAlign: "center" }}>
                ¿Qué edad tienes?
              </Typography>
              <TextField id="edad" label="Edad" variant="standard" sx={{ m: 2, width: '25ch' }}/>
              <Typography sx={{ textAlign: "center" }}>
                ¿Cuál es tu correo?
              </Typography>
              <TextField id="email" label="Correo" variant="standard" sx={{ m: 2, width: '25ch' }}/>
             </Box>

              {/* Botones */}
              <Box py={4} sx={{ display:"flex", justifyContent:"space-around" }}>
                <Button component={NavLink} to="/" sx={{
                    color: "#C66CDD",
                    borderRadius: "20px",
                  
                    textTransform: "none",
                  }}>
                    Atrás
                </Button>
                <Button variant="outlined" color="secondary" onClick={handleSkip}
                  sx={{
                    color: "#C66CDD",
                    borderRadius: "20px",
                  
                    textTransform: "none",
                  }}
                >
                  Saltar
                </Button>
                <Button onClick={handleNext} sx={{
                    color: "#C66CDD",
                    borderRadius: "20px",
                  
                    textTransform: "none",
                  }}>
                    Siguiente
                </Button>
              </Box>
            </Box>
          </Box>
        </Paper>
      </Box>
    </>
  );
}

export default EncuestaParteWeb;
