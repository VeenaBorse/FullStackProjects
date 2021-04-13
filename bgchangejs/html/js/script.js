




var colorid=document.querySelectorAll(".colorme");

colorid.forEach(colorme=>{
	colorme.addEventListener('click', () =>{

		 var bg_color = colorme.innerHTML; //extract color code from HTML
		 var colorid = colorme.id;
		 var spanimage= document.getElementById("mood");

		 console.log(spanimage);

		 //set background color with clicked color option 

		document.body.style.background="none";
	
		//set background of span with some related color

		var imgurl= "url('../html/images/" + colorid+".jpg')";

		spanimage.style.backgroundImage= imgurl;
		spanimage.style.backgroundSize="cover";

		//set body background color

		// document.body.style.background= "linear-gradient(360deg, " + bg_color + ", #fff)";

		var colortxt = document.querySelector(".colorme");

		var colortxt = document.getElementsByClassName(colorid);

		for(x=0; x<colortxt.length; x++){
				removecolortext();
			colortxt[x].style.display="inline";
		}
	})
		
})

function removecolortext(){
			
		var txtspan= document.getElementsByTagName("span");
		var txtp = document.getElementsByTagName("p");
		console.log(txtp);
			for(i=0; i<txtspan.length; i++){
			txtspan[i].style.display="none";
			txtp[0].style.display = "none";
				}
		}
