const { Modal, Blocks } = require('slack-block-builder');

module.exports = (messageTitle) => Modal({ title: 'Message Sent', callbackId: 'message-sent-modal' })
  .blocks(
    Blocks.Section({
      text: `Message Sent`,
    }),
  ).buildToJSON();