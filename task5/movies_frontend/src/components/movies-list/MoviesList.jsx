import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import SearchField from '../search/SearchField';
import MovieCard from '../movie-card/MovieCard';
import { CircularProgress, Divider, Typography } from '@mui/material';


export default function MoviesList () 
{
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    setLoading(true);
    const fetchMovies = async () => {
      const url = 'http://localhost:3001/movies';
      try {
        let movies = await fetch(url).then(response => response.json());
        setMovies(movies);
      } catch (err) {
        alert('Ошибка в запросе имени автора: ' + err);
      } finally {
        setLoading(false);
      }
    };
    fetchMovies();
    setLoading(true);
  }, []);

  if (loading) return <CircularProgress />;

  const filteredMovies = movies.filter(movie => {
    return movie.title.toLowerCase()?.includes(searchQuery ? searchQuery?.toLowerCase() : []);
  });

  return (
    <Box
    sx={{
      marginTop: '0.44rem',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '100%',
      height: '85%'
    }}
  >
    <SearchField searchQuery={searchQuery} onChangeQuery={setSearchQuery} ></SearchField>
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
        {filteredMovies?.map(movie => {
          return <MovieCard id={movie.id} title={movie.title} tags={movie.genres} year={movie.year} />;
        })}
    </Box>
    <Divider />
    <Typography variant="body2" color="text.secondary" style={{paddingTop: '0.37rem', paddingBottom: '0.44rem'}}>
      Найдено фильмов: {filteredMovies.length}
    </Typography>
  </Box>
  );
};
