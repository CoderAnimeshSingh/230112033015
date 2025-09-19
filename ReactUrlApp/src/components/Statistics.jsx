import React from 'react';
import { Paper, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

const Statistics = ({ urlMap, statsMap, validityMap }) => (
  <Paper elevation={2} sx={{ p: 2, mb: 3 }}>
    <Typography variant="h6" gutterBottom>URL Shortener Statistics</Typography>
    <TableContainer>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Short URL</TableCell>
            <TableCell>Original URL</TableCell>
            <TableCell>Clicks</TableCell>
            <TableCell>Valid Until</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Object.entries(urlMap).map(([code, url]) => (
            <TableRow key={code}>
              <TableCell>{window.location.origin + '/#/' + code}</TableCell>
              <TableCell>{url}</TableCell>
              <TableCell>{statsMap && statsMap[code] ? statsMap[code] : 0}</TableCell>
              <TableCell>{validityMap && validityMap[code] ? new Date(validityMap[code]).toLocaleString() : 'Unlimited'}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </Paper>
);

export default Statistics;
