<?php 
	$connection = mysql_connect("localhost","root","");
	if(!$connection)
	{
		die("Database Connection Failed".mysql_error());
	}
	$db_select = mysql_select_db("uid",$connection);
	if(!$db_select)
	{
		die("Database Opening Failed".mysql_error());
	}
	
?>