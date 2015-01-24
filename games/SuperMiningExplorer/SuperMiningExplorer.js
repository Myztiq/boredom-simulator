var imgList = [
  "mine-shot-1.png",
  "mine-shot-2.png",
  "mine-shot-3.png"
];

$("div.stage").on("mousedown", function () {
  var img = imgList.shift();
  imgList.push(img);

  $("div.stage").css("background-image", "url(/"+ img +")");
});
