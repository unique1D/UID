var i=1;
var reg=1;
function clicked(){
		if(i==1){
			$('#loginbox').css('display','inline');
			$('#login').animate({
				"left": "1000px"
			});
			console.log("hello");
			$('#lbutton').css('background','#AEB404');
			document.getElementById('lbutton').value="BACK";
			$('body').css('overflow-x','hidden');
			$('body').css('overflow-y','hidden');
			i=0;
			return;
		}
		else{
			$('#login').animate({
				"left": "1313px"
			});
			$('#lbutton').css('background','#FF8000');
			document.getElementById('lbutton').value="LOGIN";
			$('body').css('overflow-x','visible');
			$('body').css('overflow-x','visible');
			i=1;
			return;

		}
}
$(document).ready(function(){
	$('#lbutton').click(function(){
		clicked();
		if(i==1)
		setTimeout(function(){$('#loginbox').css('display','none');},500);
	});
	$('#lb').click(function(e){
		e.preventDefault();
		clicked();
		if(i==1)
		setTimeout(function(){$('#loginbox').css('display','none');},500);
	});
	$('#register').click(function(){
		$('#web').slideToggle('slow');
		$('#registerbox').slideToggle('slow');	
		if(reg==1)
		{
			$('#login').css("display","none");
			console.log("login1");
			reg=0;
		}
		else{
			$('#login').css("display","inline");
			reg=1;
		}
	});

});
function focused(){
	$('#text').animate({
		"width" : "170px"
	},"slow");
	$('#text').css('background','#F7F8E0');
	$('#text').placeHolder = "Search";
}
function blurred(){
	$('#text').animate({
		"width" : "100px"
	},"slow");
	$('#text').css('background','#A4A4A4');
}
function reToggle()
{
	$('#web').slideToggle('slow');
	$('#registerbox').slideToggle('slow');
	console.log("login1");
	console.log(reg);
	if(reg==1)
	{
		$('#login').css("display","none");
		//$('#loginbox').css("display","none");
		console.log("login");
		reg=0;
	}
	else{
		$('#login').css("display","inline");

		reg=1;
		console.log(reg+"adsfds");
	}	
}
