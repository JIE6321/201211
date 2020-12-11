let jsobj;
let img;
let val, btn;
// 因為傳輸資料需要時間 因此預載
function preload() {
    val = document.getElementById("magsize").value; // 先取得 index 中 magsize 的 val 後
    jsobj = loadJSON('https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2020-01-01&endtime=2020-11-02&minmagnitude='+val); // 再向資料庫取得資料
    img = loadImage('wgs84.png');
    btn = document.getElementById("submit"); // 定義 index 中 submit 按鈕
    btn.addEventListener('click', () =>{ // 持續傾聽 該按鈕 當按鈕 被按下時
      console.log("reloading"); // 印出 reloading
      window.location.reload(); // 重置頁面
    });
}
// 預載後執行
function setup() {
  // 經度為 -180-80 緯度為 -90-90
  createCanvas(360, 180);
  // 先放底圖
  image(img, 0, 0, width, height);
  // 取出資料中的 每個物件 命名為 o
  jsobj.features.forEach((b)=>{
    // 經度 在 geometry 底下 coordinates 第一筆資料
    lon = b.geometry.coordinates[0];
    // 緯度 在 geometry 底下 coordinates 第二筆資料
    lat = b.geometry.coordinates[1];
    // 震度 在 properties底下
    ms= b.properties.mag;
    noStroke();
    fill(150,50,50,3);
    circle(lon+180,180-(lat+90), ms*7);
  });
}

function draw() {
}