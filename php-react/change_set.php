<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

require 'db_connection.php';



use PHPMailer\PHPMailer\PHPMailer;
ini_set("display_errors",0);


$data = json_decode(file_get_contents("php://input"));
$kt=0;
    $user = mysqli_real_escape_string($db_conn, trim($data->user));
    $email = mysqli_real_escape_string($db_conn, trim($data->email));
    $oldpass = mysqli_real_escape_string($db_conn, trim($data->oldpass));
    $newpass = mysqli_real_escape_string($db_conn, trim($data->newpass)); 
    $newpass2 = mysqli_real_escape_string($db_conn, trim($data->newpass2)); 

   if($newpass===$newpass2){
    $query = "select * from account";
    $result = mysqli_query($db_conn, $query);
    while ($row = mysqli_fetch_assoc($result)) {
        $name1 = $row['account_name'];
        $email1= $row['account_email'];
        $pass=$row['account_pass'];
        if(($user===$name1)&&($email===$email1)&&($oldpass===$pass)){
            $kt=1;    
            $insertUser = mysqli_query($db_conn, "UPDATE `account` SET `account_pass`='$newpass' WHERE `account_name`='$user'");
            require_once 'PHPMailer/Exception.php';
            require_once 'PHPMailer/PHPMailer.php';
            require_once 'PHPMailer/SMTP.php';

$mail = new PHPMailer();
$alert = '';
try{
    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com';
    $mail->SMTPAuth = true;
    $mail->Username = "hangqt3621@gmail.com"; 
    $mail->Password = 'Hang@2174';
    $mail->Port = 465;
    $mail->SMTPSecure = "ssl";

    $mail->setFrom('hangqt3621@gmail.com', 'Admin');
    $mail->addAddress($email);

    $mail->isHTML(true);
    $mail->Subject = "STARTTRAVELS'S ACCOUNT";
    $mail->Body = "YOUR NEW PASSWORD IS : ".$newpass."</h3>";

    $mail->send();
    $alert = '<div class="alert-success"> 
                 <span>Message Sent! Thank you for contacting us.</span>
                </div>';
  } catch (Exception $e){
    $alert = '<div class="alert-error">
                <span>'.$e->getMessage().'</span>
              </div>';
  }        
}
    }
      }
      else{
        echo json_encode(["success" => 0, "msg" => "You must re-Enter the correct Password !!!"]);
      }
if($kt===0){
    echo json_encode(["success" => 1, "msg" => "The account or email does not exists !!!"]);
}else{
    echo json_encode(["success" => 0, "msg" => "Submitted successfully !!!"]);
}                                       
?>