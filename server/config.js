// server/config.js
module.exports = {
  AUTH0_DOMAIN: 'omohammed.auth0.com',
  AUTH0_API_AUDIENCE: 'http://localhost:8083/api/', /* likely 'http://localhost:8083/api/' */
  MONGO_URI: process.env.MONGO_URI || 'mongodb://omohammed:Knaveangel7@ds153392.mlab.com:53392/uber4delivery'
};