import { Box, Typography } from "@mui/material";
import React from "react";

export default function BreadCrumbsMobile({ valor, textTitle }) {
  const background = valor ? "#C66CDD" : "#D9D9D9";
  const color = valor ? "#fff" : "#000";

  return (
    <>
      <Box
        p={2}
        sx={{
          display: "flex",
          background: "#FCEFFF",
          textAlign: "left",
          justifyContent: "space-between",
        }}
      >
        <Typography sx={{ color: "#C66CDD" }}>{textTitle}</Typography>
        <Box sx={{ display: "flex" }}>
          <Box
            width={30}
            height={30}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "15px",
              color: "#fff",
              background: "#C66CDD",
            }}
          >
            1
          </Box>
          <Box
            mx={2}
            width={30}
            height={30}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "15px",
              color,
              background,
            }}
          >
            2
          </Box>
          <Box
            width={30}
            height={30}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "15px",
              color: "#000",
              background: "#D9D9D9",
            }}
          >
            3
          </Box>
        </Box>
      </Box>
    </>
  );
}
