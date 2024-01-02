import * as React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Form from '@mui/material/FormControl';
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';


export default function AddForm () 
{
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState({});

  const navigate = useNavigate();

  const refreshPage = () => {
    navigate('/');
  };

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      await fetch(`http://localhost:3001/movies/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(movie),
      }).then(() => {});
    } catch (err) {
      alert(err);
    } finally {
        setLoading(false);
    }

    refreshPage();
  };
  
  const collectedArray = e => {
    setMovie(prevState => {
      return { ...prevState, [e.target.name]: e.target.value.split(', ') };
    });
  };

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
        Создание фильма
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
