import React from 'react';
import { Box, Grid, Typography, Container } from '@mui/material';
import ProjectCard from './ProjectCard';
import summarizerImage from '../assets/SmartSummarizer1.png';
import converterImage from '../assets/CodeConverter2.png';
import callLog from '../assets/CallLogMain.png';
import musicMe from '../assets/MusicMe.png';

const projects = [
  {
    title: 'Smart Note Summarizer',
    description: 'Summarizes text and documents using GPT-powered logic.',
    tech: ['React', 'Node.js', 'Express', 'OpenAI API', 'MongoDB', 'MUI'],
    image: summarizerImage,
    liveLink: 'https://smart-summarizer-five.vercel.app/',
    repoLink: 'https://github.com/GrantPennington/SmartSummarizer',
  },
  {
    title: 'Code Converter',
    description: 'Converts code snippets from one programming language to another using the OpenAI API.',
    tech: ['React', 'Node.js', 'Express', 'OpenAI API', 'MongoDB', 'MUI'],
    image: converterImage,
    liveLink: 'https://code-converter-app-zeta.vercel.app/',
    repoLink: 'https://github.com/GrantPennington/code-converter-app',
  },
  {
    title: 'Call Log Manager',
    description: 'A call log tracking system for a property management company to replace manual logging. Setup to be deployed on a local server, can be converted to cloud.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'MUI'],
    image: callLog,
    liveLink: null,
    repoLink: 'https://github.com/GrantPennington/CallLogV2',
  },
  {
    title: 'MusicMe (Capstone Project)',
    description: 'AI Powered playlist generation using the SpotifyAPI, wrapped into a full-stack web application.',
    tech: ['React', 'Node.js', 'Express', 'Spotify API', 'Python', 'ChakraUI'],
    image: musicMe,
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