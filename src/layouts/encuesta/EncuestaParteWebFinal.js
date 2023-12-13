import { Box, Button, Paper, Typography } from "@mui/material";
import React from "react";
import LineaProgress from "../../components/LineaProgress/LineaProgress";
import BreadcrumbsWeb from "../../components/breadcrumbs/BreadcrumbsWeb";

function EncuestaParteWebFinal({ onNext, paso, barraProgress }) {
  const handleNext = () => {
    onNext();
  };
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
            <Box pt={6} px={10} sx={{ color: "#C66CDD" }}>
              <Typography> Paso {paso} de 10</Typography>
              <LineaProgress value={barraProgress} />
            </Box>
            <Box m={4}>
              <Typography variant="h6" sx={{ color: "#C66CDD" }}>
                Gracias por tu tiempo en completar esta encuesta
              </Typography>
              <Typography mb={2} mt={6}>
                Queremos darte la bienvenida a Sensebox
              </Typography>
              <Typography>
                Ahora puedes elegir un{" "}
                <Typography variant="span" sx={{ color: "#C66CDD" }}>
                  {" "}
                  producto especial
                </Typography>{" "}
                para tu cajita
              </Typography>
            </Box>
            <Box mb={15}>
              <Button
                onClick={handleNext}
                sx={{
                  borderRadius: "20px",
                  marginTop: "32px",
                  color: "#fff",
                  background: "#C66CDD",
                  height: 46,
                  width: 314,
                  textTransform: "none",
                  "&:hover": {
                    background: "#7c468a",
                  }
                }}
              >
                Elegir mi producto
              </Button>
            </Box>
          </Box>
        </Paper>
      </Box>
    </>
  );
}

export default EncuestaParteWebFinal;
