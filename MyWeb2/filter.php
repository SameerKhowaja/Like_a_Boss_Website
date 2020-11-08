<!doctype html>
<html lang="en-US">
<head>
<meta charset="utf-8">
<meta http-equiv="Content-Type" content="text/html">
<title>Filter Data</title>
<link rel="stylesheet" type="text/css" href="css/styles2.css">
<link rel="stylesheet" type="text/css" href="css/switchery.min.css">
<script type="text/javascript" src="js/switchery.min.js"></script>
</head>

<body>
<div id="wrapper">

<h1>Filter Database Form</h1>

<form action="#" method="POST">
<div class="col-2">
<label>
Find
<input placeholder="Find" id="find" name="find" tabindex="1" required>
</label>
</div>
<div class="col-2">
<label>
<button class="submitbtn">Filter</button>
</label>
</div>

<div class="col-4">
<label>Title</label>
<center style="position:relative; margin-bottom:8px;"><input type="checkbox" id="title" name="title" class="js-switch"></center>
</div>
<div class="col-4 switch">
<label>Name</label>
<center style="position:relative;margin-bottom:8px;"><input type="checkbox" id="name" name="name" class="js-switch"></center>
</div>
<div class="col-4 switch">
<label>URL</label>
<center style="position:relative;margin-bottom:8px;"><input type="checkbox" id="url" name="url" class="js-switch"></center>
</div>

<hr><hr><hr><hr><hr><hr><hr><hr><hr>
</form>
</div>

<script>
var elems = Array.prototype.slice.call(document.querySelectorAll('.js-switch'));
elems.forEach(function(html) {
var switchery = new Switchery(html);
});
</script>

<?php
require_once "config.php";

if(isset($_POST['find']) && (isset($_POST['title']) || isset($_POST['name']) || isset($_POST['url']))){
$find = $_POST['find'];
$query = "";

if(isset($_POST['title'])){
    $query = "SELECT * FROM `storage` WHERE title LIKE '%$find%'";
}
else if(isset($_POST['name'])){
    $query = "SELECT * FROM `storage` WHERE f_name LIKE '%$find%'";
}
else if(isset($_POST['url'])){
    $query = "SELECT * FROM `storage` WHERE f_url LIKE '%$find%'";
}
else if(isset($_POST['title']) && isset($_POST['name']) && isset($_POST['url'])){
    $query = "SELECT * FROM `storage` WHERE title LIKE '%$find%' and f_name LIKE '%$find%' and f_url LIKE '%$find%'";
}


$result = mysqli_query($link,$query);
$row = mysqli_num_rows($result);
if($row >=1 ){
while($row = mysqli_fetch_assoc($result)){
    echo "<h1 align='center'>Title: ".$row["title"]."<br>Name: ".$row["f_name"]."<br>URL: ".$row["f_url"]."</h1><br><hr>";
}
}
else{
    echo "<h2 align='center'>No Data Found</h2>";
}


}

?>

</body>
</html>