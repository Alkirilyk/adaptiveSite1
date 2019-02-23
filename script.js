let images = ["img/photo1.png","img/photo2.png","img/photo3.png"];

let btnPrev = document.querySelector(".prev_btn");
let btnNext = document.querySelector(".next_btn");
let slider = document.querySelector(".slider_photo");
let curImNum = 0;

btnNext.addEventListener("click",function(){
	slider.style.backgroundImage = `url(${images[curImNum++]})`;
	if(curImNum >= images.length){
		curImNum = 0;
	}
})

btnPrev.addEventListener("click",function(){
	slider.style.backgroundImage = `url(${images[curImNum--]})`;
	if(curImNum < 0){
		curImNum = 2;
	}
})


// let btnMenu = document.querySelector(".burger_touch");
// let burgerMenu = document.querySelector(".burger_menu");

// btnMenu.addEventListener("click",function(){
//     burgerMenu.style.display = "block";
// })


$(".burger_touch").click(function(){
	$(".burger_menu").toggle();
})

$(".basic-file").click(function(){
	($(".imagem").attr("src","img/cofeemachine.png"))
	$(".about-beginers").html("Beginners Course");
})

$(".premium-file").click(function(){
	($(".imagem").attr("src","img/coffee-section2.png"))
	$(".about-beginers").html("Premium Course");
})

$(".platinum-file").click(function(){
	($(".imagem").attr("src","img/coffee-section3.png"))
	$(".about-beginers").html("Platinum Course");
})

$(".left-info").click(function(){
	($(".specialist").attr("src","img/spec2-2.png"))
	$(".name-spec").html("Alexis Kirilyk");
	$(".left-info").css("display","none");
})

$(".right-info").click(function(){
	($(".specialist").attr("src","img/man.png"))
	$(".left-info").css("display","block");
	// $(".name-spec").html("Alexis Kirilyk");
})