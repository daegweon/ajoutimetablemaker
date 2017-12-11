var counterOfTable = new Array(5);
for (var i = 0; i < 5; i++) {
    counterOfTable[i] = new Array(24);
}

function confirmTimeTable() {

        for( var i = 1; i <5 ; i ++) {
            var selectnum = 'Select' + i;
            if (document.getElementById(selectnum).style.display == "block") {
				
                var table_name = document.getElementById('table_name').value;
				console.log(table_name);
                $.ajax({
                    type: "POST",
                    url: "/select/selectedTable",
                    data: {Table_id: i, Table_name : table_name, user_id : "0000"}
                }).done(function (msg) {
                    window.location.replace('/home');
                });
            }
        }
}

function openTable(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

function add() {
    var time = ['9:00', '9:30', '10:00', '10:30', '11:00', '11:30', '12:00', '12:30',
        '13:00', '13:30', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30',
        '17:00', '17:30', '18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00']

    for (var j = 1; j < 5; j++) {
        var selectnum = 'Select' + j;
        var tablenum = 'dynamicTable' + j;
        var target = document.getElementById(tablenum);
        var row_num = 24;
        for (i = 0; i < row_num; i++) {
            var row = target.insertRow();
            var cell_0 = row.insertCell(0);
            cell_0.id = "time" + j + "_" + (i + 1);
            cell_0.innerHTML = " " + time[i] + "/" + cell_0.id
            var cell_1 = row.insertCell(1);
            cell_1.id = "Mon" + j + "_" + (i + 1);
            var cell_2 = row.insertCell(2);
            cell_2.id = "Tue" + j + "_" + (i + 1);
            var cell_3 = row.insertCell(3);
            cell_3.id = "Wed" + j + "_" + (i + 1);
            var cell_4 = row.insertCell(4);
            cell_4.id = "Thu" + j + "_" + (i + 1);
            var cell_5 = row.insertCell(5);
            cell_5.id = "Fri" + j + "_" + (i + 1);
        }
    }
}

function getTempTimeTable() {

    $.ajax({
        type: "GET",
        url: "/select/tableinfo",
    }).done(function( msg ){
		console.log(msg.length);
		console.log(msg[0]);
        var TempTimeTableList = msg;
        var resultTableNum = TempTimeTableList.length;
		console.log(TempTimeTableList[0]);

        add();

		for (var l = 0; l < resultTableNum; l++) {
            var lectureLength = TempTimeTableList[l].ResultClassList.length;
            for (var j = 0; j < lectureLength; j++) {
                var color = '#'; // hexadecimal starting symbol
                var letters = ['9cd6bc', '9cb0d6', 'd8cd97', 'd6a295', 'c4899c', 'c499d8', 'c1d88f', '7799ce'];
                color += letters[Math.floor(Math.random() * letters.length)];

                var lectureTimeNum = TempTimeTableList[l].ResultClassList[j].LectureTime.length;
                for ( var i = 0; i < lectureTimeNum; i++) {
                    var cellDay = TempTimeTableList[l].ResultClassList[j].LectureTime[i].slice(0, 3);
                    var checkTime = TempTimeTableList[l].ResultClassList[j].LectureTime[i][3];

                    if (isNaN(checkTime)) {
                        if (checkTime == 'A') {
                            for (var k = 1; k < 4; k++) {
                                var checkTable = cellDay + (l+1) + "_" + k;
                                if (k == 2)
                                    document.getElementById(checkTable).innerText = TempTimeTableList[l].ResultClassList[j].className;
                                document.getElementById(checkTable).style.backgroundColor = color;
                            }
                        } else if (checkTime == 'B') {
                            for (var k = 4; k < 7; k++) {
                                var checkTable = cellDay + (l+1) + "_" + k;
                                if (k == 5)
                                    document.getElementById(checkTable).innerText = TempTimeTableList[l].ResultClassList[j].className;
                                document.getElementById(checkTable).style.backgroundColor = color;
                            }
                        } else if (checkTime == 'C') {
                            for (var k = 7; k < 10; k++) {
                                var checkTable = cellDay + (l+1) + "_" + k;
                                if (k == 8)
                                    document.getElementById(checkTable).innerText = TempTimeTableList[l].ResultClassList[j].className;
                                document.getElementById(checkTable).style.backgroundColor = color;
                            }
                        } else if (checkTime == 'D') {
                            for (var k = 10; k < 13; k++) {
                                var checkTable = cellDay + (l+1) + "_" + k;
                                if (k == 11)
                                    document.getElementById(checkTable).innerText = TempTimeTableList[l].ResultClassList[j].className;
                                document.getElementById(checkTable).style.backgroundColor = color;
                            }
                        } else if (checkTime == 'E') {
                            for (var k = 13; k < 16; k++) {
                                var checkTable = cellDay + (l+1) + "_" + k;
                                if (k == 14)
                                    document.getElementById(checkTable).innerText = TempTimeTableList[l].ResultClassList[j].className;
                                document.getElementById(checkTable).style.backgroundColor = color;
                            }
                        } else if (checkTime == 'F') {
                            for (var k = 16; k < 19; k++) {
                                var checkTable = cellDay + (l+1) + "_" + k;
                                if (k == 17)
                                    document.getElementById(checkTable).innerText = TempTimeTableList[l].ResultClassList[j].className;
                                document.getElementById(checkTable).style.backgroundColor = color;
                            }
                        } else if (checkTime == 'G') {
                            for (var k = 19; k < 22; k++) {
                                var checkTable = cellDay + (l+1) + "_" + k;
                                if (k == 20)
                                    document.getElementById(checkTable).innerText = TempTimeTableList[l].ResultClassList[j].className;
                                document.getElementById(checkTable).style.backgroundColor = color;
                            }
                        } else if (checkTime == 'H') {
                            for (var k = 22; k < 25; k++) {
                                var checkTable = cellDay + (l+1) + "_" + k;
                                if (k == 23)
                                    document.getElementById(checkTable).innerText = TempTimeTableList[l].ResultClassList[j].className;
                                document.getElementById(checkTable).style.backgroundColor = color;
                            }
                        }
                    } else {
                        for (var m = 1; m < 13; m++) {
                            if (parseInt(checkTime) == m) {
								for (var a = 2 * m; a < 2 * (m+1); a++){
                                	var checkTable = cellDay + (l+1) + "_" + a;
                                	document.getElementById(checkTable).innerText = TempTimeTableList[l].ResultClassList[j].className;
                                	document.getElementById(checkTable).style.backgroundColor = color;
								}
                            }
                        }
                    }
                }
            }
        }
		for ( var t = 4; t > resultTableNum; t --){
            var tablenum = 'selectTabl' + t;
            var target = document.getElementById(tablenum);
            target.style.display = "none";
        }

    });
}
