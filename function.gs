//サーバーシート作成
function makeServerSheet(server_id, server_name) {
  //let newSheet = SS.getActiveSpreadSheet(server_id, 2); //3番目に新しいシート
  let newSheet = SS.insertSheet();
  newSheet.setName(server_id);
  newSheet.getRange(1, 1).setValue("server_id");
  newSheet.getRange(1, 2).setValue(server_id);
  newSheet.getRange(2, 1).setValue("server_name");
  newSheet.getRange(2, 2).setValue(server_name);
  newSheet.getRange(10, 1).setValue("time");
  newSheet.getRange(10, 2).setValue("user_id");
  newSheet.getRange(10, 3).setValue("user_name");
  newSheet.getRange(10, 4).setValue("url");
  newSheet.getRange(10, 5).setValue("uuid");
  newSheet.getRange(10, 6).setValue("title");
  newSheet.getRange(10, 7).setValue("value");
  newSheet.getRange(10, 8).setValue("last_value");

  return newSheet;
}

//リスト追加
function addWatching(server_id, user_id, user_name, url, uuid){
  //サーバーシート取得
  let sheet = SS.getSheetByName(server_id);
  //現在の日付
  var date = new Date();
  //最終行取得
  const lastRow = sheet.getLastRow();
  //新規行
  const newRow = lastRow + 1;
  //書き込み
  sheet.getRange(newRow, 1).setValue(date);
  sheet.getRange(newRow, 2).setValue(user_id);
  sheet.getRange(newRow, 3).setValue(user_name);
  sheet.getRange(newRow, 4).setValue(url);
  sheet.getRange(newRow, 5).setValue(uuid);
  //金額取得
  return refresh(server_id, newRow);
}
