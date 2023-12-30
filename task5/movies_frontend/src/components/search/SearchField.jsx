import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

const SearchField = ({ searchQuery, onChangeQuery }) => {
    const handleSearch = () => {
        setSearchQuery('');
    };

    const handleChange = (event) => {
        onChangeQuery(event.target.value);
    };

    return (
        <div style={{ display: 'flex', paddingLeft: '0.56rem', paddingRight: '0.75rem', paddingTop: '0.62rem', paddingBottom: '0.94rem',  flexDirection: 'row',  alignItems: 'center', gap: '0.81rem', height: '2rem', width: "100%"}}>
            <TextField
                label="Введите название фильма"
                variant="outlined"
                value={searchQuery}
                onChange={handleChange}
                style={{ borderRadius: '0.5rem', width: '100%', height: '3rem', fontSize: '0.75rem'}}
            />
            <Button variant="contained" color='searchButton' onClick={handleSearch} style={{  height: '3rem', fontSize: '0.75rem'}}>
                Искать
            </Button>
        </div>
    );
};

export default SearchField;
