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
    isset($data->content_mess)
) {
    $query="select * from activity";
    $result=mysqli_query($db_conn,$query);
    $query2="select * from account";
    $result2=mysqli_query($db_conn,$query2);
    while($row=mysqli_fetch_assoc($result)){
    $name=$row['activity_name'];
    while($row2=mysqli_fetch_assoc($result2)){
    $name2=$row2['account_name'];
    if($name==$name2){
        $id=$row2['account_id'];
    }
    }
    }
        $mgs = mysqli_real_escape_string($db_conn, trim($data->content_mess));
        $date = new DateTime();
        $date->setTimeZone(new DateTimeZone("Asia/Bangkok"));
        $row2 = $date->format('d.m.Y H:i:s');
        $insertUser = mysqli_query($db_conn, "INSERT INTO `message`(`id_account`,`content_mess`,`time_mess`,`name_account`) VALUES($id,'$mgs','$row2','$name')");
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