var _$ = document.querySelector.bind(document);
var $$ = document.querySelectorAll.bind(document);

const buttonBreakfast = _$(".button-breakfast");
const buttonLunch = _$(".button-lunch");
const buttonDinner = _$(".button-dinner");
const buttonDesserts = _$(".button-desserts");
const buttonWindCard = _$(".button-wine-card");
const buttonDrink = _$(".button-drink");


buttonBreakfast.addEventListener("click", function (e) {
    _$(".toggle-breakfast").style.display = "block";
    _$(".toggle-lunch").style.display = "none";
    _$(".toggle-dinner").style.display = "none";
    _$(".toggle-desserts").style.display = "none";
    _$(".toggle-wine").style.display = "none";
    _$(".toggle-drink").style.display = "none";
   
  });
  buttonLunch.addEventListener("click", function (e) {
    _$(".toggle-lunch").style.display = "block";
    _$(".toggle-breakfast").style.display = "none";
    _$(".toggle-dinner").style.display = "none";
    _$(".toggle-desserts").style.display = "none";
    _$(".toggle-wine").style.display = "none";
    _$(".toggle-drink").style.display = "none";
   
  });
  
  buttonDinner.addEventListener("click", function (e) {
    _$(".toggle-dinner").style.display = "block";
    _$(".toggle-breakfast").style.display = "none";
    _$(".toggle-lunch").style.display = "none";
    _$(".toggle-desserts").style.display = "none";
    _$(".toggle-wine").style.display = "none";
    _$(".toggle-drink").style.display = "none";
   
  });
  buttonDesserts.addEventListener("click", function (e) {
    _$(".toggle-desserts").style.display = "block";
    _$(".toggle-breakfast").style.display = "none";
    _$(".toggle-lunch").style.display = "none";
    _$(".toggle-dinner").style.display = "none";
    _$(".toggle-wine").style.display = "none";
    _$(".toggle-drink").style.display = "none";
   
  });
  
  buttonWindCard.addEventListener("click", function (e) {
    _$(".toggle-wine").style.display = "block";
    _$(".toggle-breakfast").style.display = "none";
    _$(".toggle-lunch").style.display = "none";
    _$(".toggle-dinner").style.display = "none";
    _$(".toggle-desserts").style.display = "none";
    _$(".toggle-drink").style.display = "none";
   
  });
  
  buttonDrink.addEventListener("click", function (e) {
    _$(".toggle-drink").style.display = "block";
    _$(".toggle-breakfast").style.display = "none";
    _$(".toggle-lunch").style.display = "none";
    _$(".toggle-dinner").style.display = "none";
    _$(".toggle-desserts").style.display = "none";
    _$(".toggle-wine").style.display = "none";
   
  });