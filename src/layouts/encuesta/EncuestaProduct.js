import { Box, Button, FormControl, FormControlLabel,  Grid, IconButton, Paper, Radio, RadioGroup, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import BreadcrumbsMobile from '../../components/breadcrumbs/BreadCrumbsMobile';
function EncuestaProduct({ onNext, onSkip, onBackHome }) {
  const handleNext = () => {
    onNext();
  };


  const [productos, setProductos] = useState([]);
 const [selectedProduct, setSelectedProduct] = useState(null);
  useEffect(() => {
    // Fetch data from the API
    const fetchData = async () => {
      try {
        const response = await fetch('https://admin.sensebox.com.co/api/cajas/bienvenida', {
          headers: {
            Authorization: 'Bearer xWGtkD7-5VqU9BbNMxf9l-XwrGTv-OedEz',
          },
        });

        if (!response.ok) {
          throw new Error('Error en la solicitud a la API');
        }

        const data = await response.json();
        setProductos(data);
        console.log('Datos de la API:', data);
      } catch (error) {
        console.error('Error al obtener los datos de la API:', error);
      }
    };

    fetchData();
  }, []);

const handleSelection = (id) => {
  setSelectedProduct(id);
};

  return (
    <> 
    
      <Box sx={{ background: "#f0cfe6", textAlign: "center", display: { md: "none" } }}>
        <BreadcrumbsMobile valor={false} textTitle={"Encuesta"} />
        <Paper sx={{ padding: "8px", margin: "16px", borderRadius: "20px", position: "relative", color: "#4F4F4F" }}>
          <IconButton sx={{ position: "absolute", top: 0, right: 0, color: "#8F559E" }}>
            <CloseIcon />
          </IconButton>
          <Typography px={4} variant="h6" component="h2" sx={{ textAlign: "center", paddingTop: 5, color: "#C66CDD" }}>Escoge uno de estos productos para recibir en tu primera SenseBox
          </Typography>

          <Box pb={4} component="form" sx={{ '& > :not(style)': { m: 1 } }} noValidate autoComplete="off">
            <FormControl>
              {/* Campos adicionales del formulario */}

              <>

                <RadioGroup className="encuesta-RadioGroup">

                  <Grid container spacing={1}>
                    {productos.map((respuesta, respuestaIndex) => (
                      <Grid item xs={6} key={respuestaIndex}>
                        <FormControlLabel className="encuesta-FormControlLabel"
                          value={respuesta?.id}
                        onChange={() => handleSelection(respuesta.id)}
                          control={
                            <Radio style={{ display: "none" }} />

                          }

                          label={
                            <div className="encuesta-Label" key={respuesta?.id}>

                              <img

                                src={respuesta.images || "/assets/img/icon.png"}
                                alt={respuesta.name}
                                style={{
                                  width: "145px",
                                  height: "145px",
                                  objectFit: "contain",
                                  borderRadius: "10px 10px 70px",
                                  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                                  marginLeft: "10px",
                                  marginTop: "20px"
                                }}

                              />
                              <Typography sx={{ fontSize: "12px" }}>{respuesta.name}</Typography>
                            </div>
                          }

                        />
                      </Grid>
                    ))}
                  </Grid>
                </RadioGroup>
              </>



            </FormControl>
            {/* Botones */}
            <Box sx={{ textAlign: "center" }}>

              <Button onClick={handleNext} sx={{ marginTop: "32px", color: "#fff", background: "#C66CDD", borderRadius: "10px", height: 46, width: 314, }} >
                Elegir
              </Button>

            </Box>
          </Box>
        </Paper>
      </Box>
    </>
  )
}

export default EncuestaProduct