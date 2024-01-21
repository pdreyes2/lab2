document.getElementById("links").addEventListener("click", function(){
    var linksContainer = document.getElementById("links_container");


    linksContainer.style.transform = linksContainer.style.transform === "translateX(400%)" ? "translateX(40%)" : "translateX(400%)";
  });


  document.getElementById("showsecText").addEventListener("click", function(){
    var secText = document.getElementById("secText");

    secText.style.transform = secText.style.transform === "translateX(400%)" ? "translateX(0%)" : "translateX(400%)";
  });


    

