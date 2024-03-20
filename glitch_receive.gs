// post値を受け取った時（glitchからの受信）
function doPost(e) {
  let parameter = {}; 
  try{
    parameter = JSON.parse(e.postData.contents);//受信した中身
  }catch(e){
    // エラー処理
  }
  // 通常処理
  Logger.log(parameter);
  writeLog(parameter);
  receiveData(parameter);
  
  //空のobjを返す
  const obj = {};
  return ContentService.createTextOutput(JSON.stringify(obj));
}