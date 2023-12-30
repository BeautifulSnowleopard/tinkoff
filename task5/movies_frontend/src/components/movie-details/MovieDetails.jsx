import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import EditNoteIcon from '@mui/icons-material/EditNote';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Box, Grid, IconButton, Typography, List, ListItem, ListItemText, Button, CircularProgress } from '@mui/material';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const copyIdInClipboard = id => {
    void navigator.clipboard.writeText(id);
};

const MovieDetails = () => {
    const [loading, setLoading] = useState(true);

    const [showAllActors, setShowAllActors] = useState(false);

    const [isLiked, setLiked] = useState(false);

    const [movie, setMovie] = useState(null);
  
    const { id: movieId } = useParams();

    useEffect(() => {
        setLoading(true);
        const fetchMovies = async id => {
          const url = `http://localhost:3001/movies/${id}`;
          try {
            const response = await fetch(url);
            const currentMovie = await response.json();
            setMovie(currentMovie);
          } catch (err) {
            alert('Ошибка в запросе на получение данных для отрисовки карточки: ' + err);
          } finally {
            setLoading(false);
          }
        };
        fetchMovies(movieId);
      }, [movieId]);

    if (loading) return <CircularProgress />;

    const toggleShowAllActors = () => {
        setShowAllActors(!showAllActors);
    };

    const { actors, director, genres, id, plot, posterUrl, runtime, title, year, rating } = movie;
    const actorsArray = actors.split(',').map(actor => actor.trim());

    return (
        <Box sx={{ flexGrow: 1, paddingLeft: '0.5rem', paddingTop: '0.5rem' }}>
            <Grid container spacing={2}>
                <Grid item xs={8}>
                    <Typography component="span" sx={{ fontSize: '14px', mr: 2 }}>
                        Id: {id}
                    </Typography>
                    <IconButton component="span" sx={{ width: '14px', height: '14px' }} onClick={copyIdInClipboard(id)}>
                        <ContentCopyIcon />
                    </IconButton>
                </Grid>
                <Grid item xs={4} sx={{ display: 'flex', alignItems: 'center' }}>
                    <EditNoteIcon sx={{ color: '#000000' }} />
                    <Typography component="span" variant="h6" sx={{ color: '#000000', fontSize: '16px' }}>
                        Редактировать
                    </Typography>
                </Grid>
                <Grid item xs={3}>
                    <Box
                        component="img"
                        sx={{
                            height: 300,
                            width: 250,
                            maxHeight: { xs: 120, md: 300 },
                            maxWidth: { xs: 80, md: 225 },
                            objectFit: 'cover',
                            paddingLeft: '0.56rem',
                            paddingRight: '0rem',
                        }}
                        alt="Movie poster"
                        src={posterUrl}
                    />
                </Grid>
                <Grid item xs={8} style={{ paddingLeft: '0rem' }}>
                    <Box sx={{ display: 'flex', alignContent: 'left', flexDirection: 'column' }}>
                        <Typography variant="h5" sx={{ fontWeight: 'bold', fontSize: '24px' }}>
                            {title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {director}
                        </Typography>
                        <IconButton onClick={() => setLiked(prevState => !prevState)}>
                            <FavoriteIcon aria-label="add to favorites" color={isLiked ? 'primary' : 'inherit'} />
                        </IconButton>
                    </Box>
                    <Box sx={{ display: 'flex', alignContent: 'left', flexDirection: 'row' }}>
                        <Grid item xs={4}>
                            <Typography variant="h2" component="span" sx={{ fontSize: '16px', fontWeight: 'bold', display: 'block' }}>
                                Параметры
                            </Typography>
                            <Typography variant="body2" component="span" sx={{ fontSize: '16px', display: 'block' }}>
                                Год производства: {year}
                            </Typography>
                            <Typography variant="body2" component="span" sx={{ fontSize: '16px', display: 'block' }}>
                                Длительность: {runtime} минут
                            </Typography>
                            <Typography>Жанры: {genres ? genres.join(', ') : ''}</Typography>
                        </Grid>
                    </Box>
                </Grid>
                <Grid item xs={12}>
                    <Typography
                        variant="body2"
                        component="span"
                        sx={{ fontSize: '20px', fontWeight: 'bold', mt: '13px', display: 'block' }}
                    >
                        Описание
                    </Typography>
                    <br />
                    <Typography variant="body2" component="span" sx={{ fontSize: '16px', display: 'block' }}>
                        {plot}
                    </Typography>
                    <Box display="flex" alignItems="center">
                        <Typography variant="body2" component="span" sx={{ fontSize: '16px' }}>
                            Текущий рейтинг
                        </Typography>
                        <Typography
                            variant="h1"
                            component="span"
                            sx={{ display: 'flex', alignItems: 'center', fontSize: '32px', ml: '50px' }}
                        >
                            {rating}
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="body2" component="span" sx={{ fontSize: '16px', display: 'block' }}>
                        Актеры:
                    </Typography>
                    <List>
                        {actorsArray.slice(0, showAllActors ? actorsArray.length : 3).map((actor, index) => (
                            <ListItem key={index}>
                                <ListItemText primary={actor} />
                            </ListItem>
                        ))}
                    </List>
                    {actorsArray.length > 3 && (
                        <Button variant="outlined" onClick={toggleShowAllActors}>
                            {showAllActors ? 'Скрыть' : 'Показать все'}
                        </Button>
                    )}
                </Grid>
            </Grid>
        </Box>
    );
};

export default MovieDetails;
