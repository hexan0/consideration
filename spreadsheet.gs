function writeLog(data) {
  let sheetLog = SS.getSheetByName('log');
  //現在の日付
  var date = new Date();
  //var nowDate = Utilities.formatDate(date, 'Asia/Tokyo', 'yyyyMMdd: hhmmss');
  //最終行取得
  const lastRow = sheetLog.getLastRow();
  //新規行
  const newRow = lastRow + 1;
  //書き込み
  sheetLog.getRange(newRow, 1).setValue(date);
  sheetLog.getRange(newRow, 2).setValue(data.channel.guild.id);
  sheetLog.getRange(newRow, 3).setValue(data.channel.guild.name);
  sheetLog.getRange(newRow, 4).setValue(data.channel.id);
  sheetLog.getRange(newRow, 5).setValue(data.channel.name);
  sheetLog.getRange(newRow, 6).setValue(data.author.id);
  sheetLog.getRange(newRow, 7).setValue(data.author.username);
  sheetLog.getRange(newRow, 8).setValue(data.member.nickname);
  sheetLog.getRange(newRow, 9).setValue(data.content);
  
}

function receiveData(data){
  const server_id = data.channel.guild.id; //送信されたサーバーid
  //const server_id = '630765257815490582';//仮鯖id
  const server_name = data.channel.guild.name; //送信されたサーバーの名前
  try{
    let sheetServer = SS.getSheetByName(server_id);
    sheetServer.getLastRow();
  }catch{
    let sheetServer = makeServerSheet(server_id, server_name);
  }
  
  const channel_id = data.channel.id; //送信されたチャンネルid
  const channel_name = data.channel.name; //送信されたチャンネル名
  //if(channel_name !== 'consideration-bot') return;

  const user_id = data.author.id; //送信したユーザーid
  const user_name = data.author.username; //送信したユーザーの名前

  let text = data.content; //送信されたテキスト
  if(text[0] !== '/') return;
  text = text.slice(1); //コマンド用スラッシュの削除
  let texts = text.split(' '); //区切り文字' 'で配列化

  switch(texts[0]){
    case 'add':
      //if(!texts[2]) break;
      let result = addWatching(server_id, user_id, user_name, texts[1], texts[2]);
      sendMessageToDiscord("商品を登録しました！\n商品名：" + result.title + "\n価格：" + result.value);
      break;
    case 'del':
    case 'delete':
      break;
    case 'set':
    case 'setting':
      break;
    default:
  }
}
