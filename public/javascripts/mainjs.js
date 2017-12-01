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

$('#makeTable').click(function () {
    $.ajax({
            method: "GET",
            url: "/",
        })
        .done(function( data ) {
            //$('#test-h1').text(data.test);
            console.log("done");
        });
});

function clickTable(){
    if(document.getElementById("overlay").style.display == "block")
        document.getElementById("overlay").style.display = "none";
    if(document.getElementById("overlay2").style.display == "block")
        document.getElementById("overlay2").style.display = "none";
}

function logout(evt){
    location.href=location.origin + "/";
}

$('#own,#recommend').click(function () {
    console.log(this.id);
    if (this.id == 'recommend') {
        console.log('asd');

        $.ajax({
            type: "POST",
            url: "/select",
            data: { create_mode: this.id }
        }).done(function( msg ) {
           // alert( "Data Saved: " + msg );
            window.location.replace("/select");
        });
    }
    else if (this.id == 'own') {
        alert('own clicked');
    }
});

/*
$.ajax({
    url: "/select",
    type: "POST",
    dataType : "json",
    data: {create_mode:this.id},
    success:function(response) {
        console.log("ok");
        //window.location.href = '/select';
    }
})*/