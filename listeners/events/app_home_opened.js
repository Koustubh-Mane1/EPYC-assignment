const { reloadAppHome } = require('../../utilities');

const appHomeOpenedCallback = async ({ client, event, body }) => {
  if (event.tab !== 'home') {
    return;
  }
  try {
    if (event.view) {
      await reloadAppHome(
        client,
        event.user,
        body.team_id,
        event.view.private_metadata,
      );
      return;
    await reloadAppHome(client, event.user, body.team_id, '');
  } 
 
}
catch (error) {
    
    console.error(error);
  };
}
module.exports = { appHomeOpenedCallback };