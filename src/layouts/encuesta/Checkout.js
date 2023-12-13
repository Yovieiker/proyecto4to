import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  IconButton,
  MenuItem,
  Paper,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import BreadCrumbsMobile from "../../components/breadcrumbs/BreadCrumbsMobile";

function Checkout() {
  const [departamentos, setDepartamentos] = useState([]);
  const [ciudades, setCiudades] = useState([]);
  const [departamentoSeleccionado, setDepartamentoSeleccionado] = useState("");
  const [metodoPago, setMetodoPago] = useState("");

  useEffect(() => {
    const fetchDepartamentos = async () => {
      try {
        const response = await fetch(
          "https://admin.sensebox.com.co/api/cubrimientos/departamentos"
        );
        const data = await response.json();
        setDepartamentos(data);
      } catch (error) {
        console.error("Error al obtener los departamentos:", error);
      }
    };

    fetchDepartamentos();
  }, []);

  useEffect(() => {
    const fetchCiudades = async () => {
      try {
        if (departamentoSeleccionado !== "") {
          const url = `https://admin-qa.sensebox.com.co/api/cubrimientos/ciudads?departamento=${departamentoSeleccionado}`;
          const response = await fetch(url);
          const data = await response.json();
          setCiudades(data);
        } else {
          setCiudades([]);
        }
      } catch (error) {
        console.error("Error al obtener las ciudades:", error);
      }
    };

    fetchCiudades();
  }, [departamentoSeleccionado]);

  const handleDepartamentoSeleccionado = (event) => {
    const selectedDepartamento = event.target.value;
    const departamento = departamentos.find(
      (dep) => dep.departamento === selectedDepartamento
    );

    if (departamento) {
      setDepartamentoSeleccionado(departamento.departamento);
    } else {
      setDepartamentoSeleccionado("");
    }
  };

  const handleMetodoPago = (event) => {
    setMetodoPago(event.target.value);
  };
  return (
    <>
      <Box
        sx={{
          background: "#f0cfe6",
          textAlign: "center",
          display: { md: "none" },
        }}
      >
        <BreadCrumbsMobile valor={true} textTitle={"Pago"} />
        <Paper
          sx={{
            padding: "8px",
            margin: "16px",
            borderRadius: "20px",
            position: "relative",
            color: "#4F4F4F",
          }}
        >
          <IconButton
            sx={{ position: "absolute", top: 0, right: 0, color: "#8F559E" }}
          >
            <CloseIcon />
          </IconButton>
          <Typography
            variant="h4"
            component="h2"
            sx={{ textAlign: "center", paddingTop: 5, color: "#4F4F4F" }}
          >
            Checkout
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
            Resumen de compra
          </Typography>
          <Box>
            <Box
              mx={4}
              p={1}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-around",
                borderTop: "1px solid #efe7ec",
                borderBottom: "1px solid #efe7ec",
              }}
            >
              <Box>
                <img
                  src="https://picsum.photos/200/300"
                  alt="imagen"
                  style={{
                    width: "95px",
                    height: "95px",
                  }}
                />
              </Box>
              <Box>
                <Typography>Caja sorpresa </Typography>
                <Typography>55.900 COP </Typography>
              </Box>
            </Box>
            <Box py={3} mx={4} sx={{ borderBottom: "1px solid #000" }}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Typography>Total de la compra </Typography>
                <Typography>55.900 COP </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Typography>costo de envio</Typography>
                <Typography>60000</Typography>
              </Box>
            </Box>
            <Box
              pt={1}
              mx={4}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Typography>Total</Typography>
              <Typography>60000</Typography>
            </Box>
          </Box>
          <Box
            mx={4}
            pb={4}
            component="form"
            sx={{ textAlign: "left", "& > :not(style)": { m: 1 } }}
            noValidate
            autoComplete="off"
          >
            <Box>
              <Typography
                variant="h6"
                component="h2"
                sx={{
                  textAlign: "center",
                  paddingTop: 5,
                  color: "#C66CDD",
                  paddingBottom: 5,
                }}
              >
                Información de contacto
              </Typography>
              {/* Campos del formulario */}
              <Typography>Nombre</Typography>
              <TextField
                sx={{ marginBottom: 2 }}
                size="small"
                fullWidth
                id="name"
                label="Nombre"
                variant="outlined"
              />
              <Typography>Apellido</Typography>
              <TextField
                sx={{ marginBottom: 2 }}
                size="small"
                fullWidth
                id="apellido"
                label="apellido"
                variant="outlined"
              />
              <Typography>Identificación</Typography>
              <TextField
                sx={{ marginBottom: 2 }}
                size="small"
                fullWidth
                id="dni"
                label="Identificación"
                variant="outlined"
              />
              <Typography>Teléfono</Typography>
              <TextField
                sx={{ marginBottom: 2 }}
                size="small"
                fullWidth
                id="mobile"
                label="Teléfono"
                variant="outlined"
              />
              <Typography>email</Typography>
              <TextField
                sx={{ marginBottom: 2 }}
                size="small"
                fullWidth
                id="email"
                label="Correo"
                variant="outlined"
              />
              <Typography>Contraseña</Typography>
              <TextField
                sx={{ marginBottom: 2 }}
                size="small"
                fullWidth
                id="outlined-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
              />
            </Box>
            <Box>
              <Typography
                variant="h6"
                component="h2"
                sx={{
                  textAlign: "center",
                  paddingTop: 2,
                  color: "#C66CDD",
                  paddingBottom: 2,
                }}
              >
                Información de contacto
              </Typography>
              <TextField
                sx={{ marginBottom: 2 }}
                size="small"
                fullWidth
                id="outlined-select-departamento"
                select
                label="Departamento"
                value={departamentoSeleccionado}
                onChange={handleDepartamentoSeleccionado}
              >
                <MenuItem value="">Seleccionar departamento</MenuItem>
                {departamentos.map((departamento) => (
                  <MenuItem
                    key={departamento.departamento}
                    value={departamento.departamento}
                  >
                    {departamento.nombre}
                  </MenuItem>
                ))}
              </TextField>

              <TextField
                sx={{ marginBottom: 2 }}
                size="small"
                fullWidth
                id="outlined-select-ciudad"
                select
                label="Ciudad"
                disabled={!departamentoSeleccionado}
                value={ciudades.nombre}
                onChange={() => {}}
              >
                {ciudades.map((ciudad) => (
                  <MenuItem key={ciudad.ciudad_id} value={ciudad.nombre}>
                    {ciudad.nombre}
                  </MenuItem>
                ))}
              </TextField>
              <Typography>Direccion</Typography>
              <TextField
                sx={{ marginBottom: 2 }}
                size="small"
                fullWidth
                id="direccion"
                label="direccion"
                variant="outlined"
              />
              <Typography>Indicaciones de entrega</Typography>
              <TextField
                sx={{ marginBottom: 2 }}
                size="small"
                fullWidth
                id="indicaciones"
                label="indicaciones"
                variant="outlined"
              />
            </Box>
            <Box>
              <Typography
                variant="h6"
                component="h2"
                sx={{
                  textAlign: "center",
                  paddingTop: 5,
                  color: "#C66CDD",
                  paddingBottom: 5,
                }}
              >
                Elige tu metodo de pago
              </Typography>
              <FormControl>
                <RadioGroup
                  aria-labelledby="demo-controlled-radio-buttons-group"
                  name="controlled-radio-buttons-group"
                  value={metodoPago}
                  onChange={handleMetodoPago}
                >
                  <FormControlLabel
                    value="Cuenta"
                    control={
                      <Radio
                        color="secondary"
                        sx={{
                          "& .MuiSvgIcon-root": {
                            fontSize: 28,
                          },
                        }}
                      />
                    }
                    label="Cuenta de ahorro"
                    sx={{
                      height: "60px",
                      width: "280px",
                      background: "#FBEEFF",
                      borderRadius: "10px",
                      marginBottom: "15px",
                    }}
                  />

                  <FormControlLabel
                    value="Tarjeta"
                    control={
                      <Radio
                        color="secondary"
                        sx={{
                          "& .MuiSvgIcon-root": {
                            fontSize: 28,
                          },
                        }}
                      />
                    }
                    label="Tarjeta de debito o credito"
                    sx={{
                      height: "60px",
                      width: "280px",
                      background: "#FBEEFF",
                      borderRadius: "10px",
                      marginBottom: "15px",
                    }}
                  />
                </RadioGroup>
              </FormControl>
              <Box>
                <img
                  src="/assets/img/bancosImg.png"
                  alt="Group-1"
                  border="0"
                  style={{
                    width: "219px",
                    height: "47px",
                  }}
                />
                <Typography>Pago con Palomma</Typography>
                <Typography sx={{ fontSize: "10px", color: "#C66CDD" }}>
                  Vincula tu cuenta de banco para débito automático
                </Typography>
                <Box my={4} sx={{ display: "flex" }}>
                  <Button
                    color="secondary"
                    variant="outlined"
                    sx={{
                      width: 150,
                      height: 55,
                      textTransform: "none",
                      padding: 0,
                      lineHeight: 1,
                      borderRadius: "10px",
                      marginRight: "10px",
                    }}
                  >
                    Tengo un código promocional{" "}
                  </Button>
                  <Button
                    color="secondary"
                    variant="outlined"
                    sx={{
                      width: 150,
                      height: 55,
                      textTransform: "none",
                      padding: 0,
                      lineHeight: 1,
                      borderRadius: "10px",
                    }}
                  >
                    Tengo un código amigo{" "}
                  </Button>
                </Box>
              </Box>
              <FormGroup>
                <FormControlLabel
                  required
                  control={<Checkbox size="small" color="secondary" />}
                  label={
                    <Typography sx={{ fontSize: "10px" }}>
                      Acepto términos y condiciones
                    </Typography>
                  }
                />
                <FormControlLabel
                  required
                  control={<Checkbox size="small" color="secondary" />}
                  label={
                    <Typography sx={{ fontSize: "10px" }}>
                      Autorizo el cobro automático de mi tarjeta
                    </Typography>
                  }
                />{" "}
              </FormGroup>
            </Box>
            <Box sx={{ display: "flex" }}>
              <Button
                sx={{
                  backgroundColor: "#C66CDD",
                  color: "#fff",
                  borderRadius: "10px",
                  width: "280px",
                  fontWeight: "400",
                  textTransform: "none",
                  fontSize: "14px",
                  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                  "&:hover": {
                    backgroundColor: "#803194",
                  },
                }}
              >
                Comprar
              </Button>
            </Box>
          </Box>
        </Paper>
      </Box>
    </>
  );
}

export default Checkout;
