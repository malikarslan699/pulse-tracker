const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Pulse Tracker Backend Running ✅' });
});

app.listen(port, () => {
  console.log(`🚀 Pulse Tracker running on port ${port}`);
});
