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




