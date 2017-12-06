/**
 * Created by KimHeeYeon on 2017. 11. 30..
 */
//<<<<<<< HEAD
//=======

//>>>>>>> origin/HeeYeon
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
            //alert(1);
            window.location.replace("/select");
        });
    }
    else if (this.id == 'own') {
        alert('own clicked');
    }
});

function add() {
    var time = ['9:00','9:30','10:00','10:30','11:00','11:30','12:00','12:30',
        '13:00','13:30','14:00','14:30','15:00','15:30','16:00','16:30',
        '17:00','17:30','18:00','18:30','19:00','19:30','20:00','20:30','21:00']
    var target = document.getElementById("dynamicTable");
    var row_num = document.getElementById("row_num").value;
    var currentRowIndex = target.rows.length;
    for (i=0; i<row_num;i++){
        var row = target.insertRow();
        var cell_0 =row.insertCell(0);cell_0.id="time_"+(i+1);cell_0.innerHTML=" "+time[i]+"/"+cell_0.id
        var cell_1=row.insertCell(1);cell_1.id="Mon_"+(i+1);cell_1.innerHTML=" "+cell_1.id;
        var cell_2=row.insertCell(2);cell_2.id="Tue_"+(i+1);cell_2.innerHTML=" "+cell_2.id;
        var cell_3=row.insertCell(3);cell_3.id="Wed_"+(i+1);cell_3.innerHTML=" "+cell_3.id;
        var cell_4=row.insertCell(4);cell_4.id="Thu_"+(i+1);cell_4.innerHTML=" "+cell_4.id;
        var cell_5=row.insertCell(5);cell_5.id="Fri_"+(i+1);cell_5.innerHTML=" "+cell_5.id;
    }
}
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
