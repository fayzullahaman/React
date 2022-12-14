<?php
include('db_connect.php');

$sql = "SELECT * FROM products, orders WHERE products.id=orders.pr_id";

$result = mysqli_query($db_conn, $sql);

while ($row = mysqli_fetch_assoc($result)) {
   $datas['id'] = $row['id'];
   $datas['name'] = $row['name'];
   $datas['category'] = $row['category'];
   $datas['seller'] = $row['seller'];
   $datas['price'] = $row['price'];
   $datas['qty'] = $row['pr_qty'];
   $datas['time'] = $row['order_time'];

   $allorders['orders'][] = $datas;
}

echo json_encode(['Success' => "Yes", 'item' => $allorders]);
