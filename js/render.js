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

buttonSushi.addEventListener("click", async function (e) {
  try {
    await $.getJSON("db/sushi.json", (data) => {
      const elementSushi = data
        .map(
          (value) => `
        <div class="menus col-md-6 col-lg-4 d-flex">
            <div class="menu-img img"
            onclick="getImages('{{${value.images}}}')"
            style="background-image: url(${value.images[0]});"></div>
          <div class="text">
            <div class="">
              <h6 style="color: #E52B34;">${value.name}</h6>
            </div>
            ${value.ingredient
              .map(
                (value) => `<div class="d-flex justify-content-between">
            <p><span style="font-size: 12px">${value.name}</span></p>
            <div class="one-forth">
              <span style="font-size: 12px !important;" class="price">${value.calo}</span>
            </div>
          </div>`
              )
              .join("")}
          </div>
        </div>
  `
        )
        .join("");

      document.querySelector(".toggle-sushi .menu-wrap .sushi").innerHTML =
        elementSushi;
      _$(".toggle-appetizer").style.display = "none";
      _$(".toggle-sushi").style.display = "block";
    });
  } catch (error) {
    console.log(error);
  }
});
$.getJSON('db/appetizer.json', (data => {
  const elementAppetizer = data.map(value => {

    return  `
    <div class="menus col-md-6 col-lg-4 d-flex">
      <div class="menu-img img" 
      onclick="getImages('{{${value.images}}}')"
      style="background-image: url(${value.images[0]});"></div>
      <div class="text">
        <div class="d-flex justify-content-between">
          <h6 style="color: #E52B34;">${value.name}</h6>
          <div class="one-forth">
            <span style="font-size: 12px !important;" class="price">${value.calo}</span>
          </div>
        </div>
        
          ${value.description.map(data => {
              return `<div class=""><p><span style="font-size: 12px;">${data}</span></p></div>`
            }).join('')}
        
      </div>
    </div>
    `
  }).join('')
  document.querySelector('.appetizer').innerHTML = elementAppetizer
}))
buttonAppetizer.addEventListener("click", function (e) {
  $.getJSON('db/appetizer.json', (data => {
    const elementAppetizer = data.map(value => {

      return  `
      <div class="menus col-md-6 col-lg-4 d-flex">
        <div class="menu-img img" 
        onclick="getImages('{{${value.images}}}')"
        style="background-image: url(${value.images[0]});"></div>
        <div class="text">
          <div class="d-flex justify-content-between">
            <h6 style="color: #E52B34;">${value.name}</h6>
            <div class="one-forth">
              <span style="font-size: 12px !important;" class="price">${value.calo}</span>
            </div>
          </div>
          
            ${value.description.map(data => {
                return `<div class=""><p><span style="font-size: 12px;">${data}</span></p></div>`
              }).join('')}
          
        </div>
      </div>
      `
    }).join('')
    document.querySelector('.appetizer').innerHTML = elementAppetizer
  }))
  _$(".toggle-sushi").style.display = "none";
  _$(".toggle-appetizer").style.display = "block";
});

buttonSoup.addEventListener("click", function (e) {
  $.getJSON("db/soup.json", (data) => {
    const elementSoup = data
      .map((value) => {
        return `
      <div class="menus col-md-6 col-lg-4 d-flex ">
        <div class="menu-img img" 
        onclick="getImages('{{${value.images}}}')"
        style="background-image: url(${value.images[0]});"></div>
        <div class="text">
          <div class="d-flex justify-content-between">
          <div class="">
            <h6 style="color: #E52B34;">${value.name}</h6>
          </div>
          <div class="one-forth">
            <span style="font-size: 12px !important;" class="price">${
              value.calo
            }</span>
          </div>
        </div>
          ${value.description
            .map((data) => {
              return `
            <div class="d-flex justify-content-between">
              <p><span style="font-size: 12px;">${data.name}</span></p>
              
              <div class="one-forth">
                <span style="font-size: 12px !important;" class="price">${data.calo}</span>
              </div>
            </div>
            `;
            })
            .join("")}
        </div>
      </div>
      `;
      })
      .join("");
    document.querySelector(".menu-wrap .soup").innerHTML = elementSoup;
  });
  _$(".toggle-sushi").style.display = "none";
  _$(".toggle-appetizer").style.display = "none";
  _$(".toggle-soup").style.display = "none";
  _$(".toggle-main-dishes").style.display = "none";
  _$(".toggle-hot-pot").style.display = "none";
  _$(".toggle-itallap").style.display = "none";
  _$(".toggle-soup").style.display = "block";
});
buttonMainDishes.addEventListener("click", function (e) {
  $.getJSON("db/mainDishes.json", function (data) {
    const elementMain = data
      .map((value) => {
        return `
      <div class="menus col-md-6 col-lg-4 d-flex ">
        <div class="menu-img img" 
        onclick="getImages('{{${value.images}}}')"
        style="background-image: url(${value.images[0]});"></div>
        <div class="text">
          <div class="d-flex justify-content-between">
            <div class="">
              <h6 style="color: #E52B34;">${value.name}</h6>
            </div>
            <div class="one-forth">
              <span style="font-size: 12px !important;" class="price">${
                value.calo
              }</span>
            </div>
          </div>
          ${value.description
            .map((data) => {
              return `
            <div class="d-flex justify-content-between">
              <p><span style="font-size: 12px;">${data}</span></p>
            </div>
            `;
            })
            .join("")}
        </div>
      </div>
      `;
      })
      .join("");

    document.querySelector(".main-dishes").innerHTML = elementMain;
  });
  _$(".toggle-sushi").style.display = "none";
  _$(".toggle-appetizer").style.display = "none";
  _$(".toggle-soup").style.display = "none";
  _$(".toggle-main-dishes").style.display = "none";
  _$(".toggle-hot-pot").style.display = "none";
  _$(".toggle-itallap").style.display = "none";
  _$(".toggle-main-dishes").style.display = "block";
});
buttonHotPot.addEventListener("click", function (e) {
  $.getJSON("db/pre-orderHotPot.json", function (data) {
    const elementHotPot = data
      .map((value) => {
        return `
      
      <div class="menus col-md-6 col-lg-4 d-flex ">
        <div class="menu-img img" 
        onclick="getImages('{{${value.images}}}')"
        style="background-image: url(${value.images[0]});"></div>
        <div class="text">
          <div class="d-flex justify-content-between">
            <div class="">
              <h6 style="color: #E52B34;">${value.name}</h6>
            </div>
            <div class="one-forth">
              <span style="font-size: 12px !important;" class="price">${
                value.calo
              }</span>
            </div>
          </div>
          ${value.description
            .map((data) => {
              return `
            <div class="d-flex justify-content-between">
              <p><span style="font-size: 12px;">${data}</span></p>
            </div>
            `;
            })
            .join("")}
        </div>
      </div>
      `;
      })
      .join("");
    document.querySelector(".hot-pot").innerHTML = elementHotPot;
  });
  _$(".toggle-sushi").style.display = "none";
  _$(".toggle-appetizer").style.display = "none";
  _$(".toggle-soup").style.display = "none";
  _$(".toggle-main-dishes").style.display = "none";
  _$(".toggle-hot-pot").style.display = "none";
  _$(".toggle-itallap").style.display = "none";
  _$(".toggle-hot-pot").style.display = "block";
});
buttonItallap.addEventListener("click", function (e) {
  $.getJSON("db/itallap.json", function (data) {
    const elementItallap = data
      .map((value) => {
        return `
      <div class="menus col-md-6 col-lg-4 d-flex ">
        <div class="menu-img img buttonImages" 
        onclick="getImages('{{${value.images}}}')"
        style="background-image: url(${value.images[0]});"></div>
        <div class="text">
          <div class="">
            <h6 style="color: #E52B34;">${value.name}</h6>
          </div>
          ${value.description
            .map((data) => {
              return `
            <div class="">
              <h6 style="color: #E52B34;">${data.title}</h6>
            </div>
            ${data.type
              .map((type) => {
                return `
              <div class="d-flex justify-content-between">
                <p><span style="font-size: 12px;">${type.name}</span></p>
                
                <div class="one-forth">
                  <span style="font-size: 12px !important;" class="price">${type.calo}</span>
                </div>
              </div>
              `;
              })
              .join("")}
            `;
            })
            .join("")}
        </div>
      </div>
      `;
      })
      .join("");
    document.querySelector(".itallap").innerHTML = elementItallap;
  });
  _$(".toggle-sushi").style.display = "none";
  _$(".toggle-appetizer").style.display = "none";
  _$(".toggle-soup").style.display = "none";
  _$(".toggle-main-dishes").style.display = "none";
  _$(".toggle-hot-pot").style.display = "none";
  _$(".toggle-itallap").style.display = "none";
  _$(".toggle-itallap").style.display = "block";
});
buttonDesszert.addEventListener("click", function (e) {
  $.getJSON("db/desszert.json", function (data) {
    const elementDesszert = data
      .map((value) => {
        return `
      
      <div class="menus col-md-6 col-lg-4 d-flex ">
        <div class="menu-img img" 
        onclick="getImages('{{${value.images}}}')"
        style="background-image: url(${value.images[0]});"></div>
        <div class="text">
          <div class="d-flex justify-content-between">
            <div class="">
              <h6 style="color: #E52B34;">${value.name}</h6>
            </div>
            <div class="one-forth">
              <span style="font-size: 12px !important;" class="price">${
                value.calo
              }</span>
            </div>
          </div>
          ${value.description
            .map((data) => {
              return `
            <div class="d-flex justify-content-between">
              <p><span style="font-size: 12px;">${data}</span></p>
            </div>
            `;
            })
            .join("")}
        </div>
      </div>
      `;
      })
      .join("");
    document.querySelector(".desszert").innerHTML = elementDesszert;
  });
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
