

const { Modal, Blocks, Elements } = require('slack-block-builder');
module.exports = (prefilledTitle, currentUser) => {
  const textInput = (messageTitle) => {
    if (messageTitle) {
      return Elements.TextInput({
        placeholder: 'Do this thing',
        actionId: 'messageTitle',
        initialValue: messageTitle,
      });
    }
    return Elements.TextInput({
      placeholder: 'Do this thing',
      actionId: 'messageTitle',
    });
  };

  return Modal({ title: 'Create new Message', submit: 'Send', callbackId: 'new-message-modal' })
    .blocks(
      Blocks.Input({ label: 'New Message', blockId: 'messsageTitle' }).element(
        textInput(prefilledTitle),
      ),
      Blocks.Input({ label: 'Assign user', blockId: 'messageAssignUser' }).element(
        Elements.UserSelect({
          actionId: 'messageAssignUser',
        }).initialUser(currentUser),
      ),
      Blocks.Input({ label: 'Message date', blockId: 'messageDate', optional: true }).element(
        Elements.DatePicker({
          actionId: 'messageDueDate',
        }),
      ),
      Blocks.Input({ label: 'Time', blockId: 'messageTime', optional: true }).element(
        Elements.TimePicker({
          actionId: 'messageTime',
        }),
      ),
    ).buildToJSON();
};