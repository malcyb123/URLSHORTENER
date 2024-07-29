import React, { useState } from 'react';
import axios from 'axios';
import { Card, CardContent, Typography, TextField, Button, Box } from '@mui/material';


function App() {
  const [originalUrl, setOriginalUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');
  const [error, setError] = useState('');

  const handleUrlChange = (e) => {
    setOriginalUrl(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3003/url', { url: originalUrl });
      setShortUrl(`http://localhost:3003/${response.data.id}`);
      setError('');
    } catch (err) {
      console.error('Error:', err);
      setError('Failed to shorten the URL');
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(shortUrl);
    alert('Copied to clipboard!');
  };

  return (
    <div className="App" style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
          <Card style={{ maxWidth: '1000px', width: '100%', textAlign: 'center', padding: '20px' }}>
            <CardContent>
              <Typography variant="h4" component="h2" gutterBottom>
                URL Shortener
              </Typography>
              <form onSubmit={handleSubmit}>
                <Box mb={2}>
                  <TextField
                    fullWidth
                    label="Enter your URL Please"
                    variant="outlined"
                    value={originalUrl}
                    onChange={handleUrlChange}
                    required
                  />
                </Box>
                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  style={{ width: '100%' }}
                >
                  SHORTEN URL
                </Button>
              </form>
              {shortUrl && (
                <Box mt={3} p={2}>
                  <Typography>
                    Shortened URL: <a href={shortUrl} target="_blank" rel="noopener noreferrer">{shortUrl}</a>
                  </Typography>
                  <Button
                    variant="outlined"
                    onClick={handleCopy}
                    style={{ marginTop: '10px' }}
                  >
                    Copy
                  </Button>
                </Box>
              )}
              {error && <Typography color="error" style={{ marginTop: '10px' }}>{error}</Typography>}
            </CardContent>
          </Card>
        </div>
      );
    }
    export default App;