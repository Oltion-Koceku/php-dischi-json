<?php
$json = file_get_contents('dischi.json');
// trasformo la stringa del json in php
$list = json_decode($json);
// qua si insaerisce la logica 


// trasformo il file php 
header('Content-Type: application/json');

echo json_encode($list);

