<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: GET");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

require 'db_connection.php';

$allUsers = mysqli_query($db_conn, "SELECT id_mess,id_account,content_mess,time_mess,name_account,COUNT(id_account) AS summess
FROM message
GROUP BY id_account");
if (mysqli_num_rows($allUsers) > 0) {
    $all_users = mysqli_fetch_all($allUsers, MYSQLI_ASSOC);
    echo json_encode(["success" => 1, "messadd" => $all_users]);
} else {
    echo json_encode(["success" => 0]);
}
?>