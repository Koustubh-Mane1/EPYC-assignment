const { Message, Section, Button } = require('slack-block-builder');

module.exports = (postAt, channel, messageTitle, dueDate, messageID) => Message({
  channel,
  postAt,
  text: `${messageTitle}`,
}).blocks(
  Section().fields(['*message title*', '*Due date*', messageTitle, dueDate]),
).buildToObject();