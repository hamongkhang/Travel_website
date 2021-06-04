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
    isset($data->user)
    && isset($data->pass)
    && !empty(trim($data->user))
    && !empty(trim($data->pass))
) {
    $user=mysqli_real_escape_string($db_conn, trim($data->user));
    $pass=mysqli_real_escape_string($db_conn, trim($data->pass));
    $kt=0;
    if(($user==="admin")&&($pass==="khanghuanhang")){
        mysqli_query($db_conn, "insert into activity(activity_name,activity_password) value ('$user','$pass')");
      
       if (1!=1){
        echo json_encode(["success" => 1, "msg" => "WELLCOME TO ADMIN !!!"]);
    }
    else{
        echo json_encode(["success" => 0, "msg" => "WELLCOME TO ADMIN !!!"]);
    }

    
    }
    else{
    if ($sql=mysqli_query($db_conn, "SELECT * FROM `account`")){
          while ($data=mysqli_fetch_assoc($sql)){
              if (($data['account_name']===$user)&&($data['account_pass']===$pass)&&($data['account_status']=='Being active')){
                  $kt=1;
              }
          }
    }
     if($kt===1){
        $insert = mysqli_query($db_conn, "insert into activity(activity_name,activity_password) value ('$user','$pass')");
    if ($insert){
        echo json_encode(["success" => 1, "msg" => "LOGGED IN SUCCESSFULLY!"]);
    }
 }else{
    echo json_encode(["success" => 0, "msg" => "YOU ENTERED THE WRONG USERNAME OR PASSWORD !!!"]);
}}
}
else{
    echo json_encode(["success" => 0, "msg" => "Please fill all the required fields !!!"]);
}
?>