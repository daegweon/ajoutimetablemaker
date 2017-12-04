var a = new Array;

function Check(form){
    //'확인' 버튼을 클릭했을 때 실행되는 메서드
    var msg = "";

    var checkedContents = document.getElementsByClassName('CategoryList');
    for (i = 0; i < checkedContents.length; i++) {
       if(checkedContents[i].checked) {
           //msg += checkedContents[i].value + " ";
           var obj = new Object();
           obj.ClassName = checkedContents[i].value;
           a.push(obj);
       }
    }

    /*
    evt.currentTarget.className += " active";
    if (form.cb1A.checked)
        msg += form.cb1A.value + " ";
    if (form.cb1B.checked)
        msg += form.cb1B.value + " ";
    if (form.cb1C.checked)
        msg += form.cb1C.value + " ";
    if (form.cb1D.checked)
        msg += form.cb1D.value + " ";
    if (form.cb1E.checked)
        msg += form.cb1E.value + "\n";
*/
    /*
    if(document.getElementById('id')){
        if(document.getElementById('id').checked)
            msg += document.getElementById('id').value + " ";
    }*/

    var myJSON = JSON.stringify(a);

    //document.querySelector('#SelectedList').innerHTML = msg;


    $.ajax({
        type: "POST",
        url: "/select/category",
        data: myJSON,
        dataType: 'json'
    }).done(function( msg ) {

    });
}

function selectArea(Category_Type){

    var parentElement = document.getElementById('DetailedTG');
   // var addDetailedCategory = document.createElement('div');
    console.log("selectArea : " + Category_Type);

    $.ajax({
        type: "POST",
        url: "/select/area",
        data: { Category_Type: Category_Type },
        dataType: 'json'
    }).done(function( msg ) {
        var CategoryList = JSON.parse(msg);
        var CategoryLength = CategoryList.length;
        for ( var i = 0; i < CategoryLength; i++){
            var getAllDivElement = document.getElementsByTagName('div');
            for(var i = 0; i < getAllDivElement.length; i++){
                getAllDivElement[i].style.display = "none"
            }
            document.getElementById('baseCategory').style.display = "block";

            var addDetailedCategory = document.createElement('div');
            addDetailedCategory.id = CategoryList[i];
            addDetailedCategory.classList.add('CategoryList');

            var label = document.createElement('label');
            label.htmlFor = addDetailedCategory.id;
            label.appendChild(document.createTextNode(addDetailedCategory.id));

            parentElement.appendChild(addDetailedCategory);
            addDetailedCategory.appendChild(label);
            document.getElementById(addDetailedCategory.id).addEventListener("click",function(Category_Type){
                selectDetailArea(Category_Type);
            });
        }
    });
    /*
    var addDetailedCategory = document.createElement('div');

    addDetailedCategory.id = "software";

    var label = document.createElement('label');
    label.htmlFor = addDetailedCategory.id;
    label.appendChild(document.createTextNode(addDetailedCategory.id));

    //addDetailedCategory.addEventListener("click", selectDetailArea(Category_Type));
    //addDetailedCategory.onclick =selectDetailArea('Major');
    //addDetailedCategory.on('click',selectDetailArea('Major'));
    parentElement.appendChild(addDetailedCategory);
    addDetailedCategory.appendChild(label);
    document.getElementById("software").addEventListener("click",function(Category_Type){
        selectDetailArea(Category_Type);
    });*/

    //selectDetailArea(Category_Type)

}

function selectDetailArea(Detailed_Type){
    //alert("in");
    document.getElementById('insertform').style.display = "block";
    document.getElementById('category_name').style.display = "block";
    document.getElementById('category_name').innerText = Detailed_Type;



    $.ajax({
        type: "POST",
        url: "/select/Detail",
        data: { Detailed_Type: this.Detailed_Type }
    }).done(function( msg ) {
        var CategoryClassNameList = JSON.parse(msg);
        var CategoryLength = CategoryClassNameList.length;
        for ( var i = 0; i < CategoryLength; i++){
           addCheck(CategoryClassNameList[i].className);
        }
    });
}
/*
var selectDetailArea = function(){
    alert("in");
    document.getElementById('insertform').style.display = "block";
    document.getElementById('category_name').style.display = "block";
    document.getElementById('category_name').innerText = Category_Type;
}*/

function Cancel(form){

}

function addCheck(className){
    //var checkboxList = JSON.parse(classNameList);
    var parentElement = document.getElementById('checkboxform');
    var checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    checkbox.name = className;
    checkbox.value = className;
    checkbox.id = className;

    var label = document.createElement('label')
    label.htmlFor = className;
    label.appendChild(document.createTextNode(className));

    parentElement.appendChild(checkbox);
    parentElement.appendChild(label);
}

function selectClass(){
    document.getElementById('basic_Section').style.display = "none";
    //document.getElementById('user_set_id').style.display = 'block';

    /*checkbox 만들고

    confirm 눌렀을 때 => credit text 입력 띄우고 => confirm => 함수 만들어서 ajox 실행
*/
    var parentElement = document.getElementById('checkboxform_essential');

    for( var i = 0; i < a.length; i++){
        var checkbox = document.createElement('input');
        checkbox.type = "checkbox";
        checkbox.name = a[i].ClassName;
        checkbox.value = a[i].ClassName;
        checkbox.id = a[i].ClassName;

        var label = document.createElement('label')
        label.htmlFor = a[i].ClassName;
        label.appendChild(document.createTextNode(a[i].ClassName));
        //checkbox.classList.add('EssentialList');

        parentElement.appendChild(checkbox);
        parentElement.appendChild(label);

        var addEssentialList = document.createElement('div');
        addEssentialList.id = a[i].className;
        addEssentialList.classList.add('EssentialList');
    }


    $.ajax({
        type: "POST",
        url: "/select/detailed_type",
        data: { Detailed_Type: this.Detailed_Type }
    }).done(function( msg ) {
        var CategoryClassNameList = JSON.parse(msg);
        var CategoryLength = CategoryClassNameList.length;
        for ( var i = 0; i < CategoryLength; i++){
            addCheck(CategoryClassNameList[i].className);
        }
    });
}

function setClass(){


    var checkedContents = document.getElementsByClassName('CategoryList');
    for (i = 0; i < checkedContents.length; i++) {
        if(checkedContents[i].checked) {
            //msg += checkedContents[i].value + " ";
            var obj = new Object();
            obj.ClassName = checkedContents[i].value;
            a.push(obj);
        }
    }
}


/*
var getJSON = function(url, callback) {

    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';

    xhr.onload = function() {

        var status = xhr.status;

        if (status == 200) {
            callback(null, xhr.response);
        } else {
            callback(status);
        }
    };

    xhr.send();
};

getJSON('http://time.jsontest.com',  function(err, data) {

    if (err != null) {
        console.error(err);
    } else {
        var classname = `Date: ${data.date}`

        console.log(classname);
    }
});*/


/*
var parentElement = document.getElementById('myParentElement');

if(parentElement != null)
   parentElement.appendChild(myChildElement);

    var newCheckBox = document.createElement('input');
    newCheckBox.type = 'checkbox';
    newCheckBox.id = 'ptworkinfo' + count; // need unique Ids!
    newCheckBox.value = check_value[count] + '<br/>';

    parentElement.appendChild(newCheckBox);*/