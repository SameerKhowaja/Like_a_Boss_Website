<!doctype html>
<html lang="en-US">
<head>
<meta charset="utf-8">
<title>Welcome to Web Based Password Generator</title>
<link rel="stylesheet" type="text/css" href="css/styles2.css">
<link rel="stylesheet" type="text/css" href="css/switchery.min.css">
</head>

<body>
<div id="wrapper">

<h1>Welcome to Web Based Password Generator</h1>

<form action="#" method="POST">
<div class="col-2">
  <label>
    Title
    <input type="text" placeholder="Title" id="title" name="title" tabindex="1" required>
  </label>
</div>
<div class="col-2">
  <label>
    Name
    <input type="text" placeholder="Name" id="name" name="name" tabindex="2" required>
  </label>
</div>

<div class="col-3">
  <label>
    Password
    <input type="password" placeholder="Password" id="password1" name="password1" tabindex="3" oninput="checkPass_Quality()" required>
  </label>
</div>
<div class="col-3">
  <label>
    Re-Password
    <input type="password" placeholder="Re-Password" id="password2" name="password2" tabindex="4" oninput="checkPass12()" required>
  </label>
</div>
<div class="col-3">
  <label>
    Generate Password
    <button id="gene_pass" class="submitbtn" tabindex="5" onclick="Generate_Pass()">Generator</button>
    <p id="generated_password">-</p>
  </label>
</div>

<div class="col-4">
  <label>
    Password Quality <br>
    <input type="range" id="quality" value="0" max="10" name="quality" tabindex="6" disable>
    <p id="pass_quality">-</p>
  </label>
</div>
<div class="col-4">
  <label>
    URL
    <input type="url" placeholder="URL" id="url" name="url" tabindex="7" required>
  </label>
</div>
<div class="col-5">
  <label>
    <p id="password_check" tabindex="8"></p>
  </label>
</div>

<div class="col-submit">
  <button id="myBtn" class="submitbtn">Save Form</button>
  <hr width="50%">
  <label>
    <a href="filter.php" target="_blank">Filter Records</a>
  </label>
</div>

</form>
</div>

<script>
  function checkPass12(){
    var pass1 = document.getElementById("password1").value;
    var pass2 = document.getElementById("password2").value;

    if(pass1 == pass2){
      document.getElementById("password_check").innerHTML = "Password Matched";
      document.getElementById("myBtn").disabled = false;
    }
    else{
      document.getElementById("password_check").innerHTML = "Password 1 and Password 2 are Different";
      document.getElementById("myBtn").disabled = true;
    }
  }

  function checkPass_Quality(){
    var pass = document.getElementById("password1").value;
    var pass_len = pass.length;
    document.getElementById("quality").value = pass_len;

    if(pass_len >= 1 && pass_len <= 5){
      document.getElementById("pass_quality").innerHTML = "Poor";
    }
    else if(pass_len >= 6 && pass_len <= 8){
      document.getElementById("pass_quality").innerHTML = "Strong";
    }
    else if(pass_len >= 9){
      document.getElementById("pass_quality").innerHTML = "Very Strong";
    }
    else{
      document.getElementById("pass_quality").innerHTML = "-";
    }

    checkPass12();
  }

  function Generate_Pass(){
    var length = 10,
      charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
      retVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    document.getElementById("generated_password").innerHTML = retVal;
    document.getElementById("password1").value = retVal;
    document.getElementById("password2").value = retVal;
    document.getElementById("quality").value = length;
    document.getElementById("pass_quality").innerHTML = "Very Strong";

    checkPass12();
  }
</script>

<?php
  require_once "config.php";

  if(isset($_POST['title']) && isset($_POST['name']) && isset($_POST['password1']) && isset($_POST['url'])){
    $title = $_POST['title'];
    $name = $_POST['name'];
    $pass = $_POST['password1'];
    $url = $_POST['url'];

    $query = "INSERT INTO `storage`(`title`, `f_name`, `password`, `f_url`) VALUES ('$title', '$name', '".md5($pass)."', '$url')";
    //$query = "INSERT INTO `storage`(`title`, `name`, `password`, `url`) VALUES ('abcd', 'szc', '".md5(sasd)."', 'sadasd')";
    $result = mysqli_query($link,$query);
    if($result){
      echo "<h2 align='center'>Entry Added Successfully</h2>";
    }
    else{
      echo "<h2 align='center'>Something Missing</h2>";
    }
  }
?>

</body>
</html>