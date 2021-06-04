<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

require 'db_connection.php';

// POST DATA
$dem=0;
$data = json_decode(file_get_contents("php://input"));
$query="select * from activity";
$result=mysqli_query($db_conn,$query);
while($row=mysqli_fetch_assoc($result)){
$dem++;}
if($dem>0){
if (
    isset($data[0]->name_comment)
    && isset($data[0]->email_comment)
    && isset($data[0]->message)
    && !empty(trim($data[0]->name_comment))
    && !empty(trim($data[0]->message))
    && !empty(trim($data[0]->email_comment))
) {
    $name = mysqli_real_escape_string($db_conn, trim($data[0]->name_comment));
    $message = mysqli_real_escape_string($db_conn, trim($data[0]->message));
    $email = mysqli_real_escape_string($db_conn, trim($data[0]->email_comment));
    $id_comment = $data[1]->id;
    $date = new DateTime();
    $date->setTimeZone(new DateTimeZone("Asia/Bangkok"));
    $row2 = $date->format('d.m.Y H:i:s');
    $query="insert into comment(id_blog,name_comment,email_comment,message,date_comment) value ($id_comment,'$name','$email','$message','$row2')";
    $result=mysqli_query($db_conn,$query);
    if ($result) {
        $last_id = mysqli_insert_id($db_conn);
        echo json_encode(["success" => 1, "msg" => "User Inserted.", "id" => $last_id]);
    } else {
        echo json_encode(["success" => 0, "msg" => "User Not Inserted!"]);
    }
    echo json_encode(["success" => 1]);
}
 else {
    echo json_encode(["success" => 0, "msg" => "Please fill all the required fields!"]);
 }
}
else{
    echo json_encode(["success" => 0, "msg" => "You need to login first!"]);
 }
?>

