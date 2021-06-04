<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

use PHPMailer\PHPMailer\PHPMailer;
ini_set("display_errors",0);
require_once 'PHPMailer/Exception.php';
require_once 'PHPMailer/PHPMailer.php';
require_once 'PHPMailer/SMTP.php';

require 'db_connection.php';

$data = json_decode(file_get_contents("php://input"));
if (
    isset($data->name)
    && isset($data->email)
    && isset($data->subject)
    && isset($data->message)
    && !empty(trim($data->name))
    && !empty(trim($data->email))
    && !empty(trim($data->subject))
    && !empty(trim($data->message))
) {
    $name = mysqli_real_escape_string($db_conn, trim($data->name));
    $email = mysqli_real_escape_string($db_conn, trim($data->email));
    $subject = mysqli_real_escape_string($db_conn, trim($data->subject)); 
    $message = mysqli_real_escape_string($db_conn, trim($data->message));
    
$mail = new PHPMailer();
$query = "select * from account";
$result = mysqli_query($db_conn, $query);
$kt=0;
while ($row = mysqli_fetch_assoc($result)) {
    $name1 = $row['account_name'];
    $email1= $row['account_email'];
    $pass="Hang@2174";
    if(($name===$name1)&&($email===$email1)){
        $kt=1;
        $alert = '';
        try{
          $mail->isSMTP();
          $mail->Host = 'smtp.gmail.com';
          $mail->SMTPAuth = true;
          $mail->Username = "hangqt3621@gmail.com"; 
          $mail->Password = $pass;
          $mail->Port = 465;
          $mail->SMTPSecure = "ssl";
      
          $mail->setFrom("hangqt3621@gmail.com", 'User');
          $mail->addAddress('hangqt3621@gmail.com');
      
          $mail->isHTML(true);
          $mail->Subject = "[".$email."]".$subject;
          $mail->Body = $message;
      
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
if($kt===0){
    echo json_encode(["success" => 1, "msg" => "The account or email does not exists !!!"]);
}else{
    echo json_encode(["success" => 0, "msg" => "Submitted successfully !!!"]);
}
}                                                                                     
?>
