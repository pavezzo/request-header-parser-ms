var express = require('express')
var app = express()

app.get('/api/whoami', function(req, res) {
  res.json({
    ipaddress: req.ip,
    language: req.headers['accept-language'].split(",")[0],
    software: req.headers['user-agent'].split(/\((.*?)\)/)[1]
  });
});

app.listen(process.env.PORT || 8000);
