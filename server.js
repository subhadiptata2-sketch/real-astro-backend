const express = require('express');
const cors = require('cors');
const { generateToken04 } = require('zego-server-assistant');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 3000;

// Test Route to check if server is live
app.get('/', (req, res) => {
    res.send('Namaste! Real Astro Backend is Live and Running!');
});

// ZegoCloud Calling Route
app.post('/api/call-token', (req, res) => {
    const { userId, roomId } = req.body;
    try {
        // Aapki ZegoCloud Keys
        const appId = 1009897816;
        const secret = "dadeac077c1e4d9b65fab86dfa7c829c659a981b4f34503f12022135cbd80e27";
        
        const token = generateToken04(appId, userId.toString(), secret, 3600, "");
        res.json({ success: true, token, roomId });
    } catch (error) {
        res.status(500).json({ error: 'Call token failed' });
    }
});

// UPI Payment Order Route (Placeholder for App)
app.post('/api/pay', (req, res) => {
    res.json({ success: true, upiId: "bengaliblogger144@okhdfcbank", message: "Pay directly via UPI" });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
