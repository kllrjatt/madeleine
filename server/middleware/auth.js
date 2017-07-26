
const session = require('express-session');
const RedisStore = require('connect-redis')(session);
const redis = require('redis');

const redisClient = redis.createClient({
  port: 6379,
  host: process.env.REDIS_HOST || 'localhost'
});


module.exports.verify = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/login');
};

module.exports.session = session({
  store: new RedisStore({
    client: redisClient
  }),
  secret: 'more laughter, more love, more life',
  resave: false,
  saveUninitialized: false
});
