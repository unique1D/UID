<?php require_once("includes/database.php");?>
<?php require_once("includes/header.php");?>
		<div id="content">
			<?php
				$username = $_POST['username'];
				$password = $_POST['password'];
				$Email = $_POST['Email'];
				$mobile = $_POST['mobile'];
				$query = "INSERT INTO citizen VALUES ('$username', '$password', '', '', '', '', '', '', 0, '$Email', $mobile)";
				$result = mysql_query($query);
				if(!$result)
				{
					die("Your Query is not Processed".mysql_error());
				}
				else
				{
					?>
					<p>
						<h4>Congratulations ! You have successfully registered to the UID website . Please Check our email for your Details</h4><br/>
						<input type="button" class="btn btn-danger" onclick="window.location.replace('http://localhost/UID')" value="Go to HomePage"></input>
					</p>
					<?php
				}
			?>
		</div><!---End of Content------>
		
	</div><!----------------End  of Web-------------->
<?php require_once("includes/login.php"); ?>
<?php require_once("includes/footer.php"); ?>
