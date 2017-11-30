/**
 * Created by KimHeeYeon on 2017. 11. 30..
 */
function on() {
    document.getElementById("overlay").style.display = "block";
}

function off() {
    document.getElementById("overlay").style.display = "none";
}

function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    document.getElementById("overlay2").style.display = "block";
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

function clickTable(){
    if(document.getElementById("overlay").style.display == "block")
        document.getElementById("overlay").style.display = "none";
    if(document.getElementById("overlay2").style.display == "block")
        document.getElementById("overlay2").style.display = "none";
}

function logout(evt){
    location.href=location.origin + "/";
}
