<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: GET");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

require 'db_connection.php';

$query = "select * from activity";
$result = mysqli_query($db_conn, $query);
$query2 = "select * from account";
$result2 = mysqli_query($db_conn, $query2);
while ($row = mysqli_fetch_assoc($result)) {
    $name = $row['activity_name'];
    while ($row2 = mysqli_fetch_assoc($result2)) {
        $name2 = $row2['account_name'];
        if ($name == $name2) {
            $id = $row2['account_id'];
            $allUsers = mysqli_query($db_conn, "SELECT * FROM `history` where id_account=$id");
            if (mysqli_num_rows($allUsers) > 0) {
            $all_users = mysqli_fetch_all($allUsers, MYSQLI_ASSOC);
                 echo json_encode(["success" => 1, "history" => $all_users]);
             } else {
                    echo json_encode(["success" => 0]);
                   }
        }
    }
}

?>
