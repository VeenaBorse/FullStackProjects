








function addlist(){
	var listitem = document.getElementById("todo").value;
	var del= "<i class='fa fa-trash' aria-hidden='true'></i>";
	var radio="<input type='checkbox' class='radiochk' >";
	//console.log(listitem);

	if(listitem==""){
		alert("Please enter the task");
		return;
	}


	// console.log(document.getElementById("litask").innerHTML);
	var newtask =  "<li><input type='checkbox' class='radiochk' id='radiobtn' onclick='strike(this);' ><span id='task'>" + listitem +"</span><i class='fa fa-trash' aria-hidden='true' id='delete' onclick='deltask(this);'></i></li>";

	document.getElementById("litask").innerHTML += newtask;
	document.getElementById("todo").value="";

	// document.getElementById("radiobtn").innerHTML +=radio +"<br><br>";
	// document.getElementById("task").innerHTML +="<span>" + listitem +"</span><br><br>";
	// document.getElementById("delete").innerHTML+= del +"<br><br>";
	// 


}


function strike(check){

	var taskstrike= document.getElementById("task");
	taskstrike.classList.add("complete");
	console.log(taskstrike);
	
	// var radiochk = document.querySelectorAll(".radiochk");
	// console.log(radiochk);
	// radiochk.forEach(chk=>{
	// 	chk.addEventListener('click', ()=>{
	// 		chk.classList.add('checked');

	// 	})

		
	// 	console.log(radiochk);
	// })

}

function deltask(){
	document.getElementById("radiobtn").innerHTML ="";
	document.getElementById("task").innerHTML ="";
	document.getElementById("delete").innerHTML="";
}