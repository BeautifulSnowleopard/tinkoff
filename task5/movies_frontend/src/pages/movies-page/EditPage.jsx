import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Header from '../../components/header/Header.jsx';
import MoviesList from '../../components/movies-list/MoviesList.jsx';
import { Divider, Typography } from '@mui/material';
import EditForm from '../../components/edit-form/EditForm.jsx';

export function EditPage() {
  return (
    <>
      <Header />
      <Grid container component="main" columns="14" sx={{ height: '100vh', marginTop: '4.44rem' }}>
        <CssBaseline />
        <Grid item md={5} component={Paper} square>
          <MoviesList />
          <Divider />
          <Typography variant="body2" color="text.secondary" style={{paddingTop: '0.37rem', paddingBottom: '0.44rem'}}>
            Найдено фильмов: 3
          </Typography>
        </Grid>
        <Grid item md={9} component={Paper} square>
          <EditForm/>
        </Grid>
      </Grid>
    </>
  );
}
