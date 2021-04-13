

function openTab(event,tabName){

	var tabcontent = document.getElementsByClassName('tabcontent');

	for (var i = 0; i<tabcontent.length; i++) {
		tabcontent[i].style.display="none";
	}

	var tabname = document.getElementById(tabName);	
	
	tabname.style.display="block";

	
}
