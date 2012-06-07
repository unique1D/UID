<?php require_once("includes/header.php") ; ?>
		<div id="content">
		</div><!---End of Content------>
		
	</div><!----------------End  of Web-------------->

<?php require_once("includes/login.php"); ?>

	<div id="registerbox">
		<form class="well" name="register" method="post" action="registered.php" onSubmit="return validate()">
			<table cellpadding="20px">
			<tr><td><label for="username" class="span2">Username:</label></td>
			<td><input type="text" id="username" name="username"></td></tr>
			<tr><td><label for="Password">Password:</label></td>
			<td><input type="password" id="password" name="password"></td></tr>
			<tr><td><label for="ConfirmPassword">Confirm Password:</label></td>
			<td><input type="password" id="ConfirmPassword"></td></tr>
			<tr><td><label for="Email">Email-ID:</label></td>
			<td><input type="email" id="Email" name="Email"></td></tr>
			<tr><td><label for="mobile">Mobile Number:</label></td>
			<td><input type="text" id="mobile" name="mobile"></td></tr>
			<tr>
				<td><input type="button" class="btn btn-danger" value="Back" onClick="reToggle()"></td>
				<td><input type="submit" class="btn btn-primary" value="Register"></td>
			</tr>
			</table>
		</form>
	</div>
		
<?php require_once("includes/footer.php"); ?>