

import React, { useState, useEffect } from 'react';
import './App.css';
import UrlShortener from './components/UrlShortener';
import ShortenedResults from './components/ShortenedResults';
import Statistics from './components/Statistics';
import { Box, Tabs, Tab, Container } from '@mui/material';

function generateShortCode() {
  return Math.random().toString(36).substring(2, 8);
}

const DEFAULT_VALIDITY_DAYS = 7;

function App() {
  const [urlMap, setUrlMap] = useState(() => {
    const data = localStorage.getItem('urlMap');
    return data ? JSON.parse(data) : {};
  });
  const [validityMap, setValidityMap] = useState(() => {
    const data = localStorage.getItem('validityMap');
    return data ? JSON.parse(data) : {};
  });
  const [statsMap, setStatsMap] = useState(() => {
    const data = localStorage.getItem('statsMap');
    return data ? JSON.parse(data) : {};
  });
  const [shortUrl, setShortUrl] = useState('');
  const [tab, setTab] = useState(0);

  useEffect(() => {
    localStorage.setItem('urlMap', JSON.stringify(urlMap));
    localStorage.setItem('validityMap', JSON.stringify(validityMap));
    localStorage.setItem('statsMap', JSON.stringify(statsMap));
  }, [urlMap, validityMap, statsMap]);

  // Redirection logic with stats and validity
  useEffect(() => {
    const hash = window.location.hash.replace('#/', '');
    if (hash && urlMap[hash]) {
      const now = Date.now();
      const validUntil = validityMap[hash];
      if (!validUntil || now < validUntil) {
        setStatsMap(prev => ({ ...prev, [hash]: (prev[hash] || 0) + 1 }));
        setTimeout(() => {
          window.location.replace(urlMap[hash]);
        }, 500);
      } else {
        alert('This short link has expired.');
      }
    }
    // eslint-disable-next-line
  }, []);

  const handleShorten = (longUrl, customCode, setError) => {
    // Uniqueness and validation
    let code = customCode || generateShortCode();
    if (urlMap[code]) {
      setError('Shortcode already exists. Choose another.');
      return;
    }
    // Prevent duplicate long URLs
    const existingCode = Object.entries(urlMap).find(([, url]) => url === longUrl)?.[0];
    if (!customCode && existingCode) {
      setShortUrl(window.location.origin + '/#/' + existingCode);
      setError('This URL is already shortened.');
      return;
    }
    const validUntil = Date.now() + DEFAULT_VALIDITY_DAYS * 24 * 60 * 60 * 1000;
    setUrlMap(prev => ({ ...prev, [code]: longUrl }));
    setValidityMap(prev => ({ ...prev, [code]: validUntil }));
    setShortUrl(window.location.origin + '/#/' + code);
    setError('');
  };

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Tabs value={tab} onChange={(_, v) => setTab(v)} centered sx={{ mb: 3 }}>
        <Tab label="Shorten URL" />
        <Tab label="Statistics" />
      </Tabs>
      {tab === 0 && (
        <>
          <UrlShortener onShorten={handleShorten} />
          <ShortenedResults urlMap={urlMap} shortUrl={shortUrl} validityMap={validityMap} />
        </>
      )}
      {tab === 1 && (
        <Statistics urlMap={urlMap} statsMap={statsMap} validityMap={validityMap} />
      )}
    </Container>
  );
}

export default App;
