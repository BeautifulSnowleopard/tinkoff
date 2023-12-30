import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

const SearchField = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = () => {
        // Perform search logic here
        console.log('Search query:', searchQuery);
    };

    const handleChange = (event) => {
        setSearchQuery(event.target.value);
    };

    return (
        <div style={{ display: 'flex', margin: '0.51rem 0.63rem',  flexDirection: 'row',  alignItems: 'center', gap: '0.81rem', height: '2rem'}}>
            <TextField
                label="Введите название фильма"
                variant="outlined"
                value={searchQuery}
                onChange={handleChange}
                style={{ borderRadius: '0.5rem', width: '30rem'}}
            />
            <Button variant="contained" color='searchButton' onClick={handleSearch} style={{ width: "4.25rem", height: '3rem', fontSize: '0.75rem'}}>
                Искать
            </Button>
        </div>
    );
};

export default SearchField;
