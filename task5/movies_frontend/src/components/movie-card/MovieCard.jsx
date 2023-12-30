import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, Typography } from '@mui/material';

const MovieCard = ({ id, title, tags, year }) => {
    const [isClicked, setIsClicked] = useState(false);

    return (
        <Link to={`/movie/${id}`} style={{ textDecoration: "none" }}>
            <Card
                sx={{
                    display: 'flex',
                    height: '3.5rem',
                    '&:hover': { backgroundColor: 'lightgray' },
                }}
            >
                <CardContent sx={{ paddingTop: '0.44rem', paddingLeft: '0.94rem', paddingBottom: '0.44rem' }}>
                    <Typography variant="body" component="div" noWrap>
                        {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" style={{ paddingTop: '0.37rem', paddingBottom: '0.44rem' }}>
                        {year} <b color='text'>|</b> {tags.join(', ')}
                    </Typography>
                </CardContent>
            </Card>
        </Link>
    );
};

export default MovieCard;
