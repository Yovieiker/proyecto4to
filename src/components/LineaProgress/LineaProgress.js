import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';

const BorderLinearProgressMobile = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  backgroundColor: "#FBEEFF",
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === 'light' ? '#E1C2E9' : '#E1C2E9',
  },
}));
const BorderLinearProgressWeb = styled(LinearProgress)(({ theme }) => ({
  height: 25,
  borderRadius: 10,
  backgroundColor: "#FBEEFF",
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 10,
    backgroundColor: theme.palette.mode === 'light' ? '#E1C2E9' : '#E1C2E9',
  },
}));
export default function LineaProgress({value}) {
    return (
    <>
      <Box sx={{display:{md:"none"}}}>
        <br />
        <BorderLinearProgressMobile variant="determinate" value={value} />
      </Box>
      <Box sx={{display:{xs:"none",md:"block"}}}>
        <br />
        <BorderLinearProgressWeb variant="determinate" value={value} />
      </Box>
    </>
    );
  }