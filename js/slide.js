var img = [];
img[0] = "img/slider/1.jpg";
img[1] = "img/slider/2.jpg";
img[2] = "img/slider/3.jpg";
img[3] = "img/slider/4.jpg";
var slide = {};
slide.obj = document.getElementById("slider");
slide.cnt = 0;
slide.max = img.length-1;
slide.change = (function(x){
	slide.cnt = x;
	slide.obj.style.backgroundImage = "url("+img[x]+")";
});

setInterval(function(){
	if(slide.cnt == slide.max)
		slide.change(0);
	else
		slide.change(slide.cnt+1);

},5000);
