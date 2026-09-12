const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 3000;

// Test Route to check if server is live
app.get('/', (req, res) => {
    res.send('Namaste! Real Astro Backend is Live and Running!');
});

// ZegoCloud Calling Route (Mock for now to keep server live)
app.post('/api/call-token', (req, res) => {
    const { userId, roomId } = req.body;
    res.json({ success: true, token: "live_token_setup_pending", roomId });
});

// UPI Payment Order Route
app.post('/api/pay', (req, res) => {
    res.json({ success: true, upiId: "bengaliblogger144@okhdfcbank", message: "Pay directly via UPI" });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
