import React from 'react';
import { Box, Typography, Container, Stack, IconButton } from '@mui/material';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const ContactSection = () => {
  return (
    <Box id="contact" sx={{ py: 10, backgroundColor: 'background.paper' }}>
      <Container sx={{ textAlign: 'center' }}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
            Currently Looking for New Opportunities
        </Typography>

        <Typography variant="body1" color="text.secondary" mb={4}>
            I’m actively seeking full-time roles as a full-stack software engineer. If you're hiring or think I’d be a good fit for your team, I’d love to hear from you.
        </Typography>


        <Typography
            variant="h6"
            sx={{
                color: 'primary.main',
                mb: 2,
                fontWeight: 'bold',
            }}
        >
            Reach out: grant_pennington8@outlook.com
        </Typography>

        <Stack direction="row" spacing={2} justifyContent="center">
          <IconButton
            href="https://github.com/GrantPennington"
            target="_blank"
            sx={{ color: 'primary.main' }}
          >
            <FaGithub size={24} />
          </IconButton>
          <IconButton
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            sx={{ color: 'primary.main' }}
          >
            <FaLinkedin size={24} />
          </IconButton>
        </Stack>
      </Container>
    </Box>
  );
};

export default ContactSection;