var a = new Array();

//selectArea : 선택된 카테고리 타입을 보내고 받은 Detailed_CategoryType을 띄운다 : 단 여기서 Detailed_CategoryType 이 들어갈 div 생성이 진행되어야함.
function selectArea(Category_Type){

    var parentElement = document.getElementById('DetailedTG');
    // var addDetailedCategory = document.createElement('div');
    console.log("selectArea : " + Category_Type);

    $.ajax({
        type: "POST",
        url: "/select/area",
        data: { Category_Type: Category_Type },
        dataType: 'json',
    }).done(function( msg ) {
        //console.log(msg);
		var Category_nameList = msg;
        var getAllDivElement = document.getElementsByTagName('span');
        for(var i = 0; i < getAllDivElement.length; i++){
            getAllDivElement[i].style.display = "none";
        }
		//document.getElementById('basic_Section').style.display = 'block';
        //document.getElementById('baseCategory').style.display = "block";

        var CategoryLength = Category_nameList.length;
        for ( var i = 0; i < CategoryLength; i++){

            var addDetailedCategory = document.createElement('span');
            addDetailedCategory.id = Category_nameList[i];
            //var categoryClassName = Category_Type + 'Category';
            addDetailedCategory.classList.add('CategoryList');

            var label = document.createElement('label');
            label.htmlFor = addDetailedCategory.id;
            label.appendChild(document.createTextNode(addDetailedCategory.id));

			label.id = Category_nameList[i]+'1';
			var tmpid = Category_nameList[i];
			//console.log(tmpid);
            parentElement.appendChild(addDetailedCategory);
            parentElement.appendChild(label);
          //  console.log(addDetailedCategory.id);
			//console.log(document.getElementById(addDetailedCategory.id));
			document.getElementById(label.id).addEventListener("click",function(){
                //console.log(tmpid);
				selectDetailArea(tmpid);
            },false);
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

//Detailed Type을 보내고 name list를 받는다. 이것들을 사용자에게 checkbox로서 띄워준다,.
function selectDetailArea(Detailed_Type){
    //alert("in");
	//console.log("sda" + Detailed_Type);
    document.getElementById('insertform').style.display = "block";
    document.getElementById('category_name').style.display = "block";
    document.getElementById('category_name').innerText = Detailed_Type;
	

	//console.log(Detailed_Type);
    $.ajax({
        type: "POST",
        url: "/select/Detail",
        data: { Detailed_Type: Detailed_Type }
    }).done(function( msg ) {
		console.log(typeof msg);
        var CategoryClassNameList = JSON.parse(msg);
        var CategoryLength = CategoryClassNameList.length;
        for ( var i = 0; i < CategoryLength; i++){
			console.log(CategoryClassNameList[i]);
            addCheck(CategoryClassNameList[i]);
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
	checkbox.classList.add('DetailedCategoryList');
}

//checkbox에 있는 chekcedlist를 selected list 로서 전송
function Check(form){
    //'확인' 버튼을 클릭했을 때 실행되는 메서드

    var msg = "";
	var arr = new Array();
    var checkedContents = document.getElementsByClassName('DetailedCategoryList');
    for (i = 0; i < checkedContents.length; i++) {
       if(checkedContents[i].checked) {
           msg += checkedContents[i].value + "\n";
		   arr.push(checkedContents[i].value);
		   a.push(checkedContents[i].value);
       }
    }
	console.log(arr);
	$.ajax({
		type: 'POST',
		url: '/select/selectClass',
		data:{ classNameList : JSON.stringify(arr)},
		dataType : 'json'
	}).done(function(){});

	// inner ui change
    document.querySelector('#SelectedList').innerHTML = msg;
}




function Cancel(form){

}



function selectClass(){
    document.getElementById('basic_Section').style.display = "none";
    document.getElementById('essential_session').style.display = 'block';
	document.getElementById('essentialform').style.display = 'block';
    /*checkbox 만들기만 + text*/
    var parentElement = document.getElementById('checkboxform_essential');

    for( var i = 0; i < a.length; i++){
        var checkbox = document.createElement('input');
        checkbox.type = "checkbox";
        checkbox.name = a[i];
        checkbox.value = a[i];
        checkbox.id = a[i]+'_e';
		checkbox.classList.add('essentialList');

        var label = document.createElement('label');
        label.htmlFor = a[i];
        label.appendChild(document.createTextNode(a[i]));
        //checkbox.classList.add('EssentialList');

        parentElement.appendChild(checkbox);
        parentElement.appendChild(label);

        /*
        이건 무슨 코드였
        var addEssentialList = document.createElement('div');
        addEssentialList.id = a[i].className;
        addEssentialList.classList.add('EssentialList');*/
    }
}

//essential list까지 끝났을 때 학점 까지 넣었을 때 이걸 보낸다.

function setClass(){
    //to post essential list

    var checkedContents = document.getElementsByClassName('essentialList');
    var selectedEssentialList = new Array();
    for (i = 0; i < checkedContents.length; i++) {
        if(checkedContents[i].checked) {
            //msg += checkedContents[i].value + " ";
            selectedEssentialList.push(checkedContents[i].value);
        }
    }

    var user_credit = document.getElementById('user_set_credit').value;

    $.ajax({
        type: "POST",
        url: "/select/table",
        data: { EssentialList : selectedEssentialList, set_user_credit : user_credit}
    }).done(function( msg ) {
		
    });
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
