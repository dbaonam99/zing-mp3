
function showOn() {
  document.getElementById('turnOn').style.visibility = 'visible';
  document.getElementById('icon').innerHTML = '<i class="fas fa-angle-up" style="cursor: pointer;" onclick="showOff()"></i>';
}
function showOff() {
  document.getElementById('turnOn').style.visibility = 'hidden';
  document.getElementById('icon').innerHTML = '<i class="fas fa-angle-down" style="cursor: pointer;" onclick="showOn()"></i>';
}

//Show menu on mobile version

function mMenu() {
  var body = document.getElementById("body");
  var x = document.getElementById("mobile-menu");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
     body.classList.add("noScroll");
  }
}
function cancelMenu() {
  var x = document.getElementById("mobile-menu");
  if (x.style.display === "block") {
    x.style.display = "none";
     body.classList.remove("noScroll");
  } 
}
//Back to top button
var myicon = document.getElementById("myIcon");
var navbar = document.getElementById("navbar");
var hidetablet = document.getElementsByClassName("hide-tablet")
var height = document.getElementById("height");
var hide = document.getElementsByClassName("hide");
var hide1 = document.getElementsByClassName("hide1");
var hide2 = document.getElementsByClassName("hide2");
var zingchart = document.getElementById("zingchart");
var none1 = document.getElementById("none1");
var zingchart = document.getElementById("zingchart");
var search = document.getElementById("search");
var input = document.getElementById("input");
var mobile = document.getElementsByClassName("mobile");


// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (window.matchMedia("(min-width: 415px)").matches) {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      myicon.style.color = "#b9b9b9";
      navbar.classList.add("navbar-change");
      height.style.height = "55px";
      for(var i = 0; i < hide.length; i++) {
        hide[i].classList.add("hide-change");
      }

      if (window.matchMedia("(max-width: 768px)").matches) {
        for(var i = 0; i < hidetablet.length; i++) {
          hidetablet[i].classList.add("hide-change-tablet");
        }
      } else {
        for(var i = 0; i < hidetablet.length; i++) {
          hidetablet[i].classList.remove("hide-change-tablet");
        }
      }


      if (window.matchMedia("(max-width: 800px)").matches) {
        for(var i = 0; i < hide1.length; i++) {
          hide1[i].style.display = "none";
        }
      } else {
        for(var i = 0; i < hide1.length; i++) {
          hide1[i].style.display = "block";
        }
      }

      if (window.matchMedia("(max-width: 600px)").matches) {
        zingchart.style.display = "none";
      }
      else {
        zingchart.style.display = "block";
      }

      search.classList.add("search-change");
      input.classList.add("input-change");
    } else {
      myicon.style.color = "#e4e4e4";
      navbar.classList.remove("navbar-change");
      height.style.height = "124px";
      for(var i = 0; i < hide.length; i++) {
        hide[i].classList.remove("hide-change");
      }


      if (window.matchMedia("(max-width: 768px)").matches) {
        for(var i = 0; i < hidetablet.length; i++) {
          hidetablet[i].classList.remove("hide-change-tablet");
        }

      }

      if (window.matchMedia("(max-width: 800px)").matches) {
        for(var i = 0; i < hide1.length; i++) {
          hide1[i].style.display = "block";
        }
        none1.style.display = "none";
      }

      if (window.matchMedia("(max-width: 600px)").matches) {
        for(var i = 0; i < hide2.length; i++) {
          hide2[i].style.display = "none";
        }
        zingchart.style.display = "block";
      } else {
        for(var i = 0; i < hide2.length; i++) {
          hide2[i].style.display = "block";
        }
      }

      search.classList.remove("search-change");
      input.classList.remove("input-change");
    }
  }
  if (window.matchMedia("(max-width: 414px)").matches) {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      height.style.height = "100px";
      navbar.classList.remove("navbar-change");
      for(var i = 0; i < hidetablet.length; i++) {
        hidetablet[i].classList.remove("hide-change-tablet");
      }
      zingchart.style.display = "block";
      for(var i = 0; i < mobile.length; i++) {
        mobile[i].style.display = "none";
      }
      for(var i = 0; i < hide1.length; i++) {
        hide1[i].style.display = "none";
      }
    }
    else {
      height.style.height = "100px";
      navbar.classList.remove("navbar-change");
      for(var i = 0; i < hidetablet.length; i++) {
        hidetablet[i].classList.remove("hide-change-tablet");
      }
      zingchart.style.display = "block";
      for(var i = 0; i < mobile.length; i++) {
        mobile[i].style.display = "none";
      }
    }
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}









// function showOn() {
//   document.getElementById('turnOn').style.visibility = 'visible';
//   document.getElementById('icon').innerHTML = '<i class="fas fa-angle-up" style="cursor: pointer;" onclick="showOff()"></i>';
// }
// function showOff() {
//   document.getElementById('turnOn').style.visibility = 'hidden';
//   document.getElementById('icon').innerHTML = '<i class="fas fa-angle-down" style="cursor: pointer;" onclick="showOn()"></i>';
// }


// //Back to top button
// var myicon = document.getElementById("myIcon");
// var navbar = document.getElementById("navbar");
// var hidetablet = document.getElementsByClassName("hide-tablet")
// var height = document.getElementById("height");
// var hide = document.getElementsByClassName("hide");
// var hide1 = document.getElementsByClassName("hide1");
// var hide2 = document.getElementsByClassName("hide2");
// var zingchart = document.getElementById("zingchart");
// var none1 = document.getElementById("none1");
// var zingchart = document.getElementById("zingchart");
// var search = document.getElementById("search");
// var input = document.getElementById("input");
// var mobile = document.getElementsByClassName("mobile");


// // When the user scrolls down 20px from the top of the document, show the button
// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//   if (window.matchMedia("(min-width: 415px)").matches) {
//     if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
//       myicon.style.color = "#b9b9b9";
//       navbar.classList.add("navbar-change");
//       height.style.height = "55px";
//       for(var i = 0; i < hide.length; i++) {
//         hide[i].classList.add("hide-change");
//       }

//       if (window.matchMedia("(max-width: 768px)").matches) {
//         for(var i = 0; i < hidetablet.length; i++) {
//           hidetablet[i].classList.add("hide-change-tablet");
//         }
//       } else {
//         for(var i = 0; i < hidetablet.length; i++) {
//           hidetablet[i].classList.remove("hide-change-tablet");
//         }
//       }


//       if (window.matchMedia("(max-width: 800px)").matches) {
//         for(var i = 0; i < hide1.length; i++) {
//           hide1[i].style.display = "none";
//         }
//       } else {
//         for(var i = 0; i < hide1.length; i++) {
//           hide1[i].style.display = "block";
//         }
//       }

//       if (window.matchMedia("(max-width: 600px)").matches) {
//         zingchart.style.display = "none";
//       }
//       else {
//         zingchart.style.display = "block";
//       }

//       search.classList.add("search-change");
//       input.classList.add("input-change");
//     } else {
//       myicon.style.color = "#e4e4e4";
//       navbar.classList.remove("navbar-change");
//       height.style.height = "124px";
//       for(var i = 0; i < hide.length; i++) {
//         hide[i].classList.remove("hide-change");
//       }


//       if (window.matchMedia("(max-width: 768px)").matches) {
//         for(var i = 0; i < hidetablet.length; i++) {
//           hidetablet[i].classList.remove("hide-change-tablet");
//         }

//       }

//       if (window.matchMedia("(max-width: 800px)").matches) {
//         for(var i = 0; i < hide1.length; i++) {
//           hide1[i].style.display = "block";
//         }
//         none1.style.display = "none";
//       }

//       if (window.matchMedia("(max-width: 600px)").matches) {
//         for(var i = 0; i < hide2.length; i++) {
//           hide2[i].style.display = "none";
//         }
//         zingchart.style.display = "block";
//       } else {
//         for(var i = 0; i < hide2.length; i++) {
//           hide2[i].style.display = "block";
//         }
//       }

//       search.classList.remove("search-change");
//       input.classList.remove("input-change");
//     }
//   }
//   if (window.matchMedia("(max-width: 414px)").matches) {
//     if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
//       height.style.height = "100px";
//       navbar.classList.remove("navbar-change");
//       for(var i = 0; i < hidetablet.length; i++) {
//         hidetablet[i].classList.remove("hide-change-tablet");
//       }
//       zingchart.style.display = "block";
//       for(var i = 0; i < mobile.length; i++) {
//         mobile[i].style.display = "none";
//       }
//     }
//     else {
//       height.style.height = "100px";
//       navbar.classList.remove("navbar-change");
//       for(var i = 0; i < hidetablet.length; i++) {
//         hidetablet[i].classList.remove("hide-change-tablet");
//       }
//       zingchart.style.display = "block";
//       for(var i = 0; i < mobile.length; i++) {
//         mobile[i].style.display = "none";
//       }
//     }
//   }
// }

// // When the user clicks on the button, scroll to the top of the document
// function topFunction() {
//   document.body.scrollTop = 0;
//   document.documentElement.scrollTop = 0;
// }
