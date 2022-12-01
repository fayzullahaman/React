<?php
include('db_connection.php');

$data = file_get_contents("php://input");
$data = json_decode($data);
if (isset($data->name) && $data->name != '') {
   $name = $data->name;
   $details = $data->details;
   $price = $data->price;
   $image = $data->image;

   $result = mysqli_query($db_conn, "INSERT INTO menu (name, details, price, image) VALUES ('$name','$details','$price', '$image')");

   if (mysqli_affected_rows($db_conn) > 0) {
      echo json_encode(["msg" => "Successfully Inserted"]);
   }
} else {
   echo json_encode(["msg" => "Please fill in the fields."]);
}
