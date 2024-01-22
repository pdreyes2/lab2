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
      toggleAnimate("secText_container", "secTextButton", "translateX(0%)", "translateX(400%)");
      break;
  
    default:
      newPageBtn("back_btn", "../index.html");
      toggleAnimate("links_container", "links", "translateX(-110%)", "translateX(400%)");
      break;
  }