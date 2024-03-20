function research() {
  
}

//金額取得・更新
function refresh(server_id, row){
  //サーバーシート取得
  let sheet = SS.getSheetByName(server_id);
  let url = sheet.getRange(row, 4).getValue();
  let uuid = sheet.getRange(row, 5).getValue();

  let response = UrlFetchApp.fetch(url);
  //let response = UrlFetchApp.fetch("https://www.amazon.co.jp/dp/B08K41Q79R");
  let text = response.getContentText("utf-8");
  //console.log(text);

  //読み込みに時間がかかる？
  Utilities.sleep(1000);

  //let title_block = Parser.data(text).from('<span id="productTitle"').to('</span>').build();
  //let title = Parser.data(title_block).from('">').to('</span>').build();
  let title = Parser.data(text).from('class="a-size-medium product-title-word-break product-title-resize">').to('</span>').build();
  console.log(title);
  //let value_block = Parser.data(text).from('data-cel-widget="apex_desktop">').to('</div>').build();
  let value = Parser.data(text).from('class="a-price-whole">').to('</span>').build();
  console.log(value);
  
  let last_value = sheet.getRange(row, 7).getValue();
  sheet.getRange(row, 6).setValue(title);
  sheet.getRange(row, 7).setValue(value);
  sheet.getRange(row, 8).setValue(last_value);

  let result ={
    'title' : title,
    'value' : value,
    'last_value' : last_value
  };
  return result;

}