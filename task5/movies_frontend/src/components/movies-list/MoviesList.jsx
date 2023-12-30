import * as React from 'react';
import Box from '@mui/material/Box';
import SearchField from '../search/SearchField';
import MovieCard from '../movie-card/MovieCard';


export default function MoviesList () 
{
  return (
    <Box
    sx={{
      marginTop: '0.44rem',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '100%',
    }}
  >
    <SearchField></SearchField>
    <Box
    sx={{
      paddingTop: '1.44rem',
      display: 'flex',
      flexDirection: 'column',
      gap: '0.5rem',
      width: '100%',
      paddingLeft: '0.56rem',
      paddingRight: '0.75rem'
    }}>
      <MovieCard title="Movie 1" tags="Боевик, комедия" year='2017'></MovieCard>
      <MovieCard title="Movie 1" tags="Комедия, не боевик" year='2019'></MovieCard>
      <MovieCard title="ДЛИИИИИНОЕЕЕЕЕ НАЗВАНИЕ ААААААААААААААААААААААААААААААААААА" tags="Комедия, не боевик" year='2019'></MovieCard>
    </Box>
  </Box>
  );
};
