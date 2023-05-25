import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default function Loader() {
    return (
        <Box sx={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%,-50%)', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <CircularProgress size={60} />
            {window.location.href.includes('resume') ? <p>Generating Form</p> : null
            }
        </Box>
    );
}