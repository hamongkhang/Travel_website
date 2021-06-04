<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

require 'db_connection.php';

// POST DATA
$data = json_decode(file_get_contents("php://input"));
$dem=0;
$query="select * from activity";
$result=mysqli_query($db_conn,$query);
while($row=mysqli_fetch_assoc($result)){
$dem++;}
if($dem>0){
if (
    isset($data[0]->name_user)
    && isset($data[0]->phone_user)
    && isset($data[0]->email_user)
    && isset($data[0]->address_user)
    && isset($data[0]->check_in)
    && isset($data[0]->check_out)
    && isset($data[0]->adults)
    && !empty(trim($data[0]->name_user))
    && !empty(trim($data[0]->phone_user))
    && !empty(trim($data[0]->email_user))
    && !empty(trim($data[0]->address_user))
    && !empty(trim($data[0]->check_in))
    && !empty(trim($data[0]->check_out))
    && !empty(trim($data[0]->adults))
) {
    $name_user = mysqli_real_escape_string($db_conn, trim($data[0]->name_user));
    $phone_user = mysqli_real_escape_string($db_conn, trim($data[0]->phone_user));
    $email_user = mysqli_real_escape_string($db_conn, trim($data[0]->email_user));
    $address_user = mysqli_real_escape_string($db_conn, trim($data[0]->address_user)); 
    $check_in = mysqli_real_escape_string($db_conn, trim($data[0]->check_in)); 
    $check_out = mysqli_real_escape_string($db_conn, trim($data[0]->check_out)); 
    $adults = mysqli_real_escape_string($db_conn, trim($data[0]->adults)); 
    $price = mysqli_real_escape_string($db_conn, trim($data[2]->adults)); 
    $id_tour = $data[1]->id;


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
    if(!$id){
        echo json_encode(["success" => 1, "msg" => "YOU ARE NOT LOGGED IN !!!"]);
    }else{
    $query="select * from tour_offer where id_offer='$id_tour'";
    $result3=mysqli_query($db_conn,$query);
    while($row3=mysqli_fetch_assoc($result3)){
        $image=$row3['img_offer'];
        $name=$row3['name_offer'];
        $from_to=$row3['from_to_offer'];
       }
       $query="insert into cart(name_user,email_user,check_in,check_out,phone,adults,address,image_tour,id_account,id_tour,name_tour,price_tour,from_to,status) value ('$name_user','$email_user','$check_in','$check_out','$phone_user',$adults,'$address_user','$image',$id,$id_tour,'$name',$price,'$from_to','checking in')";
       $result=mysqli_query($db_conn,$query);
    echo json_encode(["success" => 0, "msg" => "ADD TO CART SUCCESSFULLY !!!"]);
     }
}
 else {
    echo json_encode(["success" => 0, "msg" => "Please fill all the required fields!"]);
 }
}else{
    echo json_encode(["success" => 0, "msg" => "You need to login first!"]);
 }
?>