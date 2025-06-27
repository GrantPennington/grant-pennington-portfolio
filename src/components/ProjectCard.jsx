import React from 'react';
import {
  Box,
  Typography,
  Chip,
  Stack,
  Button,
  CardActions,
  useTheme,
} from '@mui/material';

const ProjectCard = ({ title, description, tech, image, liveLink, repoLink }) => {
  const theme = useTheme();

  return (
    <Box
        sx={{
            width: 320,
            minHeight: 500,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            borderRadius: 4,
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(10px)',
            border: `1px solid ${theme.palette.primary.main}22`,
            boxShadow: `0 0 20px ${theme.palette.secondary.main}22`,
            p: 3,
            transition: 'all 0.3s ease-in-out',
            '&:hover': {
                boxShadow: `0 0 30px ${theme.palette.primary.main}88`,
                transform: 'translateY(-5px)',
                borderColor: theme.palette.primary.main,
            },
        }}
    >
      {image && (
        <Box
          component="img"
          src={image}
          alt={title}
          sx={{
            width: '100%',
            borderRadius: 2,
            mb: 2,
            height: 160,
            objectFit: 'cover',
          }}
        />
      )}

      <Typography variant="h6" fontWeight="bold" gutterBottom>
        {title}
      </Typography>

      <Typography variant="body2" color="text.secondary" gutterBottom>
        {description}
      </Typography>

      <Stack direction="row" gap={1} flexWrap="wrap" mt={1} mb={2}>
        {tech.map((item) => (
            <Chip
                key={item}
                label={item}
                size="small"
                sx={{
                    backgroundColor: theme.palette.primary.main,
                    color: theme.palette.primary.contrastText,
                    fontWeight: 'medium',
                    boxShadow: `0 0 5px ${theme.palette.primary.main}88`,
                }}
            />
        ))}
      </Stack>

      <CardActions sx={{ px: 0, mx: 0 }}>
        <Stack direction="row" spacing={1}>
          {liveLink && (
            <Button
                variant="outlined"
                size="small"
                href={liveLink}
                target="_blank"
                sx={{
                    borderColor: theme.palette.secondary.main,
                    color: theme.palette.secondary.main,
                    fontWeight: 'bold',
                    textTransform: 'none',
                    boxShadow: `0 0 10px ${theme.palette.secondary.main}55`,
                    '&:hover': {
                        backgroundColor: theme.palette.secondary.main,
                        color: theme.palette.secondary.contrastText,
                        boxShadow: `0 0 20px ${theme.palette.secondary.main}aa`,
                    },
                }}
            >
                Live Demo
            </Button>
          )}
          {repoLink && (
            <Button
                variant="outlined"
                size="small"
                href={repoLink}
                target="_blank"
                sx={{
                    borderColor: theme.palette.secondary.main,
                    color: theme.palette.secondary.main,
                    fontWeight: 'bold',
                    textTransform: 'none',
                    boxShadow: `0 0 10px ${theme.palette.secondary.main}55`,
                    '&:hover': {
                        backgroundColor: theme.palette.secondary.main,
                        color: theme.palette.secondary.contrastText,
                        boxShadow: `0 0 20px ${theme.palette.secondary.main}aa`,
                    },
                }}
            >
                Source Code
            </Button>
          )}
        </Stack>
      </CardActions>
    </Box>
  );
};

export default ProjectCard;