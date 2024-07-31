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
const buttonid = document.getElementsByClassName("colored");
const android_button = document.getElementsByClassName("android_button");

buttonid[0].addEventListener("mouseover", function(){
    buttonid[0].innerHTML = "&#8594 Get Certo for iPhone ";
    buttonid[0].style.background= "#f2bd41";
})
buttonid[0].addEventListener("mouseleave", function(){
    buttonid[0].innerHTML = "Get Certo for iPhone &#8594";
    buttonid[0].style.background= "#FFC247";
})
buttonid[1].addEventListener("mouseover", function(){
    buttonid[1].innerHTML = "&#8594 Get Certo for iPhone ";
    buttonid[1].style.background= "#f2bd41";
})
buttonid[1].addEventListener("mouseleave", function(){
    buttonid[1].innerHTML = "Get Certo for iPhone &#8594";
    buttonid[1].style.background= "#FFC247";
})
buttonid[2].addEventListener("mouseover", function(){
    buttonid[2].innerHTML = "&#8594 Get Certo for iPhone ";
    buttonid[2].style.background= "#f2bd41";
})
buttonid[2].addEventListener("mouseleave", function(){
    buttonid[2].innerHTML = "Get Certo for iPhone &#8594";
    buttonid[2].style.background= "#FFC247";
})


document.getElementById("nav_button").addEventListener("mouseover", function(){
    document.getElementById("nav_button").style.background= "#382dba";
})
document.getElementById("nav_button").addEventListener("mouseleave", function(){
    document.getElementById("nav_button").style.background= "#4335de";
})

android_button[0].addEventListener("mouseover", function(){
    android_button[0].style.color = "#4335de";
    android_button[0].style.borderColor= "#4335de"
})
android_button[0].addEventListener("mouseleave", function(){
    android_button[0].style.color = "#000000";
    android_button[0].style.borderColor= "#000000"
})

android_button[1].addEventListener("mouseover", function(){
    android_button[1].style.color = "#4335de";
    android_button[1].style.borderColor= "#4335de"
})
android_button[1].addEventListener("mouseleave", function(){
    android_button[1].style.color = "#000000";
    android_button[1].style.borderColor= "#000000"
})
android_button[2].addEventListener("mouseover", function(){
    android_button[2].style.color = "#4335de";
    android_button[2].style.borderColor= "#4335de"
})
android_button[2].addEventListener("mouseleave", function(){
    android_button[2].style.color = "#000000";
    android_button[2].style.borderColor= "#000000"
})








