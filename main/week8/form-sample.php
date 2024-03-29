<!DOCTYPE HTML>  
<html>
<head>
<link rel="stylesheet" href="css/stylesheet.css">
</head>
<body id="php-sample">  

<div class="header">
        <h2 class="top_left_head" id="back_btn">VON'S PERSONAL WEBPAGE</h2>
        <img class ="gitlogo" src="https://cdn.worldvectorlogo.com/logos/git-bash.svg">
        <div class="show_links" id="links">
        
            <h2>SOCIAL LINKS</h2>
    
            <div class="links_container" id="links_container">
    
            <a href="https://www.facebook.com/Xhideron/" target="_blank">
                <img src="https://cdn.freebiesupply.com/logos/large/2x/facebook-logo-2019.svg">
                </img>
            </a>
    
            <a href="https://www.instagram.com/piolovon/" target="_blank">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/600px-Instagram_icon.png">
                </img>
            </a>
    
            <a href="https://github.com/pdreyes2" target="_blank">
                <img src="https://static-00.iconduck.com/assets.00/github-icon-2048x1988-jzvzcf2t.png">
                </img>
           </a>
    
            </div>
    
        </div>
    
    </div>

    
<?php



// define variables and set to empty values
$nameErr = $emailErr = $genderErr = $websiteErr = "";
$name = $email = $gender = $comment = $website = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  if (empty($_POST["name"])) {
    $nameErr = "Name is required";
  } else {
    $name = test_input($_POST["name"]);
    // check if name only contains letters and whitespace
    if (!preg_match("/^[a-zA-Z-' ]*$/",$name)) {
      $nameErr = "Only letters and white space allowed";
    }
  }
  
  if (empty($_POST["email"])) {
    $emailErr = "Email is required";
  } else {
    $email = test_input($_POST["email"]);
    // check if e-mail address is well-formed
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
      $emailErr = "Invalid email format";
    }
  }
    
  if (empty($_POST["website"])) {
    $website = "";
  } else {
    $website = test_input($_POST["website"]);
    // check if URL address syntax is valid (this regular expression also allows dashes in the URL)
    if (!preg_match("/\b(?:(?:https?|ftp):\/\/|www\.)[-a-z0-9+&@#\/%?=~_|!:,.;]*[-a-z0-9+&@#\/%=~_|]/i",$website)) {
      $websiteErr = "Invalid URL";
    }
  }

  if (empty($_POST["comment"])) {
    $comment = "";
  } else {
    $comment = test_input($_POST["comment"]);
  }

  if (empty($_POST["gender"])) {
    $genderErr = "Gender is required";
  } else {
    $gender = test_input($_POST["gender"]);
  }
}

function test_input($data) {
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;
}
?>



<div class="justification-div">
<div class="formValidation">
    <h2>PHP FORM VALIDATION EXAMPLE</h2>
    <p>
        <span class="error">
            * Required Field
        </span>
    </p>
    <form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>">  
        Name: <input type="text" name="name" value="<?php echo $name;?>">
        <span class="error">* <?php echo $nameErr;?></span>
        <br><br>
        E-mail: <input type="text" name="email" value="<?php echo $email;?>">
        <span class="error">* <?php echo $emailErr;?></span>
        <br><br>
        Website: <input type="text" name="website" value="<?php echo $website;?>">
        <span class="error"><?php echo $websiteErr;?></span>
        <br><br>
        Comment: <textarea name="comment" rows="5" cols="40"><?php echo $comment;?></textarea>
        <br><br>
        Gender:
        <input type="radio" name="gender" <?php if (isset($gender) && $gender=="female") echo "checked";?> value="female">Female
        <input type="radio" name="gender" <?php if (isset($gender) && $gender=="male") echo "checked";?> value="male">Male
        <input type="radio" name="gender" <?php if (isset($gender) && $gender=="other") echo "checked";?> value="other">Other  
        <span class="error">* <?php echo $genderErr;?></span>
        <br><br>
        <input type="submit" name="submit" value="Submit">  
    </form>
</div>
</div>




<?php
echo "<h2>Your Input:</h2>";
echo $name;
echo "<br>";
echo $email;
echo "<br>";
echo $website;
echo "<br>";
echo $comment;
echo "<br>";
echo $gender;

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "webprogmi221";

// Create a connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check the connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "INSERT INTO pdreyes_guests (name, email, website, comment, gender) 
VALUES ('$name','$email','$website','$comment','$gender')";

if($conn->query($sql) === TRUE) {
  echo "New record created";
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}

?>

<script src="js/1scripts2.js"></script>
</body>
</html>