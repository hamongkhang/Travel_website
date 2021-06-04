<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

require 'db_connection.php';

$data = json_decode(file_get_contents("php://input"));

if (
    isset($data->name_capital)
    && isset($data->img_capital)
    && isset($data->price_capital)
    && isset($data->detail_capital)
    && isset($data->from_to_capital)
    && !empty(trim($data->name_capital))
    && !empty(trim($data->img_capital))
    && !empty(trim($data->price_capital))
    && !empty(trim($data->detail_capital))
    && !empty(trim($data->from_to_capital))
) {
    $name_capital = mysqli_real_escape_string($db_conn, trim($data->name_capital));
    $img_capital = mysqli_real_escape_string($db_conn, trim($data->img_capital));
    $price_capital = mysqli_real_escape_string($db_conn, trim($data->price_capital));
    $detail_capital = mysqli_real_escape_string($db_conn, trim($data->detail_capital)); 
    $from_to_capital = mysqli_real_escape_string($db_conn, trim($data->from_to_capital)); 
        $updateUser = mysqli_query($db_conn, "UPDATE `tour_capital` SET `name_capital`='$name_capital', `img_capital`='$img_capital', `price_capital`=$price_capital, `detail_capital`='$detail_capital', `from_to_capital`='$from_to_capital' WHERE `id_capital`='$data->id_capital'");
        if ($updateUser) {
            echo json_encode(["success" => 1, "msg" => "User Updated."]);
        } else {
            echo json_encode(["success" => 0, "msg" => "User Not Updated!"]);
        }
} else {
    echo json_encode(["success" => 0, "msg" => "Please fill all the required fields!"]);
}
?>