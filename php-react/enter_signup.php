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
if (
    isset($data->user)
    && isset($data->pass)
    && isset($data->email)
    && isset($data->account_code)
    && !empty(trim($data->user))
    && !empty(trim($data->pass))
    && !empty(trim($data->email))
    && !empty(trim($data->account_code))
) {
    $account_name = mysqli_real_escape_string($db_conn, trim($data->user));
    $account_pass = mysqli_real_escape_string($db_conn, trim($data->pass));
    $account_email = mysqli_real_escape_string($db_conn, trim($data->email)); 
    $account_code = mysqli_real_escape_string($db_conn, trim($data->account_code));
    $code = mysqli_real_escape_string($db_conn, trim($data->code));
   if($code===$account_code){
        $insertUser = mysqli_query($db_conn, "INSERT INTO `account`(`account_name`,`account_pass`,`account_email`,`account_status`) VALUES('$account_name','$account_pass','$account_email','Being active')");
            $last_id = mysqli_insert_id($db_conn);
            mysqli_query($db_conn, "DELETE FROM `demoaccount`");
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
    $mail->addAddress($account_email);

    $mail->isHTML(true);
    $mail->Subject = "STARTTRAVELS'S HELLO";
    $mail->Body = "WELL COME TO START TRAVEL !!!</h3>";

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
?>