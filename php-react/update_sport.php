<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

require 'db_connection.php';

$data = json_decode(file_get_contents("php://input"));

if (
    isset($data->name_sport)
    && isset($data->img_sport)
    && isset($data->price_sport)
    && isset($data->detail_sport)
    && isset($data->from_to_sport)
    && !empty(trim($data->name_sport))
    && !empty(trim($data->img_sport))
    && !empty(trim($data->price_sport))
    && !empty(trim($data->detail_sport))
    && !empty(trim($data->from_to_sport))
) {
    $name_sport = mysqli_real_escape_string($db_conn, trim($data->name_sport));
    $img_sport = mysqli_real_escape_string($db_conn, trim($data->img_sport));
    $price_sport = mysqli_real_escape_string($db_conn, trim($data->price_sport));
    $detail_sport = mysqli_real_escape_string($db_conn, trim($data->detail_sport)); 
    $from_to_sport = mysqli_real_escape_string($db_conn, trim($data->from_to_sport)); 
        $updateUser = mysqli_query($db_conn, "UPDATE `tour_sport` SET `name_sport`='$name_sport', `img_sport`='$img_sport', `price_sport`=$price_sport, `detail_sport`='$detail_sport', `from_to_sport`='$from_to_sport' WHERE `id_sport`='$data->id_sport'");
        if ($updateUser) {
            echo json_encode(["success" => 1, "msg" => "User Updated."]);
        } else {
            echo json_encode(["success" => 0, "msg" => "User Not Updated!"]);
        }
} else {
    echo json_encode(["success" => 0, "msg" => "Please fill all the required fields!"]);
}
?>