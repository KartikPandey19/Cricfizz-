let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick =() =>{
    searchForm.classList.toggle('active');
}

var swiper = new Swiper(".home-slider", {
    slidesPerView: 5,
    spaceBetween: 30,
    freeMode: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

 