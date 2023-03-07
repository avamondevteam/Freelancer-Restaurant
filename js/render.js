
var _$ = document.querySelector.bind(document);
var $$ = document.querySelectorAll.bind(document);
const buttonSushi = _$(".button-sushi");
const buttonAppetizer = _$(".button-appetizer");
const buttonSoup = _$(".button-soup");
const buttonMainDishes = _$(".button-main-dishes");
const buttonHotPot = _$(".button-hot-pot");
const buttonItallap = _$(".button-itallap");
const buttonDesszert = _$(".button-desszert");
const images = $$(".menus .buttonImages");
const overlay = _$(".container .overlay");
const slickSlider = _$("#slick-slider");

buttonSushi.addEventListener("click", function (e) {
  _$(".toggle-appetizer").style.display = "none";
  _$(".toggle-sushi").style.display = "block";
});

buttonAppetizer.addEventListener("click", function (e) {
  _$(".toggle-sushi").style.display = "none";
  _$(".toggle-appetizer").style.display = "block";
});

buttonSoup.addEventListener("click", function (e) {
  _$(".toggle-sushi").style.display = "none";
  _$(".toggle-appetizer").style.display = "none";
  _$(".toggle-soup").style.display = "none";
  _$(".toggle-main-dishes").style.display = "none";
  _$(".toggle-hot-pot").style.display = "none";
  _$(".toggle-itallap").style.display = "none";
  _$(".toggle-soup").style.display = "block";
});
buttonMainDishes.addEventListener("click", function (e) {
  _$(".toggle-sushi").style.display = "none";
  _$(".toggle-appetizer").style.display = "none";
  _$(".toggle-soup").style.display = "none";
  _$(".toggle-main-dishes").style.display = "none";
  _$(".toggle-hot-pot").style.display = "none";
  _$(".toggle-itallap").style.display = "none";
  _$(".toggle-main-dishes").style.display = "block";
});
buttonHotPot.addEventListener("click", function (e) {
  _$(".toggle-sushi").style.display = "none";
  _$(".toggle-appetizer").style.display = "none";
  _$(".toggle-soup").style.display = "none";
  _$(".toggle-main-dishes").style.display = "none";
  _$(".toggle-hot-pot").style.display = "none";
  _$(".toggle-itallap").style.display = "none";
  _$(".toggle-hot-pot").style.display = "block";
});
buttonItallap.addEventListener("click", function (e) {
  _$(".toggle-sushi").style.display = "none";
  _$(".toggle-appetizer").style.display = "none";
  _$(".toggle-soup").style.display = "none";
  _$(".toggle-main-dishes").style.display = "none";
  _$(".toggle-hot-pot").style.display = "none";
  _$(".toggle-itallap").style.display = "none";
  _$(".toggle-itallap").style.display = "block";
});
buttonDesszert.addEventListener("click", function (e) {
  _$(".toggle-sushi").style.display = "none";
  _$(".toggle-appetizer").style.display = "none";
  _$(".toggle-soup").style.display = "none";
  _$(".toggle-main-dishes").style.display = "none";
  _$(".toggle-hot-pot").style.display = "none";
  _$(".toggle-itallap").style.display = "none";
  _$(".toggle-desszert").style.display = "block";
});

function getImages(e) {
  const listImages = e.replace(/{{|}}/g, "").split(",");
  // var images = listImages.map(function (image){
  //   console.log(image)
  //   return `
  //     <img class="image-slick" src=${image}/>
  //   `
  // })`

  // _$(".container-slick-slider").innerHTML = images.join('');
  slickSlider.classList.add("slick-slider");
  slickSlider.innerHTML = "";
  for (var i = 0; i < listImages.length; i++) {
    var imageElement = document.createElement("img");
    imageElement.src = listImages[i];
    slickSlider.appendChild(imageElement);
  }
  $(document).ready(function () {
    $(".slick-slider").slick({
      dots: false,
      arrows: false,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
    });
  });
  overlay.style.display = "flex";
}
slickSlider.addEventListener("click", function (e) {
  e.stopPropagation();
});
overlay.addEventListener("click", function (e) {
  $(".slick-slider").slick("unslick");
  overlay.style.display = "none";
});

