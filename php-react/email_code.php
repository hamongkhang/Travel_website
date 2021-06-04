<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

require 'db_connection.php';



use PHPMailer\PHPMailer\PHPMailer;
ini_set("display_errors",0);

$code = rand(100000, 999999);
echo $code;


$data = json_decode(file_get_contents("php://input"));

if (
    isset($data->user)
    && isset($data->pass)
    && isset($data->email)
    && isset($data->repass)
    && !empty(trim($data->user))
    && !empty(trim($data->pass))
    && !empty(trim($data->email))
    && !empty(trim($data->repass))
) {
    $user = mysqli_real_escape_string($db_conn, trim($data->user));
    $pass = mysqli_real_escape_string($db_conn, trim($data->pass));
    $email = mysqli_real_escape_string($db_conn, trim($data->email));
    $repass = mysqli_real_escape_string($db_conn, trim($data->repass)); 
   if($pass==$repass){
        $insertUser = mysqli_query($db_conn, "INSERT INTO `demoaccount`(`user`,`pass`,`email`,`repass`,`code`) VALUES('$user','$pass','$email','$repass',$code)");
            $last_id = mysqli_insert_id($db_conn);
            require_once 'PHPMailer/Exception.php';
require_once 'PHPMailer/PHPMailer.php';
require_once 'PHPMailer/SMTP.php';

echo json_encode(["success" => 1, "msg" => "Please check code on your email!!!", "id" => $last_id]);
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
    $mail->Subject = "STARTTRAVELS'S CODES";
    $mail->Body = "PLEASE CHECK CODES: $code</h3>";

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
      echo json_encode(["success" => 0, "msg" => "You must re-Enter the correct Password !!!"]);
}
 else {
    echo json_encode(["success" => 0, "msg" => "Please fill all the required fields!"]);
}
                                          
?>