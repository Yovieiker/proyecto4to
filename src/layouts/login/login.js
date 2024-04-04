import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

function SignIn() {
  const [email, setEmail] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [token, setToken] = useState("");
  const navigate = useNavigate();
  const [registro, setRegistro] = useState(false);
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:4000/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, contraseña }),
      });

      if (response.ok) {
        const data = await response.json();
        const token = data.token;
        const idUser = data.idUsuario;

        // Guardar el token en el estado del componente y en el localStorage
        setToken(token);
        localStorage.setItem("token", token);
        localStorage.setItem("idUser", idUser);

        //obtener informacion del checkout del usuario
        const responseCheckout = await fetch(
          `http://localhost:4000/api/users/${idUser}/profile`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: token,
            },
          }
        );
        if (responseCheckout.ok) {
          const dataCheckout = await responseCheckout.json();
          const idCheckout = dataCheckout.usuario.idcheckout;

          if (idCheckout == null) {
            localStorage.setItem("idCheckout", 0);
          } else {
            localStorage.setItem("idCheckout", idCheckout);
          }
        }
        // Redirigir al usuario a la página de inicio

        navigate("/");
        window.location.reload();
      } else {
        // Manejar el caso de error en la petición de login
        console.error("Error en la petición de login:", response.status);
      }
    } catch (error) {
      console.error("Error en la petición de login:", error);
    }
  };
  const registroUsuario = () => {
    if (registro) {
      setRegistro(false);
    } else {
      setRegistro(true);
    }
  };
  const handleRegistro = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:4000/api/users/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ nombre, apellido, email, contraseña }),
      });
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setRegistro(false);
      }
    } catch (error) {
      console.error("Error en la petición de registro:", error);
    }
  };
  const handleNombre = (e) => {
    const inputValue = e.target.value;
    // Restablecer el estado a una cadena vacía al borrar
    if (inputValue === "") {
      setNombre("");
      return;
    }
    // Permitir solo letras, espacios y algunos símbolos
    if (/^[^0-9]+$/.test(inputValue)) {
      setNombre(inputValue);
    }
  };

  const handleApellido = (e) => {
    const inputValue = e.target.value;
    // Restablecer el estado a una cadena vacía al borrar
    if (inputValue === "") {
      setApellido("");
      return;
    }
    // Permitir solo letras, espacios y algunos símbolos
    if (/^[^0-9]+$/.test(inputValue)) {
      setApellido(inputValue);
    }
  };
  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        {registro ? (
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Registrarse
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleRegistro}
              sx={{ mt: 3 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="given-name"
                    name="firstName"
                    required
                    fullWidth
                    id="firstName"
                    label="Nombre"
                    autoFocus
                    value={nombre}
                    onChange={handleNombre}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="lastName"
                    label="Apellido"
                    name="lastName"
                    value={apellido}
                    autoComplete="family-name"
                    onChange={handleApellido}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Correo"
                    name="email"
                    autoComplete="email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="Contraseña"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                    onChange={(e) => setContraseña(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={
                      <Checkbox value="allowExtraEmails" color="primary" />
                    }
                    label="Acepto terminos y condiciones"
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Registrarse
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link onClick={registroUsuario} href="#" variant="body2">
                    Ya estas registrado? Iniciar sesion
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        ) : (
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Iniciar sesion
            </Typography>
            <Box
              component="form"
              onSubmit={handleLogin}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Correo"
                name="email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)} // Vincular el campo de entrada al estado 'email'
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Contraseña"
                type="password"
                id="password"
                value={contraseña}
                onChange={(e) => setContraseña(e.target.value)} // Vincular el campo de entrada al estado 'password'
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Recordar"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Iniciar sesion
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Olvido de contraseña
                  </Link>
                </Grid>
                <Grid item>
                  <Link onClick={registroUsuario} href="#" variant="body2">
                    {"No estas registrado? Registrate"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        )}
      </Container>
    </ThemeProvider>
  );
}

export default SignIn;
