const express = require("express");
const httpsLocalhost = require("https-localhost")();
const app = express();

app.use(express.static(__dirname));

httpsLocalhost.getCerts().then(({ key, cert }) => {
  require("https").createServer({ key, cert }, app).listen(3000, () => {
    console.log("HTTPS server running at https://localhost:3000");
  });
});

