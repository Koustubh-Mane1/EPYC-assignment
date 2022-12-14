const { App } = require('@slack/bolt');
const { SocketModeClient } = require('@slack/socket-mode');


require("dotenv").config();
const { WebClient } = require('@slack/web-api');
const webClient = new WebClient(process.env.SLACK_BOT_TOKEN);
const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  appToken: process.env.SLACK_APP_TOKEN,
  socketMode: true,
});



const socketModeClient = new SocketModeClient({
  appToken: process.env.SLACK_APP_TOKEN,
  
});


(async () => {
  // Connect to Slack
  await socketModeClient.start();
})();

a
(async () => {
  // Start your app
  await app.start(process.env.PORT || 3000);

  console.log('⚡️ Bolt app is running!');
})();
