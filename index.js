$(document).ready(function () {
  $(".carousel").slick({
    arrows: true,
    dots: true,
    dotsClass: "slider-dots",
    slidesToShow: 1,
    nextArrow: '<button class="carousel-arrow next inverted"></button>',
    prevArrow: '<button class="carousel-arrow prev inverted"></button>',
    responsive: [
      {
        breakpoint: 720, // Ejemplo: cambia la configuración para pantallas más pequeñas
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      // Puedes agregar más breakpoints según sea necesario
    ],
  });
});

//menu hamburguesa
const menu = document.getElementById("_toggle");
const itemsNav = document.getElementById("_items");

menu.onclick = () => {
  itemsNav.classList.toggle("open");
  menu.classList.toggle("close");
};

function cerrarMenu() {
  itemsNav.classList.remove("open");
  menu.classList.remove("close");
}
