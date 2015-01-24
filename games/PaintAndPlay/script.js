var paper = document.getElementById("paper");
var body = document.getElementsByClassName("container")[0];
var penColor = "black";

createGrid(16,16);
createPen();
updatePen(penColor);
createPalette();

function createGrid(width, height) {
  for (var i = 0; i < height; i++) {
    for (var j = 0; j < width; j++) {
      createPixel(paper);
    }
    var line_break = document.createElement("DIV");
    paper.appendChild(line_break);
  }
}

function createPixel() {
  var pixel = document.createElement("DIV");
  pixel.setAttribute("class","pixel");
  pixel.style.backgroundColor = "d3d3d3";
  pixel.onclick = function () {

    if (this.style.backgroundColor === penColor) {
      this.style.backgroundColor = "d3d3d3";
    }else {
      this.style.backgroundColor = penColor;
    }
  };
  paper.appendChild(pixel);
}

function createPalette() {
  var palette = document.createElement("DIV");
  palette.setAttribute("class", "palette");
  palette.style.display = "inline-block";
  palette.style.marginTop = "10px";
  body.appendChild(palette);

  createColor("rgb(0, 0, 0)",palette);
  createColor("rgb(255, 255, 255)",palette);
  createColor("rgb(255, 0, 0)",palette);
  createColor("rgb(0, 255, 0)",palette);
  createColor("rgb(0, 0, 255)",palette);
  createColor("rgb(255, 255, 0)",palette);
  createColor("rgb(0, 255, 255)",palette);
  createColor("rgb(255, 0, 255)",palette);
  createColor("rgb(192, 192, 192)",palette);
  createColor("rgb(128, 128, 128)",palette);
  createColor("rgb(128, 0, 0)",palette);
  createColor("rgb(128, 128, 0)",palette);
  createColor("rgb(0, 128, 0)",palette);
  createColor("rgb(0, 128, 128)",palette);
  lineBreak(palette);
  createColor("rgb(0, 0, 128)", palette);
  createColor("rgb(139, 69, 19)", palette);
  createColor("rgb(160, 82, 45)", palette);
  createColor("rgb(210, 105, 30)", palette);
  createColor("rgb(205, 133, 63)", palette);
  createColor("rgb(244, 164, 96)", palette);
  createColor("rgb(222, 184, 135)", palette);
  createColor("rgb(210, 180, 140)", palette);
  createColor("rgb(188, 143, 143)", palette);
  createColor("rgb(255, 218, 185)", palette);
  createColor("rgb(255, 228, 225)", palette);
  createColor("rgb(255, 240, 245)", palette);
  createColor("rgb(250, 240, 230)", palette);
  createColor("rgb(255, 105, 180)", palette);
}

function createPen() {
  var pen = document.createElement("DIV");
  pen.setAttribute("class","pen");
  body.appendChild(pen);
}

function updatePen(colorName) {
  penColor = colorName;
  pen = document.body.getElementsByClassName("pen")[0];
  pen.style.backgroundColor = colorName;
}

function createColor(colorName, palette) {
  var color = document.createElement("DIV");
  color.setAttribute("class","pixel");
  color.style.backgroundColor = colorName;
  color.onclick = function () {
    updatePen(colorName);
  };
  palette.appendChild(color);
}

function lineBreak(palette) {
  var line_break = document.createElement("DIV");
  palette.appendChild(line_break);
}
