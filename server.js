const express = require('express');
const cors = require('cors');
const ImageKit = require('imagekit');
const path = require('path');
const app = express();

const imagekit = new ImageKit({
    publicKey: "public_JITJrCsVKZfgISsvIkHWeGfjL2s=",
    privateKey: "private_mJCZ81AsFb5hKmcxJBbcV2v4GKE=",
    urlEndpoint: "https://ik.imagekit.io/8y7oyfmge"
});

app.use(cors()); // Enable CORS for all routes

// Serve static files from the "public" directory


app.get('/auth', (req, res) => {
    const authenticationParameters = imagekit.getAuthenticationParameters();
    res.json(authenticationParameters);
});



app.listen(3000, () => {
    console.log('Server is running on port 3000');
});