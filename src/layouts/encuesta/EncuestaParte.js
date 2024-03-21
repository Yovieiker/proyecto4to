import {
  Box,
  IconButton,
  Paper,
  Radio,
  Typography,
  Grid,
  FormControlLabel,
  RadioGroup,
  FormControl,
  FormLabel,
  Checkbox,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import LineaProgress from "../../components/LineaProgress/LineaProgress";
import BreadCrumbsMobile from "../../components/breadcrumbs/BreadCrumbsMobile";

function EncuestaParte({ questions, onBack, onNext, paso, barraProgress,mostrarTitulo }) {
  const handleBack = () => {
    onBack();
  };
  const handleNext = () => {
    onNext();
  };

  const [data, setData] = useState([]);

useEffect(() => {
  // Obtener el arreglo existente del localStorage (si existe)
  const existingData = localStorage.getItem("encuestaData");

  // Si existe un arreglo en el localStorage, conviértelo de JSON a objeto
  if (existingData) {
    setData(JSON.parse(existingData));
  }
}, []);
const handleResponseSelection = ( preguntaId, preguntaTitulo,respuestaSeleccionada, respuestaTitulo) => {
  // Agregar la pregunta y respuesta seleccionadas a la variable data
  const newData = [...data, { preguntaId, preguntaTitulo, respuestaSeleccionada, respuestaTitulo }];
  setData(newData);

  // Actualizar el arreglo en el localStorage
  localStorage.setItem("encuestaData", JSON.stringify(newData));
};

const handleSendData = () => {
    
  const encuestaData = JSON.parse(localStorage.getItem('encuestaData'));
  const idUsuario = localStorage.getItem('idUser');
  // Realizar la petición para enviar los datos al servidor
  fetch(`http://localhost:4000/api/encuesta/${idUsuario}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(encuestaData)
  })
    .then(response => response.json())
    .then(data => {
      // Manejar la respuesta del servidor
      console.log(data); // Puedes hacer algo con la respuesta, como mostrar un mensaje de éxito
    })
    .catch(error => {
      console.error('Error al enviar la encuesta:', error);
      // Puedes mostrar un mensaje de error o realizar alguna acción adicional en caso de error
    });

    onNext();
}
  return (
    <>
      <Box pb={4} sx={{ background: "#f0cfe6", textAlign: "center" , display: { md: "none" }}}>
        <BreadCrumbsMobile valor={false} textTitle={"Encuesta"} />
        <Paper sx={{ padding: "8px", marginTop: "16px", borderRadius: "20px", position: "relative", color: "#4F4F4F",marginLeft:"16px",marginRight:"16px" }}>

          <IconButton
            sx={{ position: "absolute", top: 0, right: 0, color: "#8F559E" }}
          >
            <CloseIcon />
          </IconButton>
          <Box pt={6} px={6} sx={{ color: "#C66CDD" }}>
            <Typography> Paso {paso} de 6</Typography>
            <LineaProgress value={barraProgress} />
          </Box>
          <Box sx={{display:mostrarTitulo ? "block" : "none",}}>
            <Typography
              variant="h4"
              component="h2"
              sx={{ textAlign: "center", paddingTop: 5, color: "#4F4F4F" }}
            >
              Sensebox
            </Typography>
            <Typography
              variant="h5"
              sx={{ textAlign: "center", color: "#4F4F4F" }}
            >
              Hola nombre!

            </Typography>
            <Typography
              sx={{ textAlign: "center", color: "#4F4F4F" }}
            >
              Cuéntanos un poco a cerca de tu piel

            </Typography>
          </Box>

          <Box
            pb={4}
            component="form"
            sx={{ "& > :not(style)": { m: 1 } }}
            noValidate
            autoComplete="off"
          >
            <FormControl>
              {/* Campos adicionales del formulario */}
              {questions.map((question) => (
                <>
                  <FormLabel key={question.id} sx={{ marginTop: "16px" }}>
                    <Typography id={question.id}>{question.orden} {question.pregunta}</Typography>

                  </FormLabel>
                  <RadioGroup className="encuesta-RadioGroup">

                    <Grid container spacing={1}>
                      {question.respuestas.map((respuesta, respuestaIndex) => (
                        <Grid item xs={4} key={respuestaIndex}>
                          <FormControlLabel className="encuesta-FormControlLabel"
                            value={respuesta?.respuesta_pregunta_id}
                            onChange={() => handleResponseSelection(
                              question.pregunta_id,
                              question.pregunta,
                              respuesta.respuesta_pregunta_id,
                              respuesta.respuesta
                            )}
                            control={
                              question.multiple !== true ? <Radio style={{ display: "none" }} /> : <Checkbox style={{ display: "none" }} />

                            }

                            label={
                              <div className="encuesta-Label" key={respuesta?.respuesta_pregunta_id}>

                                <img

                                  src={respuesta.imagen || "/assets/img/icon.png"}
                                  alt={respuesta.texto}
                                  style={{
                                    width: "65px",
                                    height: "auto",
                                    borderRadius: "50%",
                                  }}

                                />
                                <Typography sx={{ fontSize: "12px" }}>{respuesta.respuesta}</Typography>
                              </div>
                            }

                          />
                        </Grid>
                      ))}
                    </Grid>
                  </RadioGroup>
                </>


              ))}
            </FormControl>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-around" }}>
            <IconButton sx={{ border: "1px solid #C66CDD", color: "#C66CDD" }} onClick={handleBack}>
              <ArrowBackIcon />
            </IconButton>

            <IconButton sx={{ border: "1px solid #C66CDD", color: "#C66CDD" }} onClick={ paso === 5 ? handleSendData : handleNext}>
              <ArrowForwardIcon />
            </IconButton>
          </Box>
        </Paper>
      </Box>
    </>
  );
}

export default EncuestaParte;