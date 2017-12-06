var counterOfTable[5][24] = [];

function confirmTimeTable() {
    for( var i = 0; i <5 ; i ++){
        var selectnum = 'Select' + i;
        if(document.getElementById(selectnum).style.display == "block"){
            
            $.ajax({
                type: "POST",
                url: "/select",
                data: { Table_id: selectnum },
            }).done(function( msg ) {
                var SelectedClassNameList = JSON.parse(msg);
                var ClassListLength = SelectedClassNameList.length;
                var cellDay;

                for ( var l = 0; l < ClassListLength; l++){
                    var lectureLength = SelectedClassNameList[ClassListLength].LectureTime.length;
                    for( var j = 0; j < lectureLength; j++){
                        var checkDay = SelectedClassNameList[ClassListLength].LectureTime[j][0];
                        var checkTime = SelectedClassNameList[ClassListLength].LectureTime[j][1];
                        if(checkDay == "월"){ cellDay = "Mon"; }
                        else if(checkDay == "화"){ cellDay = "Tue"; }
                        else if(checkDay == "수"){ cellDay = "Wed"; }
                        else if(checkDay == "목"){ cellDay = "Thu"; }
                        else if(checkDay == "금"){ cellDay = "Fri"; }
                        
                        if(isNaN(checkTime)){
                            if(checkTime == 'A'){ 
                                for(var k = 1; k < 4; k++){
                                    var checkTable = cellDay + i+ "_" + k;
                                    document.getElementById(checkTable).innerText = checkTable;
                                    counterOfTable[j][k] = counterOfTable[j][k] + 1;
                                }
                            }else if(checkTime == 'B'){ 
                                for(var k = 4; k < 7; k++){
                                    var checkTable = cellDay + i+ "_" + k;
                                   document.getElementById(checkTable).innerText = checkTable;
                                    counterOfTable[j][k] = counterOfTable[j][k] + 1;
                                }
                            }else if(checkTime == 'C'){ 
                                for(var k = 7; k < 10; k++){
                                    var checkTable = cellDay + i+ "_" + k;
                                    document.getElementById(checkTable).innerText = checkTable;
                                    counterOfTable[j][k] = counterOfTable[j][k] + 1;
                                }
                            }else if(checkTime == 'D'){ 
                                for(var k = 10; k < 13; k++){
                                    var checkTable = cellDay + i+ "_" + k;
                                    document.getElementById(checkTable).innerText = checkTable;
                                    counterOfTable[j][k] = counterOfTable[j][k] + 1;
                                }
                            }else if(checkTime == 'E'){ 
                                for(var k = 13; k < 16; k++){
                                    var checkTable = cellDay + i+ "_" + k;
                                    document.getElementById(checkTable).innerText = checkTable;
                                    counterOfTable[j][k] = counterOfTable[j][k] + 1;
                                }
                            }else if(checkTime == 'F'){ 
                                for(var k = 16; k < 19; k++){
                                    var checkTable = cellDay + i+ "_" + k;
                                    document.getElementById(checkTable).innerText = checkTable;
                                    counterOfTable[j][k] = counterOfTable[j][k] + 1;
                                }
                            }else if(checkTime == 'G'){ 
                                for(var k = 19; k < 22; k++){
                                    var checkTable = cellDay + i+ "_" + k;
                                    document.getElementById(checkTable).innerText = checkTable;
                                    counterOfTable[j][k] = counterOfTable[j][k] + 1;
                                }
                            }else if(checktime == 'H'){ 
                                for(var k = 22; k < 25; k++){
                                    var checkTable = cellDay + i +"_" + k;
                                    document.getElementById(checkTable).innerText = checkTable;
                                    counterOfTable[j][k] = counterOfTable[j][k] + 1;
                                }
                            }
                        }else{
                            for( var m = 1; m < 25; m++){
                                if(parseInt(checkTime) == m){
                                    var checkTable = cellDay + i+ "_" + m;
                                    document.getElementById(checkTable).innerText = checkTable;
                                    counterOfTable[j][m] = counterOfTable[j][m] + 1;
                                }
                            }
                        }
                    }
                }
            });
        }else{
            var selectTab = 'selectTabl' + i;
            document.getElementById(selectTab).style.display = "none";
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
    var time = ['9:00','9:30','10:00','10:30','11:00','11:30','12:00','12:30',
        '13:00','13:30','14:00','14:30','15:00','15:30','16:00','16:30',
        '17:00','17:30','18:00','18:30','19:00','19:30','20:00','20:30','21:00']

    for(var j = 1; j < 5; j++){
        var selectnum = 'Select'+j;
        var tablenum = 'dynamicTable' + j;
        var row_num = 'row_num'+j;
        if(document.getElementById(selectnum).style.display == "block"){
            var target = document.getElementById(tablenum);
            var row_num = document.getElementById(row_num).value;
            var currentRowIndex = target.rows.length;
            for (i=0; i<row_num;i++){
                var row = target.insertRow();
                var cell_0 =row.insertCell(0);cell_0.id="time"+j+"_"+(i+1);cell_0.innerHTML=" "+time[i]+"/"+cell_0.id
                var cell_1=row.insertCell(1);cell_1.id="Mon"+j+"_"+(i+1);cell_1.innerHTML=" "+cell_1.id;
                var cell_2=row.insertCell(2);cell_2.id="Tue"+j+"_"+(i+1);cell_2.innerHTML=" "+cell_2.id;
                var cell_3=row.insertCell(3);cell_3.id="Wed"+j+"_"+(i+1);cell_3.innerHTML=" "+cell_3.id;
                var cell_4=row.insertCell(4);cell_4.id="Thu"+j+"_"+(i+1);cell_4.innerHTML=" "+cell_4.id;
                var cell_5=row.insertCell(5);cell_5.id="Fri"+j+"_"+(i+1);cell_5.innerHTML=" "+cell_5.id;
            }
        }
    }
}var counterOfTable = new Array(5);
for( var i = 0; i < 5; i++){
    counterOfTable[i] = new Array(24);
}

function confirmTimeTable() {

    for( var i = 0; i <5 ; i ++){
        var selectnum = 'Select' + i;
        if(document.getElementById(selectnum).style.display == "block"){
            
            $.ajax({
                type: "POST",
                url: "/select",
                data: { Table_id: selectnum },
            }).done(function( msg ) {
                var SelectedClassNameList = JSON.parse(msg);
                var ClassListLength = SelectedClassNameList.length;
                var cellDay;

                for ( var l = 0; l < ClassListLength; l++){
                    var lectureLength = SelectedClassNameList[l].LectureTime.length;
                    for( var j = 0; j < lectureLength; j++){
                        var color = '#'; // hexadecimal starting symbol
                        var letters = ['9cd6bc','9cb0d6','d8cd97','d6a295','c4899c','c499d8','c1d88f','7799ce'];
                        color += letters[Math.floor(Math.random() * letters.length)];

                        var cellDay = SelectedClassNameList[ClassListLength].LectureTime[j].slice(0,3);
                        var checkTime = SelectedClassNameList[ClassListLength].LectureTime[j][3];
                        //if(checkDay == "Mon"){ cellDay = "Mon"; }
                        //else if(checkDay == "Tue"){ cellDay = "Tue"; }
                        //else if(checkDay == "Wed"){ cellDay = "Wed"; }
                        //else if(checkDay == "Thu"){ cellDay = "Thu"; }
                        //else if(checkDay == "Fri"){ cellDay = "Fri"; }
                        
                        if(isNaN(checkTime)){
                            if(checkTime == 'A'){ 
                                for(var k = 1; k < 4; k++){
                                    var checkTable = cellDay + i+ "_" + k;
                                    if(k ==2)
                                        document.getElementById(checkTable).innerText = SelectedClassNameList[l].ClassName;
                                    //counterOfTable[j][k] = counterOfTable[j][k] + 1;
                                    document.getElementById(checkTable).style.backgroundColor = color;
                                }
                            }else if(checkTime == 'B'){ 
                                for(var k = 4; k < 7; k++){
                                    var checkTable = cellDay + i+ "_" + k;
                                    if(k ==5)
                                        document.getElementById(checkTable).innerText = SelectedClassNameList[l].ClassName;
                                    //counterOfTable[j][k] = counterOfTable[j][k] + 1;
                                    document.getElementById(checkTable).style.backgroundColor = color;
                                }
                            }else if(checkTime == 'C'){ 
                                for(var k = 7; k < 10; k++){
                                    var checkTable = cellDay + i+ "_" + k;
                                    if(k ==8)
                                        document.getElementById(checkTable).innerText = SelectedClassNameList[l].ClassName;
                                    //counterOfTable[j][k] = counterOfTable[j][k] + 1;
                                    document.getElementById(checkTable).style.backgroundColor = color;
                                }
                            }else if(checkTime == 'D'){ 
                                for(var k = 10; k < 13; k++){
                                    var checkTable = cellDay + i+ "_" + k;
                                    if(k ==11)
                                        document.getElementById(checkTable).innerText = SelectedClassNameList[l].ClassName;
                                    //counterOfTable[j][k] = counterOfTable[j][k] + 1;
                                    document.getElementById(checkTable).style.backgroundColor = color;
                                }
                            }else if(checkTime == 'E'){ 
                                for(var k = 13; k < 16; k++){
                                    var checkTable = cellDay + i+ "_" + k;
                                    if(k ==14)
                                        document.getElementById(checkTable).innerText = SelectedClassNameList[l].ClassName;
                                    //counterOfTable[j][k] = counterOfTable[j][k] + 1;
                                    document.getElementById(checkTable).style.backgroundColor = color;
                                }
                            }else if(checkTime == 'F'){ 
                                for(var k = 16; k < 19; k++){
                                    var checkTable = cellDay + i+ "_" + k;
                                    if(k ==17)
                                        document.getElementById(checkTable).innerText = SelectedClassNameList[l].ClassName;
                                    //counterOfTable[j][k] = counterOfTable[j][k] + 1;
                                    document.getElementById(checkTable).style.backgroundColor = color;
                                }
                            }else if(checkTime == 'G'){ 
                                for(var k = 19; k < 22; k++){
                                    if(k ==20)
                                        document.getElementById(checkTable).innerText = SelectedClassNameList[l].ClassName;
                                    //counterOfTable[j][k] = counterOfTable[j][k] + 1;
                                    document.getElementById(checkTable).style.backgroundColor = color;
                                }
                            }else if(checktime == 'H'){ 
                                for(var k = 22; k < 25; k++){
                                    var checkTable = cellDay + i +"_" + k;
                                    if(k ==23)
                                        document.getElementById(checkTable).innerText = SelectedClassNameList[l].ClassName;
                                    //counterOfTable[j][k] = counterOfTable[j][k] + 1;
                                    document.getElementById(checkTable).style.backgroundColor = color;
                                }
                            }
                        }else{
                            for( var m = 1; m < 25; m++){
                                if(parseInt(checkTime) == m){
                                    var checkTable = cellDay + i+ "_" + m;
                                    document.getElementById(checkTable).innerText = SelectedClassNameList[l].ClassName;
                                    //counterOfTable[j][k] = counterOfTable[j][k] + 1;
                                    document.getElementById(checkTable).style.backgroundColor = color;
                                }
                            }
                        }
                    }
                }
            });
        }else{
            var selectTab = 'selectTabl' + i;
            document.getElementById(selectTab).style.display = "none";
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
    var time = ['9:00','9:30','10:00','10:30','11:00','11:30','12:00','12:30',
        '13:00','13:30','14:00','14:30','15:00','15:30','16:00','16:30',
        '17:00','17:30','18:00','18:30','19:00','19:30','20:00','20:30','21:00']

    for(var j = 1; j < 5; j++){
        var selectnum = 'Select'+j;
        var tablenum = 'dynamicTable' + j;
        var row_num = 'row_num'+j;
        if(document.getElementById(selectnum).style.display == "block"){
            var target = document.getElementById(tablenum);
            var row_num = 24;//document.getElementById(row_num).value;
            var currentRowIndex = target.rows.length;
            for (i=0; i<row_num;i++){
                var row = target.insertRow();
                var cell_0 =row.insertCell(0);cell_0.id="time"+j+"_"+(i+1);cell_0.innerHTML=" "+time[i]+"/"+cell_0.id
                var cell_1=row.insertCell(1);cell_1.id="Mon"+j+"_"+(i+1);cell_1.innerHTML=" "+cell_1.id;
                var cell_2=row.insertCell(2);cell_2.id="Tue"+j+"_"+(i+1);cell_2.innerHTML=" "+cell_2.id;
                var cell_3=row.insertCell(3);cell_3.id="Wed"+j+"_"+(i+1);cell_3.innerHTML=" "+cell_3.id;
                var cell_4=row.insertCell(4);cell_4.id="Thu"+j+"_"+(i+1);cell_4.innerHTML=" "+cell_4.id;
                var cell_5=row.insertCell(5);cell_5.id="Fri"+j+"_"+(i+1);cell_5.innerHTML=" "+cell_5.id;
            }
        }
    }
}
function getTableInfo(){

}
