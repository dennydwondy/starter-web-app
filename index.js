const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from /public
app.use(express.static(path.join(__dirname, 'public')));

// Simple JSON API
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from starter-web-app!', time: new Date().toISOString() });
});

// Health check
app.get('/health', (req, res) => res.send('ok'));

app.listen(PORT, () => {
  console.log(`starter-web-app listening on http://localhost:${PORT}`);
});
