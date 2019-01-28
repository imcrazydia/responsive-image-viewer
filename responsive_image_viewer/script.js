console.log(window.innerWidth);//breedte
console.log(window.innerHeight);//hoogte
let imageNames = ["big1.jpg", "big2.jpg", "big3.jpg", "big4.jpg", "big5.jpg", "big6.jpg", "big7.jpg", "big8.jpg", "big9.jpg", "big10.jpg", "big11.jpg", "big12.jpg", "big13.jpg"];
let tumbs = document.getElementById('tumbs');
let display = document.getElementById('display' );
let currentImage;

//bij starten script een random image grote weergave
selectImage(Math.floor(Math.random()*imageNames.length));

//maak de kleine images  aan
for(let i= 0; i<imageNames.length; i++){
  let tumb = new Image();
  //images worden uit de map pics_small gehaald
  tumb.src = "images/pics_small/" + imageNames[i];
  tumb.id = i;
  tumbs.appendChild(tumb);
  tumb.addEventListener("click",function(e){
    selectImage(e.target.id);
  });
}
function selectImage(id){
  //image wordt uit de map pics_big gehaald
  display.src = "images/pics_big/" + imageNames[id];
  currentImage = id;
}
left.addEventListener("click", function(e){
  console.log("left");
  backward();
})
function backward(){

  currentImage = Number(currentImage) - 1;
    console.log(currentImage);
  selectImage(currentImage);
  if (currentImage < 0) {
    currentImage = imageNames.length -1;}
    selectImage(currentImage);
}
right.addEventListener("click", function(e){
  console.log("right");
  forward();
})
function forward(){

  currentImage = Number(currentImage) + 1;
    console.log(currentImage);
  selectImage(currentImage);
  if (currentImage == imageNames.length) {
    currentImage = 0;}
    selectImage(currentImage);
}
down.addEventListener("click", function(e){
  console.log("down");
  downwards();
})
function downwards(){

  if (Number(currentImage) + 5 >= imageNames.length) {
    currentImage = 0;} else {
  currentImage = Number(currentImage) + 5;
    console.log(currentImage);
  }selectImage(currentImage);
}
up.addEventListener("click", function(e){
  console.log("up");
  upwards();
})
function upwards(){

  currentImage = Number(currentImage) - 5;
    console.log(currentImage);
  selectImage(currentImage);
  if (currentImage < 0) {
    currentImage = imageNames.length - 1;}
    selectImage(currentImage);
}
