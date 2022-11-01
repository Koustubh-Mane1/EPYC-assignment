const { modals } = require('../../user-interface');

const messageNewCallback = async ({ shortcut, ack, client }) => {
  try {
    await ack();
    await client.views.open({
      trigger_id: shortcut.trigger_id,
      view: modals.newMessage(shortcut.message.text, shortcut.user.id),
    });
  } catch (error) {
    console.error(error);
  }
};

module.exports = { messageNewCallback };