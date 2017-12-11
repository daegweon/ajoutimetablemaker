/**
 * Created by KimHeeYeon on 2017. 11. 30..
 */

var incomeCount = 0;
function on() {
    document.getElementById("overlay").style.display = "block";
    incomeCount=1;
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

function makeTable(){
	var incomeCount=0;
	console.log(incomeCount);
    if(incomeCount >0) {
        $.ajax({
            type: "GET",
            url: "/select/getResultTable"
        }).done(function (msg) {
            document.getElementById('TableNameSide').innerText = msg[1];
            add();

            var lectureLength = msg[0].ResultClassList.length;
            for (var j = 0; j < lectureLength; j++) {
                var color = '#'; // hexadecimal starting symbol
                var letters = ['9cd6bc', '9cb0d6', 'd8cd97', 'd6a295', 'c4899c', 'c499d8', 'c1d88f', '7799ce'];
                color += letters[Math.floor(Math.random() * letters.length)];

                var lectureTimeNum = msg[0].ResultClassList[j].LectureTime.length;
                for ( var i = 0; i < lectureTimeNum; i++) {
                    var cellDay = msg[0].ResultClassList[j].LectureTime[i].slice(0, 3);
                    var checkTime = msg[0].ResultClassList[j].LectureTime[i][3];

                    if (isNaN(checkTime)) {
                        if (checkTime == 'A') {
                            for (var k = 1; k < 4; k++) {
                                var checkTable = cellDay + "_" + k;
                                if (k == 2)
                                    document.getElementById(checkTable).innerText = msg[0].ResultClassList[j].className;
                                document.getElementById(checkTable).style.backgroundColor = color;
                            }
                        } else if (checkTime == 'B') {
                            for (var k = 4; k < 7; k++) {
                                var checkTable = cellDay + "_" + k;
                                if (k == 5)
                                    document.getElementById(checkTable).innerText = msg[0].ResultClassList[j].className;
                                document.getElementById(checkTable).style.backgroundColor = color;
                            }
                        } else if (checkTime == 'C') {
                            for (var k = 7; k < 10; k++) {
                                var checkTable = cellDay + "_" + k;
                                if (k == 8)
                                    document.getElementById(checkTable).innerText = msg[0].ResultClassList[j].className;
                                document.getElementById(checkTable).style.backgroundColor = color;
                            }
                        } else if (checkTime == 'D') {
                            for (var k = 10; k < 13; k++) {
                                var checkTable = cellDay + "_" + k;
                                if (k == 11)
                                    document.getElementById(checkTable).innerText = msg[0].ResultClassList[j].className;
                                document.getElementById(checkTable).style.backgroundColor = color;
                            }
                        } else if (checkTime == 'E') {
                            for (var k = 13; k < 16; k++) {
                                var checkTable = cellDay + "_" + k;
                                if (k == 14)
                                    document.getElementById(checkTable).innerText = msg[0].ResultClassList[j].className;
                                document.getElementById(checkTable).style.backgroundColor = color;
                            }
                        } else if (checkTime == 'F') {
                            for (var k = 16; k < 19; k++) {
                                var checkTable = cellDay + "_" + k;
                                if (k == 17)
                                    document.getElementById(checkTable).innerText = msg[0].ResultClassList[j].className;
                                document.getElementById(checkTable).style.backgroundColor = color;
                            }
                        } else if (checkTime == 'G') {
                            for (var k = 19; k < 22; k++) {
                                var checkTable = cellDay + "_" + k;
                                if (k == 20)
                                    document.getElementById(checkTable).innerText = msg[0].ResultClassList[j].className;
                                document.getElementById(checkTable).style.backgroundColor = color;
                            }
                        } else if (checkTime == 'H') {
                            for (var k = 22; k < 25; k++) {
                                var checkTable = cellDay + "_" + k;
                                if (k == 23)
                                    document.getElementById(checkTable).innerText = msg[0].ResultClassList[j].className;
                                document.getElementById(checkTable).style.backgroundColor = color;
                            }
                        }
                    } else {
                        for (var m = 1; m < 13; m++) {
                            if (parseInt(checkTime) == m) {
                                for(var a = 2*m ; a < 2*(m+1); a++) {
                                    var checkTable = cellDay + i + "_" + m;
                                    if(a == 2*m)
                                        document.getElementById(checkTable).innerText = msg[0].ResultClassList[j].className;
                                    document.getElementById(checkTable).style.backgroundColor = color;
                                }
                            }
                        }
                    }
                }
            }

        });
    }
}
