import {
  Box,
  Breadcrumbs,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  IconButton,
  Link,
  MenuItem,
  Paper,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import BreadcrumbsWeb from "../../components/breadcrumbs/BreadcrumbsWeb";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import PaymentsIcon from "@mui/icons-material/Payments";
import Modal from "@mui/material/Modal";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "996px",
  bgcolor: "background.paper",
  boxShadow: 24,
  display: "flex",
  borderRadius: "24px ",
};
function CheckoutWeb() {
  const [departamentos, setDepartamentos] = useState([]);
  const [ciudades, setCiudades] = useState([]);
  const [departamentoSeleccionado, setDepartamentoSeleccionado] = useState("");
  const [metodoPago, setMetodoPago] = useState("");
  const [showContactInfo, setShowContactInfo] = useState(true);
  const [showPaymentMethod, setShowPaymentMethod] = useState(false);
  const [buttonText, setButtonText] = useState("Siguiente");
  const [userData, setUserData] = useState([]);
  const [montoEnvio, setMontoEnvio] = useState(0);
  const [cedula, setCedula] = useState("");
  const [telefono, setTelefono] = useState("");
  const [ciudad, setCiudad] = useState("");
  const [direccion, setDireccion] = useState("");
  const [edad, setEdad] = useState(0);
  const [open, setOpen] = useState(false);

  const precioCaja = 55900;
  const idUsuario = parseInt(localStorage.getItem("idUser"));
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    window.location.href = "/";
  };
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
          console.log(data);
        } else {
          setCiudades([]);
        }
      } catch (error) {
        console.error("Error al obtener las ciudades:", error);
      }
    };

    fetchCiudades();
  }, [departamentoSeleccionado]);

  useEffect(() => {
    const getUsuario = async () => {
      try {
        const response = await fetch(
          `http://localhost:4000/api/users/${idUsuario}`
        );
        const dataUser = await response.json();
        setUserData(dataUser);
      } catch (error) {
        console.error("Error al obtener los datos del usuario:", error);
      }
    };
    getUsuario();
  }, []);

  const handleDepartamentoSeleccionado = (event) => {
    const selectedDepartamento = event.target.value;
    const departamento = departamentos.find(
      (dep) => dep.departamento === selectedDepartamento
    );

    if (departamento) {
      setDepartamentoSeleccionado(departamento.departamento);
      console.log(departamento.departamento);
    } else {
      setDepartamentoSeleccionado("");
    }
  };
  const handlePrecioEnvio = (precio, ciudad) => {
    // Reemplazar "." por "," para separar miles
    const precioConMiles = precio.replace(".", ",");

    // Convertir el string a número
    const monto = parseFloat(precioConMiles);

    // Multiplicar por 1000 para obtener el valor en pesos
    const montoEnPesos = monto * 1000;

    setMontoEnvio(montoEnPesos);

    setCiudad(ciudad);
  };

  const handleMetodoPago = (event) => {
    setMetodoPago(event.target.value);
  };

  const handleCheckout = async (data) => {
    try {
      const response = await fetch("http://localhost:4000/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Datos de la compra:", data);
      } else {
        console.error("Error en la petición de checkout:", response.status);
      }
    } catch (error) {
      console.error("Error en la petición de checkout:", error);
    }
  };

  const handleNextClick = () => {
    if (!showPaymentMethod) {
      setShowContactInfo(false);
      setShowPaymentMethod(true);
      setButtonText("Comprar");
    } else {
      const data = {
        id_usuario: idUsuario,
        total: precioCaja,
        cedula: cedula,
        telefono: telefono,
        departamento: departamentoSeleccionado,
        ciudad: ciudad,
        direccion: direccion,
        metodo_pago: metodoPago,
        edad: edad,
      };
      console.log("Datos de la compra:", data);
      handleCheckout(data);
      handleOpen();
    }
  };

  const handleBackClick = () => {
    if (!showContactInfo) {
      setShowContactInfo(true);
      setShowPaymentMethod(false);
      setButtonText("Siguiente");
    }
  };
  const handleCedulaChange = (e) => {
    const inputValue = e.target.value;
    // Validar que solo se ingresen números en el campo de identificación
    if (/^\d*$/.test(inputValue)) {
      setCedula(inputValue);
    }
  };
  const handletelefonoChange = (e) => {
    const inputValue = e.target.value;
    // Validar que solo se ingresen números en el campo de telefono
    if (/^\d*$/.test(inputValue)) {
      setTelefono(inputValue);
    }
  };
  return (
    <>
      <BreadcrumbsWeb valor={true} />

      <Box
        p={3}
        sx={{
          background:
            "linear-gradient(0deg, #f0689a 0%, #f0689a 50%, #903763 100%)",
        }}
      >
        <Paper sx={{ padding: "24px", borderRadius: "20px" }}>
          <Box px={2} pb={2} sx={{ display: "flex" }}>
            <Box sx={{ display: "flex" }}>
              <IconButton onClick={handleBackClick}>
                <ArrowBackOutlinedIcon />
              </IconButton>
            </Box>
            <Box ml={1}>
              <Typography
                variant="h2"
                component="h2"
                sx={{ textAlign: "left", paddingTop: 5, color: "#C66CDD" }}
              >
                Checkout
              </Typography>
              <Breadcrumbs aria-label="breadcrumb">
                <Link underline="hover" color="#C66CDD" href="/">
                  HomePage
                </Link>
                <Link underline="hover" color="#C66CDD" href="/">
                  CajaSorpresa
                </Link>
                <Link
                  underline="hover"
                  color="text.primary"
                  href="/"
                  aria-current="page"
                >
                  Checkout
                </Link>
              </Breadcrumbs>
            </Box>
          </Box>
          <Box
            mx={4}
            component="form"
            sx={{ textAlign: "left", "& > :not(style)": { m: 1 } }}
            noValidate
            autoComplete="off"
          >
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              {showContactInfo && (
                <Box>
                  <Typography
                    variant="h6"
                    component="h2"
                    sx={{
                      textAlign: "left",
                      color: "#C66CDD",
                      paddingBottom: 1,
                    }}
                  >
                    Información de contacto
                  </Typography>
                  {/* Campos del formulario */}
                  <Box>
                    <Box sx={{ display: "flex" }}>
                      <Box width={340}>
                        <Typography>Identificación</Typography>
                        <TextField
                          color="secondary"
                          sx={{ marginBottom: 2 }}
                          size="small"
                          fullWidth
                          id="dni"
                          variant="outlined"
                          inputMode="numeric"
                          pattern="[0-9]*"
                          value={cedula}
                          onChange={handleCedulaChange}
                        />
                        <Typography>Nombre</Typography>
                        <TextField
                          color="secondary"
                          sx={{ marginBottom: 2 }}
                          size="small"
                          fullWidth
                          id="name"
                          variant="outlined"
                          value={userData.nombre}
                        />
                        <Typography>email</Typography>
                        <TextField
                          color="secondary"
                          sx={{ marginBottom: 2 }}
                          size="small"
                          fullWidth
                          id="email"
                          variant="outlined"
                          value={userData.email}
                        />
                      </Box>
                      <Box ml={5} width={340}>
                        <Typography>Apellido</Typography>
                        <TextField
                          color="secondary"
                          sx={{ marginBottom: 2 }}
                          size="small"
                          fullWidth
                          id="apellido"
                          variant="outlined"
                          value={userData.apellido}
                        />
                        <Typography>Edad</Typography>
                        <TextField
                          color="secondary"
                          sx={{ marginBottom: 2 }}
                          size="small"
                          fullWidth
                          id="edad"
                          label="edad"
                          type="number"
                          onChange={(e) => setEdad(e.target.value)}
                        />
                        <Typography>Teléfono</Typography>
                        <TextField
                          color="secondary"
                          sx={{ marginBottom: 2 }}
                          size="small"
                          fullWidth
                          id="mobile"
                          label="Teléfono"
                          variant="outlined"
                          value={telefono}
                          onChange={handletelefonoChange}
                        />
                      </Box>
                    </Box>
                    <Typography
                      variant="h6"
                      component="h2"
                      sx={{
                        textAlign: "left",
                        paddingTop: 2,
                        color: "#C66CDD",
                        paddingBottom: 2,
                      }}
                    >
                      Información de entrega
                    </Typography>
                    <Box sx={{ display: "flex" }}>
                      <Box width={120}>
                        <Typography>Estado</Typography>

                        <TextField
                          color="secondary"
                          sx={{ marginBottom: 2 }}
                          size="small"
                          fullWidth
                          id="outlined-select-departamento"
                          select
                          label="Dpto"
                          value={departamentoSeleccionado}
                          onChange={handleDepartamentoSeleccionado}
                        >
                          <MenuItem value="">Seleccionar estado</MenuItem>
                          {departamentos.map((departamento) => (
                            <MenuItem
                              key={departamento.departamento}
                              value={departamento.departamento}
                            >
                              {departamento.nombre}
                            </MenuItem>
                          ))}
                        </TextField>
                      </Box>

                      <Box mx={3} width={167}>
                        <Typography>Ciudad</Typography>

                        <TextField
                          color="secondary"
                          sx={{ marginBottom: 2 }}
                          size="small"
                          fullWidth
                          id="outlined-select-ciudad"
                          select
                          label="Ciudad"
                          disabled={!departamentoSeleccionado}
                          value={ciudades.nombre}
                        >
                          {ciudades.map((ciudad) => (
                            <MenuItem
                              key={ciudad.ciudad_id}
                              value={ciudad.nombre}
                              onClick={() =>
                                handlePrecioEnvio(ciudad.precio, ciudad.nombre)
                              }
                            >
                              {ciudad.nombre}
                            </MenuItem>
                          ))}
                        </TextField>
                      </Box>
                      <Box>
                        <Typography>Direccion</Typography>
                        <TextField
                          color="secondary"
                          sx={{ marginBottom: 2 }}
                          size="small"
                          fullWidth
                          id="direccion"
                          label="direccion"
                          variant="outlined"
                          onChange={(e) => setDireccion(e.target.value)}
                        />
                      </Box>
                      <Box ml={3} width={142}>
                        <Typography>Punto de referencia</Typography>
                        <TextField
                          color="secondary"
                          sx={{ marginBottom: 2 }}
                          size="small"
                          id="indicaciones"
                          label="indicaciones"
                          variant="outlined"
                        />
                      </Box>
                    </Box>
                  </Box>
                </Box>
              )}
              {showPaymentMethod && (
                <Box mx={3}>
                  <Typography
                    variant="h6"
                    component="h2"
                    sx={{
                      textAlign: "left",
                      paddingTop: 1,
                      color: "#C66CDD",
                      paddingBottom: 5,
                    }}
                  >
                    Elige tu metodo de pago
                  </Typography>
                  <Box mx={2}>
                    <FormControl>
                      <RadioGroup
                        aria-labelledby="demo-controlled-radio-buttons-group"
                        name="controlled-radio-buttons-group"
                        value={metodoPago}
                        onChange={handleMetodoPago}
                        sx={{
                          flexDirection: "row",
                          borderTop: "1px solid #C66CDD",
                          borderBottom: "1px solid #C66CDD",
                        }}
                      >
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
                          label={
                            <>
                              <Box sx={{ display: "flex" }}>
                                <PaymentsIcon />
                                <Typography ml={1}>
                                  Tarjeta de debito o credito
                                </Typography>
                              </Box>
                            </>
                          }
                          sx={{
                            height: "60px",
                            width: "280px",
                            borderRadius: "10px",
                            marginBottom: "15px",
                          }}
                        />
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
                          label={
                            <>
                              <Box sx={{ display: "flex" }}>
                                <AccountBalanceIcon />
                                <Typography ml={1}>Cuenta de ahorro</Typography>
                              </Box>
                            </>
                          }
                          sx={{
                            height: "60px",
                            width: "280px",
                            borderRadius: "10px",
                            marginBottom: "15px",
                          }}
                        />
                      </RadioGroup>
                    </FormControl>
                    <Box>
                      <Box sx={{ display: "flex" }}>
                        <Box mr={4}>
                          <Typography>Pago con Palomma</Typography>
                          <Typography
                            sx={{ fontSize: "10px", color: "#C66CDD" }}
                          >
                            Vincula tu cuenta de banco para débito automático
                          </Typography>
                        </Box>
                        <img
                          src="/assets/img/bancosImg.png"
                          alt="Group-1"
                          border="0"
                          style={{
                            width: "219px",
                            height: "47px",
                          }}
                        />
                      </Box>
                      <Box my={4} sx={{ display: "flex" }}>
                        <Button
                          color="secondary"
                          variant="outlined"
                          sx={{
                            width: 180,
                            height: 48,
                            textTransform: "none",
                            padding: 0,
                            lineHeight: 1,
                            borderRadius: "10px",
                            marginRight: "32px",
                            background: "#FDF6FF",
                          }}
                        >
                          Tengo un código amigo{" "}
                        </Button>
                        <Button
                          color="secondary"
                          variant="outlined"
                          sx={{
                            width: 220,
                            height: 48,
                            textTransform: "none",
                            padding: 0,
                            lineHeight: 1,
                            borderRadius: "10px",
                            background: "#FDF6FF",
                          }}
                        >
                          Tengo un código promocional{" "}
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
                </Box>
              )}
              <Box
                ml={6}
                mt={4}
                sx={{ border: "1px solid  #C66CDD", borderRadius: "20px" }}
              >
                <Box width={443} height="auto">
                  <Typography
                    my={4}
                    ml={4}
                    variant="h5"
                    sx={{
                      textAlign: "left",

                      color: "#C66CDD",
                    }}
                  >
                    Resumen de compra
                  </Typography>
                  <Box
                    mx={4}
                    p={1}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "start",
                      borderTop: "1px solid #efe7ec",
                      borderBottom: "1px solid #efe7ec",
                    }}
                  >
                    <Box>
                      <img
                        src="https://admin.sensebox.com.co/uploads/planes/1/imagen_1695741617.webp"
                        alt="imagen"
                        style={{
                          width: "95px",
                          height: "95px",
                        }}
                      />
                    </Box>
                    <Box ml={4}>
                      <Typography>Caja sorpresa </Typography>
                      <Typography>55.900 BS </Typography>
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
                      <Typography>subtotal </Typography>
                      <Typography>{precioCaja - montoEnvio} BS </Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <Typography>costo de envio</Typography>
                      <Typography>{montoEnvio}</Typography>
                    </Box>
                  </Box>
                  <Box
                    mx={4}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <Typography>Total</Typography>
                    <Typography>{precioCaja}</Typography>
                  </Box>
                </Box>
              </Box>
            </Box>

            <Box sx={{ display: "flex" }}>
              <Button
                onClick={handleNextClick}
                sx={{
                  marginLeft: 3,
                  height: 64,
                  marginTop: 2,
                  marginBottom: 4,
                  backgroundColor: "#C66CDD",
                  color: "#fff",
                  borderRadius: "10px",
                  width: "443px",
                  fontWeight: "400",
                  textTransform: "none",
                  fontSize: "24px",
                  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                  "&:hover": {
                    backgroundColor: "#803194",
                  },
                }}
              >
                {buttonText}
              </Button>
            </Box>
          </Box>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Box sx={{ width: "245px", p: 12 }}>
                <Typography
                  sx={{ mb: 8 }}
                  id="modal-modal-title"
                  variant="h6"
                  component="h2"
                >
                  Ya eres parte de esta maravillosa experiencIa
                </Typography>
                <Typography
                  variant="h4"
                  id="modal-modal-description"
                  sx={{ my: 10, color: "#B35CCA" }}
                >
                  TU COMPRA FUE REALIZADA CON ÉXITO
                </Typography>
                <Button
                  variant="outlined"
                  onClick={handleClose}
                  sx={{
                    background: "#C66CDD",
                    color: "#fff",
                    mt: 2,
                    width: "290px",
                    height: "60px",
                    borderRadius: "32px",
                  }}
                >
                  Descubre Sensebox
                </Button>
              </Box>
              <Box>
                <img
                  src="/assets/img/gracias.png"
                  alt="imagen"
                  style={{ width: "100%", height: "100%" }}
                />
              </Box>
            </Box>
          </Modal>
        </Paper>
      </Box>
    </>
  );
}

export default CheckoutWeb;
