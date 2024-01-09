import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Header from '../../components/header/Header.jsx';
import MoviesList from '../../components/movies-list/MoviesList.jsx';
import AddForm from '../../components/add-form/AddForm.jsx';

export function AddPage() {

  return (
    <>
      <Header />
      <Grid container component="main" columns="14" sx={{ height: '100vh', marginTop: '4.44rem' }}>
        <CssBaseline />
        <Grid item md={5} component={Paper} square>
          <MoviesList />
        </Grid>
        <Grid item md={9} component={Paper} square>
          <AddForm/>
        </Grid>
      </Grid>
    </>
  );
}
