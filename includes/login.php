	<div id="login">	
		<input type="button" value="LOGIN" id="lbutton">
		<div id="loginbox">
			<table>
				<form class="well" method="POST" action="includes/loginsuccess.php">
				<tr><td style="padding-bottom : 10px"><b>Username:&nbsp;&nbsp;</b> </td><td><input type="text" id="textb" name="username"></td></tr>
				<tr><td style="padding-bottom : 10px"><b>Password:&nbsp;&nbsp;</b></td><td><input type="Password" id="textb" name="password"></td></tr>
				<tr><td></td><td><input  type="submit" value="login" class="btn btn-primary" id="lsubmit">
					<select name="loginas" id="loginas">
						<option>citizen</option>
						<option>Agent</option>
						<option>Admin</option>
					</select>
				</td></tr>
				</form>
			</table>
		</div> 
	</div>