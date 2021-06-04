<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

require 'db_connection.php';
$data = json_decode(file_get_contents("php://input"));

$hot = mysqli_query($db_conn, "SELECT * FROM `tour_hot` WHERE name_hot LIKE '%$data->search%'");
$cruise = mysqli_query($db_conn, "SELECT * FROM `tour_cruise` WHERE name_cruise LIKE '%$data->search%'");
$offer = mysqli_query($db_conn, "SELECT * FROM `tour_offer` WHERE name_offer LIKE '%$data->search%'");
$sport = mysqli_query($db_conn, "SELECT * FROM `tour_sport` WHERE name_sport LIKE '%$data->search%'");
$capital = mysqli_query($db_conn, "SELECT * FROM `tour_capital` WHERE name_capital LIKE '%$data->search%'");

if ((mysqli_num_rows($hot) > 0)||(mysqli_num_rows($cruise) > 0)||(mysqli_num_rows($offer) > 0)||(mysqli_num_rows($sport) > 0)||(mysqli_num_rows($capital) > 0)) {
    $hots= mysqli_fetch_all($hot, MYSQLI_ASSOC);
    $cruises= mysqli_fetch_all($cruise, MYSQLI_ASSOC);
    $sports= mysqli_fetch_all($sport, MYSQLI_ASSOC);
    $capitals= mysqli_fetch_all($capital, MYSQLI_ASSOC);
    $offers= mysqli_fetch_all($offer, MYSQLI_ASSOC);

    $all_users = array_merge($hots, $cruises,$offers,$capitals,$sports);
    echo json_encode(["success" => 1, "searchhot" => $hots,"searchcruise" => $cruises,"searchoffer" => $offers,"searchcapital" => $capitals,"searchsport" => $sports]);
} else {
    echo json_encode(["success" => 0]);
}
?>