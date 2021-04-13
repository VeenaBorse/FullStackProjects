function openAcc(accName){
	var x = document.getElementById(accName);
	if(x.style.display === "block"){
		x.style.display = "none";
	}else{
	x.style.display = "block";
	}

	/*var y=document.getElementsByClassName('content');

	for (var i = 0; i<y.length; i++) {
		y[i].addEventListener("click",()=>{
			this.classList.toggle("active");

		})
	}
	console.log(y);*/
}


