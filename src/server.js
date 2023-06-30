import app from './app.js';

const port = process.env.AAP_PORT || 3000;

// Listen on `port` and 0.0.0.0
app.listen(port, "0.0.0.0", function () {
  // ...
});
