import React from 'react';
import { Box, Typography, Stack, Chip, Container } from '@mui/material';
import {
    SiJavascript,
    SiTypescript,
    SiPython,
    SiReact,
    SiNodedotjs,
    SiMongodb,
    SiMui,
    SiGithub,
    SiGit,
    SiPostman,
    SiVite,
    SiExpress,
    SiChakraui,
    SiAntdesign,
    SiCss3,
    SiVercel,
    SiRender
} from 'react-icons/si';
import { BiLogoVisualStudio } from "react-icons/bi";

const tech = [
  { name: 'React', icon: SiReact },
  { name: 'Node.js', icon: SiNodedotjs },
  { name: 'MongoDB', icon: SiMongodb },
  { name: 'Express', icon: SiExpress },
  { name: 'Vite', icon: SiVite },
  { name: 'MUI', icon: SiMui },
  { name: 'GitHub', icon: SiGithub },
];

const techGroups = [
  {
    title: 'Programming Languages',
    items: [
      { name: 'JavaScript', icon: SiJavascript },
      { name: 'TypeScript', icon: SiTypescript },
      { name: 'Python', icon: SiPython },
    ],
  },
  {
    title: 'Frameworks & Runtime',
    items: [
      { name: 'React', icon: SiReact },
      { name: 'Node.js', icon: SiNodedotjs },
      { name: 'Express', icon: SiExpress },
      { name: 'Vite', icon: SiVite },
    ],
  },
  {
    title: 'UI & Component Libraries',
    items: [
      { name: 'MUI', icon: SiMui },
      { name: 'ChakraUI', icon: SiChakraui },
      { name: 'AntDesign', icon: SiAntdesign },
      { name: 'CSS', icon: SiCss3 },
    ],
  },
  {
    title: 'Tools & Version Control',
    items: [
      { name: 'Git', icon: SiGit },
      { name: 'GitHub', icon: SiGithub },
      { name: 'VSCode', icon: BiLogoVisualStudio },
      { name: 'Postman', icon: SiPostman },
    ],
  },
  {
    title: 'Hosting & Deployment',
    items: [
        { name: 'Vercel', icon: SiVercel },
        { name: 'Render', icon: SiRender }, // not in react-icons, use FaCloud or omit icon
    ],
  }
];

const AboutMe = () => {
  return (
    <Box id="about" sx={{ py: 10, backgroundColor: 'background.default' }}>
      <Container>
        <Typography variant="h4" fontWeight="bold" gutterBottom textAlign="center">
          About Me
        </Typography>

        <Typography
            variant="body1"
            color="text.secondary"
            sx={{ maxWidth: '700px', mx: 'auto', mb: 6, textAlign: 'center' }}
        >
            I’m a full-stack software engineer who builds fast, modern web applications using clean code and scalable architecture. 
            I’m a fast learner who thrives on mastering new technologies and never shies away from a challenge. 
            I care deeply about performance, developer experience, and crafting tools that solve real problems.
        </Typography>

        <Typography
          variant="h6"
          fontWeight="medium"
          textAlign="center"
          gutterBottom
        >
          Tech Stack
        </Typography>

        {techGroups.map((group) => (
            <Box key={group.title} sx={{ mb: 4 }}>
                <Typography
                    variant="subtitle1"
                    fontWeight="bold"
                    textAlign="center"
                    sx={{ color: 'primary.main', mb: 2 }}
                >
                    {group.title}
                </Typography>

                <Stack direction="row" gap={2} justifyContent="center" flexWrap="wrap">
                {group.items.map(({ name, icon: Icon }) => (
                    <Chip
                    key={name}
                    icon={<Icon size={22} />}
                    label={name}
                    variant="outlined"
                    sx={{
                        gap: 1,
                        p:1,
                        height: 45,
                        fontSize: 16,
                        color: 'text.primary',
                        borderColor: 'primary.main',
                        backgroundColor: 'transparent',
                        '& .MuiChip-icon': { color: 'primary.main' },
                    }}
                    />
                ))}
                </Stack>
            </Box>
            ))}
      </Container>
    </Box>
  );
};

export default AboutMe;