<?php require_once("database.php");?>
<html>
<body>
<?php
$username = $_POST['username'];
$password = $_POST['password'];
$loginas = $_POST['loginas'];

$query = "SELECT username,password FROM $loginas";

$result = mysql_query($query) or die("Wrong result".mysql_error());
$row = mysql_fetch_array($result) or die("Wrong query".mysql_error());
if($username == $row[0])
{
	if($password==$row[1])
	{

		header( 'Location: http://www.google.com' ) ;
	}
	else
	{	
		header( 'Location: http://www.yahoo.com' ) ;

	}
}
else
{
	//alert("You have entered incorrect username");
	header( 'Location: http://localhost/UID' ) ;
}
?>
</body>
</html>