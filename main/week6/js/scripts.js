// Functions

function slideAnimate(buttonID, showID, tx1, tx2)
{
var animate = document.getElementById(buttonID);
var isOpened = false;
document.getElementById(showID).addEventListener("click", function(){
    
    isOpened = !isOpened;

    animate.style.transform = isOpened ? tx1 : tx2;

});
}

function newPageBtn(nPBtn, path){
  document.getElementById(nPBtn).addEventListener("click", function(){
    var open = path;

    window.location.href = open;
  });

}


// Codes for index && ref HTMLs

// Checks if html file has "ref_page", no check will create errors and program will not execute
if (document.getElementById("ref_page")){

  newPageBtn("back_btn", "../index.html")

  slideAnimate("links_container", "links", "translateX(-110%)", "translateX(400%)");

}

else{

  slideAnimate("links_container", "links", "translateX(-110%)", "translateX(400%)");

  slideAnimate("secText_container", "secTextButton", "translateX(0%)", "translateX(400%)")

}





    

