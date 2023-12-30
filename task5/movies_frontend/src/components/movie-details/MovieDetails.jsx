import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import EditNoteIcon from '@mui/icons-material/EditNote';
import React, { useState } from 'react';
import { Box, Grid, IconButton, Typography, List, ListItem, ListItemText, Button } from '@mui/material';

const copyIdInClipboard = id => {
    void navigator.clipboard.writeText(id);
};

const MovieDetails = ({ id, title, actors, director, genres, plot, posterUrl, runtime, year, rating }) => {
    const [showAllActors, setShowAllActors] = useState(false);

    const toggleShowAllActors = () => {
        setShowAllActors(!showAllActors);
    };

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
                        {actors.slice(0, showAllActors ? actors.length : 3).map((actor, index) => (
                            <ListItem key={index}>
                                <ListItemText primary={actor} />
                            </ListItem>
                        ))}
                    </List>
                    {actors.length > 3 && (
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
