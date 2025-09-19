import React, { useState } from 'react';
import { Box, Button, TextField, Typography, Paper, Alert } from '@mui/material';

function isValidUrl(url) {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

const UrlShortener = ({ onShorten }) => {
  const [longUrl, setLongUrl] = useState('');
  const [customCode, setCustomCode] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    if (!longUrl) {
      setError('Please enter a URL.');
      return;
    }
    if (!isValidUrl(longUrl)) {
      setError('Invalid URL format.');
      return;
    }
    if (customCode && !/^[a-zA-Z0-9_-]{3,16}$/.test(customCode)) {
      setError('Custom code must be 3-16 characters, alphanumeric, dash or underscore.');
      return;
    }
    onShorten(longUrl, customCode, setError);
    setLongUrl('');
    setCustomCode('');
  };

  return (
    <Paper elevation={3} sx={{ p: 3, mb: 3 }}>
      <Typography variant="h5" gutterBottom>Shorten a URL</Typography>
      <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <TextField
          label="Long URL"
          value={longUrl}
          onChange={e => setLongUrl(e.target.value)}
          required
          fullWidth
        />
        <TextField
          label="Custom Shortcode (optional)"
          value={customCode}
          onChange={e => setCustomCode(e.target.value)}
          fullWidth
          helperText="3-16 chars, a-z, A-Z, 0-9, dash, underscore"
        />
        <Button type="submit" variant="contained">Shorten</Button>
        {error && <Alert severity="error">{error}</Alert>}
      </Box>
    </Paper>
  );
};

export default UrlShortener;
