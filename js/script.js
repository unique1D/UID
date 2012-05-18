var i=1;
$(document).ready(function(){
	$('#lbutton').click(function(){
		if(i==1){
			$('#login').animate({
				"left": "74%"
			});
			$('#web').animate({
				"left" : "67.5%"
			});
			console.log("hello");
			$('#lbutton').css('background','#AEB404');
			document.getElementById('lbutton').value="BACK";
			i=0;
		}
		else{
			$('#login').animate({
				"left": "96.5%"
			});
			$('#lbutton').css('background','#FF8000');
			document.getElementById('lbutton').value="LOGIN";
			i=1;
		}
	});
});