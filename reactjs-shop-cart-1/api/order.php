<?php
include('db_connect.php');

$data = file_get_contents("php://input");

$data = json_decode($data);
$items = $data->items;
$userid = $data->user;

foreach ($items as $item) {
   $sql = "INSERT INTO orders (pr_id, pr_name, pr_price, pr_qty, user_id) VALUES('$item->id', '$item->name', '$item->price', '$item->quantity', '$userid')";
   mysqli_query($db_conn, $sql);
}
if (mysqli_affected_rows($db_conn) > 0) {
   echo json_encode("Your order Placed successfully");
}

// $sql = "SELECT * FROM products";

// $result = mysqli_query($db_conn, $sql);

// while ($row = mysqli_fetch_assoc($result)) {
//    $products['id'] = $row['id'];
//    $products['name'] = $row['name'];
//    $products['category'] = $row['category'];
//    $products['seller'] = $row['seller'];
//    $products['price'] = $row['price'];
//    $products['image'] = $row['image'];

//    $myproducts['product'][] = $products;
// }

// echo json_encode(['Success' => "Yes", 'item' => $myproducts]);
