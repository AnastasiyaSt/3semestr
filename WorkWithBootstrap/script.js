function change_color(col) {
	x = document.getElementById("chang");
	x.style.color = col;
	x=document.getElementById("menu");
	x.style.background = col;
}
function special_color(){
	function changeTxtColor() {
		x = document.getElementById("chang");
		y=document.getElementById("menu");
		if (x.style.color == "blue"){
			x.style.color = "green";
			y.style.background = "green";
		}
		else {
			if (x.style.color == "green"){
					x.style.color = "#707880";
					y.style.background ="#707880";
			}
			else{
					x.style.color = "blue";
					y.style.background ="blue";
			}
		}
	}
	var timer = window.setInterval(changeTxtColor, 1000);
}

	