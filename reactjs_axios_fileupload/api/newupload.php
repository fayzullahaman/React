<?php
header('Content-Type: application/json; charset=utf-8');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST");

// print_r($_POST);

// $alldata = $_POST;

// print_r($_FILES['mydata1']);
// print_r($_POST);
// print_r($_FILES);
if (isset($_POST["mydata"]) && isset($_FILES['mydata1'])) {

   $data = json_decode($_POST["mydata"]);
   $username = $data->username;
   $name = $data->name;

   $file = $_FILES["mydata1"];
   // print_r($file);

   $photo_name = $file["name"];
   $photo_tmp_name = $file["tmp_name"];
   $photo_size = $file["size"];
   $error = $file["error"];

   $url = "uploads/";
   $photopath = $url . $photo_name;

   $photo_name = time() . $photo_name;

   if (empty($error) === true) {
      move_uploaded_file($photo_tmp_name, $url . $photo_name);
      include("db_connect.php");
      // mysqli_query($db, "INSERT INTO users (username, name, photo) VALUES ('$username', '$name', '$photopath')");
      $db->query("INSERT INTO users (username, name, photo) VALUES ('$username', '$name', '$photopath')");
   }
   echo json_encode(["msg" => "Successfully Uploaded"]);
   // echo json_decode($_POST);
} else {
   echo json_encode(["msg" => "First select file and enter data"]);
}