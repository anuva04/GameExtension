var colors = generateRandomColors(6);
var sq = document.querySelectorAll(".sq");
var colorName = document.querySelector("h1");
var correctColor = colors[Math.floor(Math.random()*6 + 1)];
var message = document.querySelector("#message");
var msgdiv = document.querySelector("#msgdiv");
var reset = document.querySelector("#reset");
colorName.textContent = correctColor;
for(var i=0; i<sq.length; i++)
{
	sq[i].style.background = colors[i];
	sq[i].addEventListener("click", function(){
		if(this.style.background === correctColor){
			message.textContent = "CORRECT !!!";
			changeColors(correctColor);
			reset.textContent = "PLAY AGAIN??";
		}
		else {
			this.style.background = "#232323";
			message.textContent = "TRY AGAIN !!!";
		}
	});
};
function changeColors(color){
	for(var i=0; i<sq.length; i++)
	{
		sq[i].style.background = color;
	}
};
reset.addEventListener("click", function(){
	colors = generateRandomColors(6);
	correctColor = colors[Math.floor(Math.random()*6 + 1)];
	colorName.textContent = correctColor;
	for(var i=0; i<sq.length; i++)
	{
		sq[i].style.background = colors[i];
	}
});

function generateColor(){
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}
function generateRandomColors(num){
	var arr = [];
	for(var i=0; i<num; i++)
	{
		arr.push(generateColor());
	}
	return arr;
};
// var score = document.querySelector("#scorespan");