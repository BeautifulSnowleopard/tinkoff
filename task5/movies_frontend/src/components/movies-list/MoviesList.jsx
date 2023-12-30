import * as React from 'react';
import Box from '@mui/material/Box';
import SearchField from '../search/SearchField';



export default function MoviesList () 
{
  return (
    <Box
    sx={{
      marginTop: '0.44rem',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}
  >
    <SearchField></SearchField>
  </Box>
  );
};
