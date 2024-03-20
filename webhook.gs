//ウェブフックのbotでメッセージを送る関数x2
function sendMessageTest(){
  sendMessage("Hello!");
}

function sendMessage( txt ) {
  // discord側で作成したボットのウェブフックURL
  const discordWebHookURL = "https://discord.com/api/webhooks/1073897908111429712/X75lUYD7AZwJCyQihARztZmFha749PG0SH2ZDutRozznAxGj4Gn57Pkj38GDDyZRplla";

  // 投稿するチャット内容と設定
  const message = {
    "content": txt, // チャット本文
    "tts": false  // ロボットによる読み上げ機能を無効化
  }

  const param = {
    "method": "POST",
    "headers": { 'Content-type': "application/json" },
    "payload": JSON.stringify(message)
  }

  UrlFetchApp.fetch(discordWebHookURL, param);
}
