var _$ = document.querySelector.bind(document)
var $$ = document.querySelectorAll.bind(document)

const buttonSushi = _$(".button-sushi")
const buttonAppetizer = _$(".button-appetizer")
const buttonSoup = _$(".button-soup")
const buttonMainDishes = _$(".button-main-dishes")
const buttonHotPot = _$(".button-hot-pot")
const buttonItallap = _$(".button-itallap")
const buttonDesszert = _$(".button-desszert")
buttonSushi.addEventListener("click", function(e) {
    _$('.toggle-appetizer').style.display = "none"
    _$('.toggle-sushi').style.display = "block"
})

buttonAppetizer.addEventListener("click", function(e) {
    _$('.toggle-sushi').style.display = "none"
    _$('.toggle-appetizer').style.display = "block"

})

buttonSoup.addEventListener("click", function(e) {
    _$('.toggle-sushi').style.display = "none"
    _$('.toggle-appetizer').style.display = "none"
    _$('.toggle-soup').style.display = "none"
    _$('.toggle-main-dishes').style.display = "none"
    _$('.toggle-hot-pot').style.display = "none"
    _$('.toggle-itallap').style.display = 'none'
    _$('.toggle-soup').style.display = "block"
})
buttonMainDishes.addEventListener("click", function(e) {
    _$('.toggle-sushi').style.display = "none"
    _$('.toggle-appetizer').style.display = "none"
    _$('.toggle-soup').style.display = "none"
    _$('.toggle-main-dishes').style.display = "none"
    _$('.toggle-hot-pot').style.display = "none"
    _$('.toggle-itallap').style.display = 'none'
    _$('.toggle-main-dishes').style.display = "block"
})
buttonHotPot.addEventListener("click", function(e) {
    _$('.toggle-sushi').style.display = "none"
    _$('.toggle-appetizer').style.display = "none"
    _$('.toggle-soup').style.display = "none"
    _$('.toggle-main-dishes').style.display = "none"
    _$('.toggle-hot-pot').style.display = "none"
    _$('.toggle-itallap').style.display = 'none'
    _$('.toggle-hot-pot').style.display = "block"
})
buttonItallap.addEventListener("click", function(e) {
    _$('.toggle-sushi').style.display = "none"
    _$('.toggle-appetizer').style.display = "none"
    _$('.toggle-soup').style.display = "none"
    _$('.toggle-main-dishes').style.display = "none"
    _$('.toggle-hot-pot').style.display = "none"
    _$('.toggle-itallap').style.display = 'none'
    _$('.toggle-itallap').style.display = 'block'
})
buttonDesszert.addEventListener("click", function(e) {
    _$('.toggle-sushi').style.display = "none"
    _$('.toggle-appetizer').style.display = "none"
    _$('.toggle-soup').style.display = "none"
    _$('.toggle-main-dishes').style.display = "none"
    _$('.toggle-hot-pot').style.display = "none"
    _$('.toggle-itallap').style.display = 'none'
    _$('.toggle-desszert').style.display = "block"
})

