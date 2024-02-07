import { Box, Button, FormControl, FormControlLabel,  Grid, Paper, Radio, RadioGroup, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import BreadcrumbsWeb from '../../components/breadcrumbs/BreadcrumbsWeb';
function EncuestaProductWeb({ onNext, onSkip, onBackHome }) {
  const handleNext = () => {
    onNext();
  };


  const [productos, setProductos] = useState([]);

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

  return (
    <>
    <BreadcrumbsWeb valor={true}   />

       <Box
        p={8}
        sx={{
          background:
            "linear-gradient(0deg, #f0689a 0%, #f0689a 50%, #903763 100%)",
        }}
      >
        <Paper sx={{ padding: "24px", borderRadius:"20px" }}>
         
        <Box
            pb={10}
            sx={{ border: "1px solid #C66CDD ", textAlign: "center", borderRadius:"20px" }}
          >
         <Typography px={4} variant="h6" component="h2" sx={{ textAlign: "center", paddingTop: 5, color: "#C66CDD" }}>Escoge uno de estos productos para recibir en tu primera SenseBox
          </Typography>

          <Box pb={4} component="form" sx={{ '& > :not(style)': { m: 1 } }} noValidate autoComplete="off">
            <FormControl>
              {/* Campos adicionales del formulario */}

              <>

                <RadioGroup className="encuesta-RadioGroup">

                  <Grid container spacing={1}>
                    {productos.map((respuesta, respuestaIndex) => (
                      <Grid item xs={3} key={respuestaIndex}>
                        <FormControlLabel className="encuesta-FormControlLabel"
                          value={respuesta?.id}
                          control={
                            <Radio style={{ display: "none" }} />

                          }

                          label={
                            <Box className="encuesta-Label" key={respuesta?.id} sx={{position:"relative"}}>
                                <Box sx={{color:"#fff",borderRadius:"50%", position:"absolute",background:"#C66CDD",width:"55px",height:"45px",display:"grid",alignItems:"center" }}><Typography sx={{fontSize:"10px"}}>{respuesta.price.slice(0, -3)} <br/> COP</Typography></Box>
                              <img

                                src={respuesta.images || "/assets/img/icon.png"}
                                alt={respuesta.name}
                                style={{
                                  width: "145px",
                                  height: "145px",
                                  objectFit: "contain",
                                  borderRadius: "10px ",
                                  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                                  marginLeft: "10px",
                                  marginTop: "20px"
                                }}

                              />
                              <Typography sx={{ fontSize: "12px",  maxWidth: "200px", overflow: "hidden"}}>{respuesta.name}</Typography>
                            </Box>
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
         </Box>
        </Paper>
      </Box>
    </>
  )
}

export default EncuestaProductWeb