<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

require 'db_connection.php';

$data = json_decode(file_get_contents("php://input"));

if (
    isset($data->author_blog)
    && isset($data->img_blog)
    && isset($data->time_blog)
    && isset($data->title_blog)
    && isset($data->content_blog)
    && !empty(trim($data->author_blog))
    && !empty(trim($data->img_blog))
    && !empty(trim($data->time_blog))
    && !empty(trim($data->title_blog))
    && !empty(trim($data->content_blog))
) {
    $author_blog = mysqli_real_escape_string($db_conn, trim($data->author_blog));
    $img_blog = mysqli_real_escape_string($db_conn, trim($data->img_blog));
    $time_blog = mysqli_real_escape_string($db_conn, trim($data->time_blog));
    $title_blog = mysqli_real_escape_string($db_conn, trim($data->title_blog)); 
    $content_blog = mysqli_real_escape_string($db_conn, trim($data->content_blog));
        $updateUser = mysqli_query($db_conn, "UPDATE `blog` SET `author_blog`='$author_blog', `img_blog`='$img_blog', `time_blog`=$time_blog, `title_blog`='$title_blog', `content_blog`='$content_blog' WHERE `id_blog`='$data->id_blog'");
        if ($updateUser) {
            echo json_encode(["success" => 1, "msg" => "User Updated."]);
        } else {
            echo json_encode(["success" => 0, "msg" => "User Not Updated!"]);
        }
} else {
    echo json_encode(["success" => 0, "msg" => "Please fill all the required fields!"]);
}
?>