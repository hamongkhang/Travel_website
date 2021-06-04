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
    isset($data->name_cruise)
    && isset($data->img_cruise)
    && isset($data->price_cruise)
    && isset($data->detail_cruise)
    && isset($data->from_to_cruise)
    && !empty(trim($data->name_cruise))
    && !empty(trim($data->img_cruise))
    && !empty(trim($data->price_cruise))
    && !empty(trim($data->detail_cruise))
    && !empty(trim($data->from_to_cruise))
) {
    $name_cruise = mysqli_real_escape_string($db_conn, trim($data->name_cruise));
    $img_cruise = mysqli_real_escape_string($db_conn, trim($data->img_cruise));
    $price_cruise = mysqli_real_escape_string($db_conn, trim($data->price_cruise));
    $detail_cruise = mysqli_real_escape_string($db_conn, trim($data->detail_cruise)); 
    $from_to_cruise = mysqli_real_escape_string($db_conn, trim($data->from_to_cruise)); 
        $insertUser = mysqli_query($db_conn, "INSERT INTO `tour_cruise`(`name_cruise`,`img_cruise`,`price_cruise`,`detail_cruise`,`from_to_cruise`) VALUES('$name_cruise','$img_cruise',$price_cruise,'$detail_cruise','$from_to_cruise')");
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