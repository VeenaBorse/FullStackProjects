

function addlist(){
	var listitem = document.getElementById("todo").value;
	console.log(listitem);
	var del= "<i class='fa fa-trash' aria-hidden='true'></i>";
	var radio="<input type='checkbox' class='radiochk' >";
	//console.log(listitem);

	if(listitem==""){
		alert("Please enter the task");
		return;
	}

	var newtask =  "<li><input type='checkbox' class='radiochk' id='radiobtn' onclick='strike();'><span class='task'>" + listitem +"</span><i class='fa fa-trash del' aria-hidden='true' id='delete'  onclick='deltask();'></i></li>";

	document.getElementById("litask").innerHTML += newtask;
	document.getElementById("todo").value="";

}


function strike(){
	// console.log(check.nextElementSibling);
	// check.nextElementSibling.classList.toggle('complete');

	// optional to nextElementSibling


	var arrchk = document.querySelectorAll(".radiochk");
	var striketxt =document.querySelectorAll(".task");

	
	for(i=0; i<arrchk.length; i++){
		// console.log(arrchk[i].checked);
		// console.log(striketxt[i]);
			if(arrchk[i].checked == true){
				console.log(striketxt[i]);
			striketxt[i].style.textDecoration="line-through";
		}
		else{
			striketxt[i].style.textDecoration="none";
		}
		
	}
	
}

function deltask(){
	
	var deltask = document.querySelectorAll(".del");
	
	deltask.forEach(del=>{
			del.addEventListener('click', ()=>{
				var comeon=del.parentElement;
				 console.log(del.parentElement);
				 comeon.style.display='none';
			})
		})
	}