var i=1;
function clicked(){
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
			return;
		}
		else{
			$('#login').animate({
				"left": "96.5%"
			});
			$('#lbutton').css('background','#FF8000');
			document.getElementById('lbutton').value="LOGIN";
			i=1;
			return;
		}
}
$(document).ready(function(){
	$('#lbutton').click(function(){
		clicked();
	});
	$('#lb').click(function(e){
		e.preventDefault();
		clicked();
	});

});