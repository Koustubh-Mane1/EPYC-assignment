const { messageNewCallback } = require('./new_message');


module.exports.register = (app) => {
  app.shortcut('new_message', messageNewCallback);
};