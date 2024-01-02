import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Header from '../../components/header/Header.jsx';
import MoviesList from '../../components/movies-list/MoviesList.jsx';
import MovieDetails from '../../components/movie-details/MovieDetails.jsx';
import { useParams } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

export function MoviesPage() {
  const { id: movieId } = useParams();
  
  // Redirect to the first movie if no movie is selected
  if (!movieId || movieId === 'undefined' || isNaN(movieId)) {
    return <Navigate to="/movie/1" />;
  }

  return (
    <>
      <Header />
      <Grid container component="main" columns="14" sx={{ height: '100vh', marginTop: '4.44rem' }}>
        <CssBaseline />
        <Grid item md={5} component={Paper} square>
          <MoviesList />
        </Grid>
        <Grid item md={9} component={Paper} square>
          <MovieDetails/>
        </Grid>
      </Grid>
    </>
  );
}
