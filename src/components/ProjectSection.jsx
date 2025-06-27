import React from 'react';
import { Box, Grid, Typography, Container } from '@mui/material';
import ProjectCard from './ProjectCard';
import summarizerImage from '../assets/SmartSummarizer1.png';
import converterImage from '../assets/CodeConverter2.png';

const projects = [
  {
    title: 'Smart Note Summarizer',
    description: 'Summarizes text and documents using GPT-powered logic.',
    tech: ['React', 'Node.js', 'Express', 'OpenAI API', 'MongoDB'],
    image: summarizerImage,
    liveLink: 'https://smart-summarizer-five.vercel.app/',
    repoLink: 'https://github.com/GrantPennington/SmartSummarizer',
  },
  {
    title: 'Code Converter',
    description: 'Converts code snippets from one programming language to another using the OpenAI API.',
    tech: ['React', 'Node.js', 'Express', 'OpenAI API', 'MongoDB'],
    image: converterImage,
    liveLink: 'https://code-converter-app-zeta.vercel.app/',
    repoLink: 'https://github.com/GrantPennington/code-converter-app',
  },
  {
    title: 'MusicMe (Capstone Project)',
    description: 'AI Powered playlist generation using the SpotifyAPI, wrapped into a full-stack web application.',
    tech: ['React', 'Node.js', 'Express', 'Spotify API', 'Python'],
    image: converterImage,
    liveLink: null,
    repoLink: 'https://github.com/GrantPennington/MusicMe/tree/main',
  },
];

const ProjectsSection = () => {
  return (
    <Box id="projects" sx={{ py: 8, backgroundColor: 'background.default' }}>
        <Container>
            <Typography variant="h4" fontWeight="bold" gutterBottom textAlign="center">
                Projects
            </Typography>
            <Grid container spacing={4} justifyContent="center">
            {projects.map((project, index) => (
                <Grid item key={index}>
                    <ProjectCard {...project} />
                </Grid>
            ))}
            </Grid>
        </Container>
    </Box>
  );
};

export default ProjectsSection;