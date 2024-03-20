// discordからのvalueを受け取ってリプライ用メッセージを返す
function receiveDiscordValue(message, userId) {
  var resMsg = null;

  var values = message.split(' ');

  // []でくくったコマンドを判定
  if(values[0].match(/^\[(?=.*\])/i)){
    var fastValue = values[0].split(']')[1];
    var order = values[0].split(']')[0].substring(1);

    /* ここらへんにGASに書き込んだりコマンドを実行したりする処理を追加*/

    resMsg = 'glitchに返すメッセージを設定';
  }
  // 命令判定(glitchで返すもの以外)
  else if(values[0].match('<@'+ BOT_CLIENT +'>')){
    var fastValue = value[0].split('>')[1];

    if (fastValue == 'help'){
      resMsg = 'ヘルプメッセージを設定';
    }
  }

  if (resMsg == null)
    resMsg = '不正な処理です。'

  return resMsg;
}