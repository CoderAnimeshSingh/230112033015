import React from 'react';
import { Paper, Typography, List, ListItem, ListItemText, Link } from '@mui/material';

const ShortenedResults = ({ urlMap, shortUrl, validityMap }) => (
  <Paper elevation={2} sx={{ p: 2, mb: 3 }}>
    <Typography variant="h6" gutterBottom>Shortened URLs</Typography>
    {shortUrl && (
      <Typography sx={{ mb: 2 }}>
        <b>Latest Short URL:</b> <Link href={shortUrl} target="_blank" rel="noopener">{shortUrl}</Link>
      </Typography>
    )}
    <List>
      {Object.entries(urlMap).length === 0 && (
        <ListItem><ListItemText primary="No URLs shortened yet." /></ListItem>
      )}
      {Object.entries(urlMap).map(([code, url]) => (
        <ListItem key={code}>
          <ListItemText
            primary={
              <span>
                <Link href={`#/${code}`} target="_blank" rel="noopener">
                  {window.location.origin + '/#/' + code}
                </Link>
                {' → '}
                <Link href={url} target="_blank" rel="noopener">{url}</Link>
                {validityMap && validityMap[code] && (
                  <span style={{ marginLeft: 8, color: '#888' }}>
                    (valid until {new Date(validityMap[code]).toLocaleString()})
                  </span>
                )}
              </span>
            }
          />
        </ListItem>
      ))}
    </List>
  </Paper>
);

export default ShortenedResults;
