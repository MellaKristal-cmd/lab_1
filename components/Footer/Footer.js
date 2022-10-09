import * as React from 'react';
import Box from '@mui/material/Box';

export default function BoxSx() {
  return (
    <Box
      id="footer"
      sx={{
        width: "100%",
        height: 100,
        backgroundColor: 'primary.dark',
        '&:hover': {
          backgroundColor: 'primary.main',
          opacity: [0.9, 0.8, 0.7],
        },
        color: 'white',
        fontSize: "2rem",
        textAlign: 'center',
        padding: 2,
        boxSizing: 'border-box',
        
      }}
    >
      Footer
    </Box>
  );
}