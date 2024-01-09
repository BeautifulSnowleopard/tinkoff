import * as React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Form from '@mui/material/FormControl';
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';


export default function EditForm () 
{
  const [loading, setLoading] = useState(true);
  const { id: movieId } = useParams();
  const [movie, setMovie] = useState(null);

  const refreshPageAfterEdit = () => {
    window.location.reload();
  };

  useEffect(() => {
    setLoading(true);
    const fetchMovies = async id => {
      const url = `http://localhost:3001/movies/${movieId}`;
      try {
        const response = await fetch(url);
        const currentMovie = await response.json();
        setMovie(currentMovie);
      } catch (err) {
        alert('Error on fetch: ' + err);
      } finally {
        setLoading(false);
      }
    };
    fetchMovies(movieId);
  }, [movieId]);

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      await fetch(`http://localhost:3001/movies/${movieId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(movie),
      }).then(() => {});
    } catch (err) {
      alert(err);
    }

    refreshPageAfterEdit();
  };
  const collectedArray = e => {
    setMovie(prevState => {
      return { ...prevState, [e.target.name]: e.target.value.split(', ') };
    });
  };

  if (loading) return <CircularProgress />;
  const onChange = e => {
    setMovie(prevState => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  return (
    <Box
    sx={{
      my: 8,
      mx: 4,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}
  >
    <Form> 
      <Typography component="h1" variant="h5">
        Редактирование фильма
      </Typography>
      <Box component="form" noValidate sx={{ mt: 1 }}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="title"
          label="Название фильма"
          name="title"
          autoComplete="title"
          autoFocus
          onChange={onChange}
          value={movie?.title}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="year"
          label="Год выпуска"
          type="number"
          id="year"
          autoComplete="year"
          onChange={onChange}
          value={movie?.year}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="runtime"
          label="Продолжительность"
          type="number"
          id="runtime"
          autoComplete="runtime"
          onChange={onChange}
          value={movie?.runtime}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="director"
          label="Режиссер"
          type="text"
          id="director"
          autoComplete="director"
          onChange={onChange}
          value={movie?.director}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="actors"
          label="Актеры"
          type="text"
          id="actors"
          autoComplete="actors"
          onChange={collectedArray}
          value={movie?.actors}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="plot"
          label="Описание"
          type="text"
          id="plot"
          autoComplete="plot"
          onChange={onChange}
          value={movie?.plot}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="posterUrl"
          label="Постер"
          type="text"
          id="posterUrl"
          autoComplete="posterUrl"
          onChange={onChange}
          value={movie?.posterUrl}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="genres"
          label="Жанры"
          type="text"
          id="genres"
          autoComplete="genres"
          onChange={collectedArray}
          value={movie?.genres}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="rating"
          label="Рейтинг"
          type="number"
          id="rating"
          autoComplete="rating"
          onChange={onChange}
          value={movie?.rating}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          onClick={handleSubmit}
        >
          Сохранить
        </Button>
      </Box>
    </Form>
  </Box>
  );
};
