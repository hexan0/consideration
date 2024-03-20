/*この関数をスケジューラーで回して接続を維持する。*/
function doRetain() {
  var json = {
    'type':'wake'
  };
  sendGlitch(GLITCH_URL, json);
}

function sendGlitch(uri, json) {
  var params = {
    'contentType' : 'application/json; charset=utf-8',
    'method' : 'post',
    'payload' : json,
    'muteHttpExceptions': true
  };

  response = UrlFetchApp.fetch(uri, params);
  Logger.log(response);
}

//GASからDiscordにテキストを送る
function sendMessageToDiscord(text, channel = 'consideration-bot'){
  var json = {
    'type' : 'text',
    'server_id' : 630765257815490582,
    'channel_name' : channel,
    'text' : text
  };
  sendGlitch(GLITCH_URL, json);
}
function sendMessageToDiscordTest(){
  sendMessageToDiscord("<:kuya:1092482658912698388>");
}
