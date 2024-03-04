// Function to toggle animation
function toggleAnimate(elementID, toggleID, value1, value2) {
    const element = document.getElementById(elementID);
    let isOpened = false;
  
    document.getElementById(toggleID).addEventListener("click", function () {
      isOpened = !isOpened;
      element.style.transform = isOpened ? value1 : value2;
    });
  }
  
  // Function for new page button
  function newPageBtn(buttonID, path) {
    document.getElementById(buttonID).addEventListener("click", function () {
      window.location.href = path;
    });
  }

  
  
  // Check which HTML page is currently on
  const currentPageId = document.body.id;
  
  switch (currentPageId) {
    case "ref_page":
      newPageBtn("back_btn", "../index.html");
      toggleAnimate("links_container", "links", "translateX(-110%)", "translateX(400%)");
      break;
  
    case "home_page":
      toggleAnimate("links_container", "links", "translateX(-110%)", "translateX(400%)");
      //toggleAnimate("secText_container", "secTextButton", "translateX(0%)", "translateX(400%)");
      break;
    
    case "keyboard_page":
      newPageBtn("back_btn", "../index.html");
      toggleAnimate("links_container", "links", "translateX(-110%)", "translateX(400%)");


      /*modal*/

      var keebElements = document.querySelectorAll('.keeb');
      var modal = document.getElementById("modalImage");

      // Function for clicking every keyboard pics
      function modalClick() {
      var modal = document.getElementById("modalImage");
      var modalImg = document.getElementById("modals");

      modalImg.src = this.src;
      modal.style.display = "block";
      }

      keebElements.forEach(function (element) {
      element.addEventListener('click', modalClick);
      });

      // Modal closer
      var span = document.getElementsByClassName("close")[0];
      span.onclick = function () {
      modal.style.display = "none";
      };
      break;

      /*modal end*/
    case "valentines":
      newPageBtn("back_btn", "../index.html");
      toggleAnimate("vtextContainer", "yesButton", "translateX(0)", "translateX(400%)");
      toggleAnimate("links_container", "links", "translateX(-110%)", "translateX(400%)");
      break;

    default:
      newPageBtn("back_btn", "../index.html");
      toggleAnimate("links_container", "links", "translateX(-110%)", "translateX(400%)");

      break;
  }





// TEST TEST

const text2 = document.querySelectorAll('.sec_text')

window.addEventListener('scroll', checkAnimation)

function checkAnimation(){
    const triggerBottom = (window.innerHeight / 1.2)

    text2.forEach(text => {
        const text2Top = text.getBoundingClientRect().top

        if(text2Top<triggerBottom){
            text.classList.add('show')
        }else{
            text.classList.remove('show')
        }

    })

    
}


var v1 = "variable1";
let v2 = "variable2";
const v3 = "variable3";

// Numbers:
let v4 = 16;
let v5 = 7.5;

// Strings:
let v6 = "Yellow";
let v7 = "Johnson";

// Booleans
let v8 = true;
let v9 = false;

// Object:
const v10 = {firstName:"John", lastName:"Doe"};

// Array object:
const v11 = ["Saab", "Volvo", "BMW"];

// Date object:
const v12 = new Date("2022-03-25"); 

Boolean(10>9)
Boolean(x>y)

let v13 = 3.14;    // A number with decimals
let v14 = 3;       // A number without decimals 

let v15 = v13 + v14;
v15 += v14;
v15 -=v14;

let v16 = (100 + 50) * v14;
Math.round(v16);

let carname= "Maserati";




