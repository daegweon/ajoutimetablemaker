var a = new Array();

//selectArea : 선택된 카테고리 타입을 보내고 받은 Detailed_CategoryType을 띄운다 : 단 여기서 Detailed_CategoryType 이 들어갈 div 생성이 진행되어야함.
function selectArea(Category_Type){

    var parentElement = document.getElementById('DetailedTG');
    console.log("selectArea : " + Category_Type);

    $.ajax({
        type: "POST",
        url: "/select/area",
        data: { Category_Type: Category_Type },
        dataType: 'json',
    }).done(function( msg ) {
		var Category_nameList = msg;
        var getAllDivElement = document.getElementsByTagName('span');
        for(var i = 0; i < getAllDivElement.length; i++){
            getAllDivElement[i].style.display = "none";
        }

        var CategoryLength = Category_nameList.length;
        for ( var i = 0; i < CategoryLength; i++){

            var addDetailedCategory = document.createElement('span');
            addDetailedCategory.id = Category_nameList[i];
            addDetailedCategory.classList.add('CategoryList');

            var label = document.createElement('label');
            label.htmlFor = addDetailedCategory.id;
            label.appendChild(document.createTextNode(addDetailedCategory.id));

			label.id = Category_nameList[i]+'1';
			var tmpid = Category_nameList[i];
			var brtag = new Array();
			parentElement.appendChild(addDetailedCategory);
            parentElement.appendChild(label);
			brtag[i] = document.createElement('br');
			parentElement.appendChild(brtag[i]);
			document.getElementById(label.id).addEventListener("click",function(){
				selectDetailArea(tmpid);
            },false);
        }
    });
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

function Check(form){

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
		data:{ classNameList : JSON.stringify(arr)}
	}).done(function(){
		console.log('check ok');
	});

    document.querySelector('#SelectedList').innerHTML = msg;
}




function Cancel(form){

}



function selectClass(){
    document.getElementById('basic_Section').style.display = "none";
    document.getElementById('essential_session').style.display = 'block';
	document.getElementById('essentialform').style.display = 'block';
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

        parentElement.appendChild(checkbox);
        parentElement.appendChild(label);

    }
}

//essential list까지 끝났을 때 학점 까지 넣었을 때 이걸 보낸다.

function setClass(){
    //to post essential list

    var checkedContents = document.getElementsByClassName('essentialList');
    var selectedEssentialList = new Array();
    for (i = 0; i < checkedContents.length; i++) {
        if(checkedContents[i].checked) {
            selectedEssentialList.push(checkedContents[i].value);
        }
    }

    var user_credit = document.getElementById('user_set_credit').value;
	console.log(user_credit);
	console.log(selectedEssentialList);
    $.ajax({
        type: "POST",
        url: "/select/table",
        data: { EssentialList : JSON.stringify(selectedEssentialList), set_user_credit : user_credit}
    }).done(function( msg ) {
		console.log(msg);
		window.location.replace('/table');
		
    });
}



