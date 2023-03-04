var $ = document.querySelector.bind(document)
var $$ = document.querySelectorAll.bind(document)

const buttonSushi = $(".button-sushi")
const buttonAppetizer = $(".button-appetizer")

buttonSushi.addEventListener("click", function(e) {
    $('.toggle-appetizer').style.display = "none"
    $('.toggle-sushi').style.display = "block"
})

buttonAppetizer.addEventListener("click", function(e) {
    $('.toggle-sushi').style.display = "none"
    $('.toggle-appetizer').style.display = "block"

})