<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

require 'db_connection.php';
use PHPMailer\PHPMailer\PHPMailer;
ini_set("display_errors",0);
require_once 'PHPMailer/Exception.php';
require_once 'PHPMailer/PHPMailer.php';
require_once 'PHPMailer/SMTP.php';

$data = json_decode(file_get_contents("php://input"));
if (isset($data->id) && is_numeric($data->id)) {
    $delID = $data->id;
    $allUsers = mysqli_query($db_conn, "SELECT * FROM `cart`");
   

    while ($data=mysqli_fetch_assoc($allUsers)){
        if ($data['id_cart']==$delID){
            $email=$data['email_user'];
        }
    }
   
    $mail = new PHPMailer();
    $alert = '';
      try{
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';
        $mail->SMTPAuth = true;
        $mail->Username = 'hangqt3621@gmail.com'; 
        $mail->Password = 'Hang@2174';
        $mail->Port = 465;
        $mail->SMTPSecure = "ssl";
    
        $mail->setFrom('hangqt3621@gmail.com', 'Admin');
        $mail->addAddress($email);
    
        $mail->isHTML(true);
        $mail->Subject = "STARTTRAVELS'S TOUR";
        $mail->Body = "YOU HAVE FAILED TO BOOKED THE TOUR !!!</h3>";
    
        $mail->send();
        $alert = '<div class="alert-success"> 
                     <span>Message Sent! Thank you for contacting us.</span>
                    </div>';
      } catch (Exception $e){
        $alert = '<div class="alert-error">
                    <span>'.$e->getMessage().'</span>
                  </div>';
      }         


    $updateUser = mysqli_query($db_conn, "UPDATE `cart` SET `status`='Checking in' WHERE `id_cart`='$delID'");
    if ($updateUser) {
        echo json_encode(["success" => 1, "msg" => "User Updated."]);
    } else {
        echo json_encode(["success" => 0, "msg" => "User Not Updated!"]);
    }
} else {
    echo json_encode(["success" => 0, "msg" => "User Not Found!"]);
}
?>