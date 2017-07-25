const app = require('./app');
const config = require('config');

const PORT = process.env.PORT || config.servers.madeleine.port;
const HOST = '0.0.0.0'; // outside access

app.listen(PORT, HOST, '', () => {
  /* eslint-disable no-console */
  console.log(`madeleine server listening on port ${PORT}!`);
  /* eslint-enable no-console */
});
