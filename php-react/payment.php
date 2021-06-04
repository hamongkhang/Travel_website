<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

require 'db_connection.php';

$data = json_decode(file_get_contents("php://input"));
if (isset($data->id) && is_numeric($data->id)) {
    $delID = $data->id;
    $allUsers = mysqli_query($db_conn, "SELECT * FROM `cart` where id_cart=$delID");
    $queryquery1 = "select * from cart where id_cart = $delID";
    $resultresult1 = mysqli_query($db_conn, $queryquery1);
    while ($rowrow1 = mysqli_fetch_assoc($resultresult1)) {
        $idd = $rowrow1['id_cart'];
        $id_account= $rowrow1['id_account'];
        $id_tour= $rowrow1['id_tour'];
        $image_tour= $rowrow1['image_tour'];
        $name_tour= $rowrow1['name_tour'];
        $price_tour= $rowrow1['price_tour'];
        $from_to= $rowrow1['from_to'];
        $status="Paied"; 
        $query3="insert into history(id_account,id_tour,image_tour,name_tour,price_tour,from_to,status) value ($id_account,$id_tour,'$image_tour','$name_tour',$price_tour,'$from_to','$status')";  
        mysqli_query($db_conn,$query3);                         
    }
    if (mysqli_num_rows($allUsers) > 0) {
    $all_users = mysqli_fetch_all($allUsers, MYSQLI_ASSOC);
         echo json_encode(["success" => 1, "payment" => $all_users]);
     } else {
            echo json_encode(["success" => 0]);
           }
} else {
    echo json_encode(["success" => 0, "msg" => "User Not Found!"]);
}
?>