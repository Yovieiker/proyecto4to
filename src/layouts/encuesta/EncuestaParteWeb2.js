import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Paper,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import React from "react";
import LineaProgress from "../../components/LineaProgress/LineaProgress";
import BreadcrumbsWeb from "../../components/breadcrumbs/BreadcrumbsWeb";

function EncuestaParteWeb2({
  questions,
  onBack,
  onNext,
  paso,
  barraProgress,
  mostrarTitulo
}) {
  const handleBack = () => {
    onBack();
  }
  const handleNext = () => {
    onNext();
  }
  return (
    <>
    <BreadcrumbsWeb  />

      <Box
        p={8}
        sx={{
          background:
            "linear-gradient(0deg, #f0689a 0%, #f0689a 50%, #903763 100%)",
        }}
      >
        <Paper sx={{ padding: "24px", borderRadius:"20px" }}>
          <Box sx={{ border: "1px solid #C66CDD ", textAlign: "center", borderRadius:"20px",minHeight:"717px" }}>
          <Box pt={6} px={10} sx={{ color: "#C66CDD" }}>
            <Typography> Paso {paso} de 10</Typography>
            <LineaProgress value={barraProgress} />
          </Box>
            <Box m={4} sx={{display:mostrarTitulo ? "block" : "none",}}>
             
              <Typography variant="h6">
              Comencemos con tu piel
              </Typography>
            </Box>
            <Box
              pb={4}
              component="form"
              sx={{ "& > :not(style)": { m: 1 } }}
              noValidate
              autoComplete="off"
            >
              <FormControl sx={{ flexDirection: "row" }}>
                {/* Campos adicionales del formulario */}
                {questions.map((question) => (
                  <Box >
                    <FormLabel  key={question.id} >
                      <Typography my={2} mx={4} id={question.id}>
                        {question.orden} {question.pregunta}
                      </Typography>
                    </FormLabel>
                    <RadioGroup className="encuesta-RadioGroup">
                      <Grid container spacing={1}>
                        {question.respuestas.map(
                          (respuesta, respuestaIndex) => (
                            <Grid item md={4} key={respuestaIndex}>
                              <FormControlLabel
                                className="encuesta-FormControlLabel"
                                value={respuesta?.respuesta_pregunta_id}
                                control={
                                  question.multiple !== true ? (
                                    <Radio style={{ display: "none" }} />
                                  ) : (
                                    <Checkbox style={{ display: "none" }} />
                                  )
                                }
                                label={
                                  <div
                                    className="encuesta-Label"
                                    key={respuesta?.respuesta_pregunta_id}
                                  >
                                    <img
                                      src={
                                        respuesta.imagen ||
                                        "/assets/img/icon.png"
                                      }
                                      alt={respuesta.texto}
                                      style={{
                                        width: "75px",
                                        height: "auto",
                                        borderRadius: "50%",
                                      }}
                                    />
                                    <Typography sx={{ fontSize: "12px" }}>
                                      {respuesta.respuesta}
                                    </Typography>
                                  </div>
                                }
                              />
                            </Grid>
                          )
                        )}
                      </Grid>
                    </RadioGroup>
                  </Box>
                ))}
              </FormControl>
              <Box py={4} sx={{ display:"flex", justifyContent:"space-around" }}>
                <Button onClick={handleBack} sx={{
                    color: "#C66CDD",
                    borderRadius: "20px",
                  
                    textTransform: "none",
                  }}>
                    Atrás
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

export default EncuestaParteWeb2;
