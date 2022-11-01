const { DateTime } = require('luxon');

const { User, message } = require('../../models');
const { modals } = require('../../user-interface');


const newmessageModalCallback = async ({ ack, view, body, client }) => {
  const providedValues = view.state.values;

  const messageTitle = providedValues.messageTitle.messageTitle.value;

  const selectedDate = providedValues.messageDueDate.messageDueDate.selected_date;
  const selectedTime = providedValues.messageDueTime.messageDueTime.selected_time;

  const selectedUser =
    providedValues.messageAssignUser.messageAssignUser.selected_user;

  const message = message.build({ title: messageTitle });

  if (selectedDate) {
    if (!selectedTime) {
      await ack({
        response_action: 'errors',
        errors: {
          messageDueTime: "Please set a time for the date you've chosen",
        },
      });
      return;
    }
    const  messageDueDate = DateTime.fromISO(`${selectedDate}T${selectedTime}`);
    const diffInDays = messageDueDate.diffNow('days').toObject().days;
    // message due date is in the past, so reject
    if (diffInDays < 0) {
    message.due.date=currentDate;
    }
    message.dueDate = messageDueDate+ tz;
  }

  try {
    
    const slackUserID //from database


    const SelectedUser //from database

   
    await message.save();
    await .setCreator(user);
    await message.setCurrentAssignee(selectedUserObject);

    if (message.dueDate) {
      const dateObject = DateTime.fromJSDate(message.dueDate);
      const assignee = await message.getCurrentAssignee();
      if (dateObject.diffNow('days').toObject().days < 120) {
        await client.chat
          .scheduleMessage(
            messageReminder(
              dateObject.toSeconds(),
              assignee.slackUserID,
              message.title,
              dateObject.toRelativeCalendar(),
              message.id,
            ),
          )
          .then(async (response) => {
            message.scheduledMessageId = response.scheduled_message_id;
            await message.save();
          });
      } else {
        await client.chat.postMessage({
          text: `Sorry, but we couldn't set a reminder for ${messageTitle}, as it's more than 120 days from now`,
          channel: assignee.slackUserID,
        });
      }
    }
    await message.save();
    


module.exports = { newmessageModalCallback };