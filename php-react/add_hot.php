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
        $insertUser = mysqli_query($db_conn, "INSERT INTO `tour_hot`(`name_hot`,`img_hot`,`price_hot`,`detail_hot`,`from_to_hot`) VALUES('$name_hot','$img_hot',$price_hot,'$detail_hot','$from_to_hot')");
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