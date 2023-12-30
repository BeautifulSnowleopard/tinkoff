import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const MovieCard = ({ title, tags, year }) => {
    return (
        <Card sx={{ display: 'flex', height: '3.5rem'}}>
            <CardContent sx={{paddingTop: '0.44rem', paddingLeft: '0.94rem', paddingBottom: '0.44rem'}}>
                <Typography variant="body" component="div" noWrap>
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary" style={{paddingTop: '0.37rem', paddingBottom: '0.44rem'}}>
                    {year} <b color='text'>|</b> {tags}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default MovieCard;
