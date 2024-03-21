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
import React, { useEffect, useState } from "react";
import LineaProgress from "../../components/LineaProgress/LineaProgress";
import BreadcrumbsWeb from "../../components/breadcrumbs/BreadcrumbsWeb";

function EncuestaParteWeb2({
  questions,
  onBack,
  onNext,
  paso,
  barraProgress,
  mostrarTitulo,
}) {
  const [data, setData] = useState([]);

  const handleBack = () => {
    onBack();
  };
  const handleNext = () => {
    onNext();
  };

  useEffect(() => {
    // Obtener el arreglo existente del localStorage (si existe)
    const existingData = localStorage.getItem("encuestaData");

    // Si existe un arreglo en el localStorage, conviértelo de JSON a objeto
    if (existingData) {
      setData(JSON.parse(existingData));
    }
  }, []);
  const handleResponseSelection = (
    preguntaId,
    preguntaTitulo,
    respuestaSeleccionada,
    respuestaTitulo
  ) => {
    // Agregar la pregunta y respuesta seleccionadas a la variable data
    const newData = [
      ...data,
      { preguntaId, preguntaTitulo, respuestaSeleccionada, respuestaTitulo },
    ];
    setData(newData);

    // Actualizar el arreglo en el localStorage
    localStorage.setItem("encuestaData", JSON.stringify(newData));
  };

  const handleSendData = () => {
    const encuestaData = JSON.parse(localStorage.getItem("encuestaData"));
    const idUsuario = localStorage.getItem("idUser");
    // Realizar la petición para enviar los datos al servidor
    fetch(`http://localhost:4000/api/encuesta/${idUsuario}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(encuestaData),
    })
      .then((response) => response.json())
      .then((data) => {
        // Manejar la respuesta del servidor
        console.log(data); // Puedes hacer algo con la respuesta, como mostrar un mensaje de éxito
      })
      .catch((error) => {
        console.error("Error al enviar la encuesta:", error);
        // Puedes mostrar un mensaje de error o realizar alguna acción adicional en caso de error
      });

    onNext();
  };
  return (
    <>
      <BreadcrumbsWeb />

      <Box
        p={8}
        sx={{
          background:
            "linear-gradient(0deg, #f0689a 0%, #f0689a 50%, #903763 100%)",
        }}
      >
        <Paper sx={{ padding: "24px", borderRadius: "20px" }}>
          <Box
            sx={{
              border: "1px solid #C66CDD ",
              textAlign: "center",
              borderRadius: "20px",
              minHeight: "717px",
            }}
          >
            <Box pt={6} px={10} sx={{ color: "#C66CDD" }}>
              <Typography> Paso {paso} de 10</Typography>
              <LineaProgress value={barraProgress} />
            </Box>
            <Box m={4} sx={{ display: mostrarTitulo ? "block" : "none" }}>
              <Typography variant="h6">Comencemos con tu piel</Typography>
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
                  <Box>
                    <FormLabel key={question.id}>
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
                                onChange={() =>
                                  handleResponseSelection(
                                    question.pregunta_id,
                                    question.pregunta,
                                    respuesta.respuesta_pregunta_id,
                                    respuesta.respuesta
                                  )
                                }
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
              <Box
                py={4}
                sx={{ display: "flex", justifyContent: "space-around" }}
              >
                <Button
                  onClick={paso === 9 ? handleSendData : handleNext}
                  sx={{
                    color: "#C66CDD",
                    borderRadius: "20px",

                    textTransform: "none",
                  }}
                >
                  Atrás
                </Button>

                <Button
                  onClick={handleNext}
                  sx={{
                    color: "#C66CDD",
                    borderRadius: "20px",

                    textTransform: "none",
                  }}
                >
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
