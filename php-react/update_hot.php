<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

require 'db_connection.php';

$data = json_decode(file_get_contents("php://input"));

if (
    isset($data->name_hot)
    && isset($data->img_hot)
    && isset($data->price_hot)
    && isset($data->detail_hot)
    && isset($data->from_to_hot)
    && !empty(trim($data->name_hot))
    && !empty(trim($data->img_hot))
    && !empty(trim($data->price_hot))
    && !empty(trim($data->detail_hot))
    && !empty(trim($data->from_to_hot))
) {
    $name_hot = mysqli_real_escape_string($db_conn, trim($data->name_hot));
    $img_hot = mysqli_real_escape_string($db_conn, trim($data->img_hot));
    $price_hot = mysqli_real_escape_string($db_conn, trim($data->price_hot));
    $detail_hot = mysqli_real_escape_string($db_conn, trim($data->detail_hot)); 
    $from_to_hot = mysqli_real_escape_string($db_conn, trim($data->from_to_hot));
        $updateUser = mysqli_query($db_conn, "UPDATE `tour_hot` SET `name_hot`='$name_hot', `img_hot`='$img_hot', `price_hot`=$price_hot, `detail_hot`='$detail_hot', `from_to_hot`='$from_to_hot' WHERE `id_hot`='$data->id_hot'");
        if ($updateUser) {
            echo json_encode(["success" => 1, "msg" => "User Updated."]);
        } else {
            echo json_encode(["success" => 0, "msg" => "User Not Updated!"]);
        }
} else {
    echo json_encode(["success" => 0, "msg" => "Please fill all the required fields!"]);
}
?>