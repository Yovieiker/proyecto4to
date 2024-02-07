import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';

const BorderLinearProgressWeb = styled(LinearProgress)(({ theme }) => ({
    width: "200px",
  height: 3,
  borderRadius: 5,
  backgroundColor: "#B35CCA",
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === 'light' ? '#B35CCA' : '#B35CCA',
  },
}));

export default function LinearProgressWeb() {
    return (
    <>
      <Box>
        <BorderLinearProgressWeb variant="determinate" value={100} />
      </Box>
    </>
    );
  }