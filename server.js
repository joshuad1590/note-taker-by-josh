const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
const fs = require('fs');





app.listen(PORT, () => {
    console.log(`API server listening on ${PORT}!`);
});