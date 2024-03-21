const isAuthenticated = () => {
  const token = localStorage.getItem("token"); // Obtener el token de autenticación del localStorage
  return !!token; // Devuelve true si el token existe, de lo contrario, devuelve false
};
export default isAuthenticated;
