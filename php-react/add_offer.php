<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

require 'db_connection.php';

// POST DATA
$data = json_decode(file_get_contents("php://input"));

if (
    isset($data->name_offer)
    && isset($data->img_offer)
    && isset($data->price_offer)
    && isset($data->detail_offer)
    && isset($data->from_to_offer)
    && !empty(trim($data->name_offer))
    && !empty(trim($data->img_offer))
    && !empty(trim($data->price_offer))
    && !empty(trim($data->detail_offer))
    && !empty(trim($data->from_to_offer))
) {
    $name_offer = mysqli_real_escape_string($db_conn, trim($data->name_offer));
    $img_offer = mysqli_real_escape_string($db_conn, trim($data->img_offer));
    $price_offer = mysqli_real_escape_string($db_conn, trim($data->price_offer));
    $detail_offer = mysqli_real_escape_string($db_conn, trim($data->detail_offer)); 
    $from_to_offer = mysqli_real_escape_string($db_conn, trim($data->from_to_offer)); 
        $insertUser = mysqli_query($db_conn, "INSERT INTO `tour_offer`(`name_offer`,`img_offer`,`price_offer`,`detail_offer`,`from_to_offer`) VALUES('$name_offer','$img_offer',$price_offer,'$detail_offer','$from_to_offer')");
        if ($insertUser) {
            $last_id = mysqli_insert_id($db_conn);
            echo json_encode(["success" => 1, "msg" => "User Inserted.", "id" => $last_id]);
        } else {
            echo json_encode(["success" => 0, "msg" => "User Not Inserted!"]);
        }
}
 else {
    echo json_encode(["success" => 0, "msg" => "Please fill all the required fields!"]);
}
?>