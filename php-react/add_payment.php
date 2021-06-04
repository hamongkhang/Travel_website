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
    $name = $data->name;
    $email=$data->email;
    $tour =$data->tour;
    $from=$data->from;
    $price=$data->price;
    $check1=$data->check1;
    $check2=$data->check2;
    $pho=$data->pho;
    $adu=$data->adu;
    $add=$data->add;
    
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
        $mail->Body = "<div className='flex-content'>
        <div className='custom-form custom-form-fields'>
          <h3>Payment</h3>
          
            <form className='insertForm'>
              <label>Name: </label>
              <div className='form-group'>
                <input type='text' className='form-control' id='Name' name='Name' value=' $name' required />
              </div>
              <label>Phone: </label>
              <div className='form-group'>
                <input type='text' className='form-control' id='Phone' name='Phone' value=' $pho ' required />
              </div>
              <label>Email: </label>
              <div className='form-group'>
                <input type='text' className='form-control' id='Email' name='Email' value=' $email ' required />
              </div>
              <label>Address: </label>
              <div className='form-group'>
                <input type='text' className='form-control' id='Address' name='Address' value=' $add ' required />
              </div>
              <label>Check In: </label>
              <input type='text' className='form-control' id='Address' name='Address' value=' $check1 ' required />
            </div>
            <label>Check Out: </label>
            <div className='form-group'>
            <input type='text' className='form-control' id='Address' name='Address' value=' $check2 ' required />
          </div>
          <label>Adults: </label>
          <div className='form-group'>
          <input type='text' className='form-control' id='Address' name='Address' value=' $adu ' required />
        </div>
        <label>Name_tour: </label>
        <div className='form-group'>
        <input type='text' className='form-control' id='Address' name='Address' value=' $tour ' required />
      </div>
      <label>From-to: </label>
      <div className='form-group'>
      <input type='text' className='form-control' id='Address' name='Address' value=' $from ' required />
    </div>
    <label>Price: </label>
    <div className='form-group'>
    <input type='text' className='form-control' id='Address' name='Address' value=' $price ' required />
  </div>
";
    
        $mail->send();
        $alert = '<div class="alert-success"> 
                     <span>Message Sent! Thank you for contacting us.</span>
                    </div>';
      } catch (Exception $e){
        $alert = '<div class="alert-error">
                    <span>'.$e->getMessage().'</span>
                  </div>';
      }     
    
?>