var img = [];
img[1] = "img/slider/1.jpg";
img[2] = "img/slider/2.jpg";
img[3] = "img/slider/3.jpg";
img[4] = "img/slider/4.jpg";
img[5] = "img/slider/5.jpg";
img[6] = "img/slider/6.jpg";
img[7] = "img/slider/7.jpg";
img[8] = "img/slider/8.jpg";
i=0;
j=0;
old = 1;
switcher = 1;
selected = 1;
play = 0;
width = window.innerWidth * 0.9;
function next(){
	i=1;
}
function stopnext () {
	i=0;
	switcher = 1;
}

function prev(){
	switcher = 1;
	j=1;
}
function stopprev () {
	j=0;
}
document.getElementById("cnt").innerHTML = "";
document.getElementById("cnt").style.width = img.length*220;
for(k=1;k < img.length;k++){
	document.getElementById("cnt").innerHTML += '<img src="'+ img[k] +'" onclick="changeimg('+k+')">';
}

changeimg(1)
setInterval(function(){
			if((i==1 || (j!=1 && switcher==0 && ((width + document.getElementById("list").scrollLeft) - selected*220) < 200 )) && document.getElementById("list").scrollLeftMax != document.getElementById('list').scrollLeft){
			document.getElementById('list').scrollLeft += 10;
			}
			if((j==1 || (i!=1 && switcher==0 && ((width + document.getElementById("list").scrollLeft) - (selected-1)*220) > width )) && document.getElementById('list').scrollLeft!=0){
 			document.getElementById('list').scrollLeft -= 10;
 			}
		},100);

setInterval(function(){
	if(play == 1){
		(old != img.length-1) ? changeimg(old+1) : changeimg(1);
	}
		},3000);

function changeimg (x) {
	maxwidh = img.length*220;
	switcher = 0;
	postion = document.getElementById("list").scrollLeft;
	rest = (width + postion) - x*220;
	selected = x;
	document.getElementById("cnt").children[old-1].className = "";
	document.getElementById("cnt").children[x-1].className = "selected";
	old = x;
	document.getElementById("slider").style.backgroundImage = "url("+img[x]+")";
}
function dismail () {
	document.getElementById("shadow").style.display = "block";
	document.getElementById("mail").style.display = "block";
}
function hidemail () {
	document.getElementById("shadow").style.display = "none";
	document.getElementById("mail").style.display = "none";
}
function switchview () {
	if(document.getElementById("list").style.height != "0px"){
	document.getElementById("slider").style.height = '100%';
	document.getElementById("list").style.height = 0;
	}else
	{
	document.getElementById("slider").style.height = '75%';
	document.getElementById("list").style.height = '25%';
	}
}

function inext(){
	if(old != img.length-1)
		changeimg(old+1);
}
function iprev () {
	if(old != 1)
		changeimg(old-1);
}
function playstopslide() {
	if(play === 0){
		play = 1;
		document.getElementById("slidep").style.backgroundImage = "url(img/bslidep.png)";
	}else{
		play = 0;
		document.getElementById("slidep").style.backgroundImage = "url(img/bslide.png)";
	}
}

function sendmail () {
	var x = 1;
	if(document.getElementById("name").value.length === 0){
		document.getElementById("name").className += " alert";
		x = 0;
	}
	else{
		document.getElementById("name").className = "text";

	}
	if(document.getElementById("email").value.indexOf("@") == -1){
		document.getElementById("email").className += " alert";
		x = 0;
		}else{
		document.getElementById("email").className = "text";

	}
	if(document.getElementById("subject").value.length === 0){
		document.getElementById("subject").className += " alert";
		x = 0;
	}else{
		document.getElementById("subject").className = "text";
	}
	if(x==1){
	ref = "mailto:kheder.marwen@gmail.com?subject=" + document.getElementById("name").value + "&cc=" + document.getElementById("email").value + "&body=" + document.getElementById("subject").value;
	window.location = ref;
	hidemail();
}
}




