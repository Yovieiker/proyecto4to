import { Box, Typography } from "@mui/material";
import React from "react";
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
import LinearProgressWeb from "../LineaProgress/LinearPogressWeb";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";
import PriceCheckOutlinedIcon from "@mui/icons-material/PriceCheckOutlined";
export default function BreadcrumbsWeb({valor}) {
  const color = valor ? "#C66CDD" : "#000";
  return (
    <>
      <Box
        p={5}
        sx={{
          display: "flex",
          background: "#FCEFFF",
          textAlign: "center",
          justifyContent: "center",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <AssignmentOutlinedIcon sx={{color}} />
          <Typography sx={{color}} mr={1}>Encuesta</Typography>

          <LinearProgressWeb  />
        </Box>
        <Box  sx={{ display: "flex", alignItems: "center" }}>
          <AttachMoneyOutlinedIcon />
          <Typography mr={1}>Pago</Typography>
          <LinearProgressWeb />
        </Box>
        <Box ml={1} sx={{ display: "flex", alignItems: "center" }}>
          <PriceCheckOutlinedIcon />
          <Typography>Confirmación</Typography>
        </Box>
      </Box>
    </>
  );
}
