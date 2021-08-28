$("#client_id").owlCarousel({
	loop: false,
	margin: 0,
	nav: false,
  responsive: {
    0: {
      items: 1
    },
  }
});
// Header__menu-mobile
let navigation = {
  init:function(){
    this.showDropdown();
    this.showDropdown__top();
  },
  showDropdown:function() {
    let button = document.querySelector('.header .header__main .header__main-nav .header__menu-button .button__menu');
    let dropdown = document.querySelector('.header .header__main .header__main-nav .header__menu-mobile');
    button.addEventListener('click',function(){
      dropdown.classList.toggle('show');
    })
  },
  showDropdown__top:function() {
    let button = document.querySelector('.header .header__top .header__top-left .left__list .left__list-item')
    let dropdown = document.querySelector('.header .header__top .header__top-left .left__list .left__list-item .sublist')
    button.addEventListener('click',function(){
      dropdown.classList.toggle('show');
    })
  }
}
navigation.init();
// Search Box
// Open the full screen search
let SearchBox = {
  init:function(){
    this.openSearch();
    this.closeSearch();
  },
  openSearch:function(){
    let search = document.querySelector('.header .header__main .header__main-nav .nav__list .search')
    search.addEventListener('click',function(){
      document.getElementById("myOverlay").style.transform = "translateX(0%)";
    }) 
  },
  closeSearch:function(){
    let close = document.querySelector('.wrapper .overlay .overlay-content .closebtn')
    close.addEventListener('click',function(){
      document.getElementById("myOverlay").style.transform = "translateX(100%)";
    })
  }
}
SearchBox.init();
// SrollToTop
mybutton = document.getElementById("my-scroll");
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

/*
window.onload = () => {
  const owl = {
    init: function () {
      this.slider('.overview-carousel');
      this.slider('.client-carousel');
    },
    slider: function (target) {
      const mainWrap = $(target)
      let options = {}
      switch (target) {
        case '.overview-carousel':
          options = {
            loop: true,
            margin: 0,
            autoplay: true,
            autoplayHoverPause: true,
            dots: true,
            responsive: {
              0: {
                items: 1
              },
            }
          }
          break;
        case '.client-carousel':
          options = {
            loop: false,
            margin: 10,
            autoplay: false,
            autoplayHoverPause: true,
            dots: true,
            responsive: {
              0: {
                items: 2
              },
              425:{
                items:2
              },
              768:{
                items:3
              },
              1024:{
                items: 5
              },
              1520:{
                items: 6
              }
            }
          }
          break;
        default:
          return true
      }
      if (mainWrap) {
        $(mainWrap).owlCarousel(options)
      }
    },
  }
  owl.init();

  const category = {
    init: function() {
      this.openMenu()
    },
    openMenu: function() {
      const main = document.querySelector('#category-menu')
      if (main) {
        const menuLevel = main.querySelectorAll('.menu-level')

        menuLevel.forEach((item, index) => item.addEventListener('click', () => {
          item.classList.toggle('active')

          const menuChild = item.querySelector('.menu-item-child')
          if (menuChild) {
            menuChild.classList.toggle('active')
          }
        }))
      }
    },
  }
  category.init()
}
*/
