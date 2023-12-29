import React from 'react';
import { useParallax } from 'react-scroll-parallax';
import FullPage from './Wrappers/FullPage';
import { Box, Typography } from '@mui/material';

const Spinner = () => {
  const parallax = useParallax({
    rotate: [0, 360],
  });

  return (
    <FullPage>
      <Box
        ref={parallax.ref}
        sx={{
          width: '140px',
          height: '140px',
          backgroundColor: 'cornflowerblue',
          margin: 'auto',
          marginTop: '30%',
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontSize: '40px',
            transform: 'rotate(270deg)',
            textAlign: 'left',
          }}
        >
          Scroll down
        </Typography>
      </Box>
    </FullPage>
  );
};

export default Spinner;
