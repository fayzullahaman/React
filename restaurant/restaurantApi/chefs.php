<?php
include('db_connection.php');

$sql = "SELECT * FROM chefs";

$result = mysqli_query($db_conn, $sql);


while ($row = mysqli_fetch_assoc($result)) {
   // print_r($row);
   $chefs['id'] = $row['chf-id'];
   $chefs['name'] = $row['chf-name'];
   $chefs['designation'] = $row['chf-designation'];
   $chefs['image'] = $row['chf-image'];

   $mychefs['chefs'][] = $chefs;

   // echo $mychefs;
}

echo json_encode(['Success' => "Yes", 'item' => $mychefs]);
