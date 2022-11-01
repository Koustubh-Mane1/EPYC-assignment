const { newMessageModalCallback } = require('./new-message-modal');

module.exports.register = (app) => {
  app.view('new-message-modal', newMessageModalCallback);
};