import React from 'react';
import { Box, Typography, Button, Stack } from '@mui/material';

const HeroSection = () => {
    return (
        <Box
            sx={{
                height: '80vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                px: 4,
                textAlign: 'center',
                background: 'radial-gradient(ellipse at center, #1a1a2e 0%, #0d0d0d 100%)',
            }}
        >
            <Box>
                <Typography variant="h2" fontWeight="bold" gutterBottom>
                    Hey, I’m Grant <span role="img" aria-label="wave">👋</span>
                </Typography>
                <Typography variant="h5" color="text.secondary" gutterBottom>
                    I build full-stack applications that solve real-world problems.
                </Typography>
                <Stack direction="row" spacing={2} justifyContent="center" mt={4}>
                    <Button variant="contained" color="primary" href="#projects">
                        View My Work
                    </Button>
                    <Button
                        component="a"
                        href="/Grant_Pennington_Resume_2.pdf"
                        download
                        variant="contained"
                        color="primary"
                    >
                        Download Resume
                    </Button>
                </Stack>
            </Box>
        </Box>
    );
};

export default HeroSection;