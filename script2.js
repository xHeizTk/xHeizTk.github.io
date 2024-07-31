/*              Change icon         */
function ChangeIcon() {
    var x = document.getElementById("menu_icon");
    var y = document.getElementById("close_icon");
    if (x.style.display === "block") {
      x.style.display = "none";
      y.style.display = "block";
      document.getElementById("header").style.display = "none";
      document.getElementById("main").style.display= "none";
      document.getElementById("section1").style.display= "none";
      document.getElementById("section2").style.display= "none";
      document.getElementById("footer").style.display= "none";
      document.getElementById("submenu").style.display   = "block";
      
    } 
    else {
        x.style.display = "block";
        y.style.display = "none";
        document.getElementById("header").style.display   = "block";
        document.getElementById("main").style.display     = "block";
        document.getElementById("section1").style.display = "block";
        document.getElementById("section2").style.display = "block";
        document.getElementById("footer").style.display   = "block";
        document.getElementById("submenu").style.display   = "none";
      }
}
function preset(){
    var x = document.getElementById("menu_icon");
    x.style.display = "block";
}


/*              Change media query     */   
var media_match= window.matchMedia("(min-width: 932px)");
function delete_icon(media_match){
    if(media_match.matches){
        document.getElementById("menu_icon").style.display= "none" ;
        document.getElementById("close_icon").style.display= "none" ;
    }
    else{
        document.getElementById("menu_icon").style.display= "block" ;
    }
}

delete_icon(media_match);
media_match.addEventListener("change", function(){delete_icon(media_match);});

/*              Button hover     */   
function buttonhover() {
    document.querySelectorAll("#colored_button").innerHTML = "&#8594 Get Certo for iPhone ";
}
function buttonleft() {
    document.querySelectorAll("#colored_button").innerHTML = "Get Certo for iPhone &#8594";
}













