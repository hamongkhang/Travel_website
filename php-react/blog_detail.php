<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

require 'db_connection.php';
$data = json_decode(file_get_contents("php://input"));

$hot = mysqli_query($db_conn, "SELECT * FROM `blog` WHERE id_blog=$data->id");

$hot2 = mysqli_query($db_conn, "SELECT * FROM `comment` WHERE id_blog=$data->id");


if ((mysqli_num_rows($hot) > 0)||(mysqli_num_rows($cruise) > 0)||(mysqli_num_rows($offer) > 0)||(mysqli_num_rows($sport) > 0)||(mysqli_num_rows($capital) > 0)) {
    $hots= mysqli_fetch_all($hot, MYSQLI_ASSOC);
    $hots2= mysqli_fetch_all($hot2, MYSQLI_ASSOC);
    $all_users = array_merge($hots);
    $all_users2 = array_merge($hots2);
    echo json_encode(["success" => 1, "bl" => $hots, "comment" => $hots2]);
} else {
    echo json_encode(["success" => 0]);
}
?>