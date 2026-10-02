const dns = require('dns');

dns.setServers([
  '8.8.8.8',
  '1.1.1.1'
]);

const app = require('./app');
const connectDB = require('./config/db');

const PORT = process.env.PORT || 5000;

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Database connection failed. Express server aborted:', error);
    process.exit(1);
  });
