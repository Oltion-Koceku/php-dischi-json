<?php
$json = file_get_contents('dischi.json');
// trasformo la stringa del json in php
$list = json_decode($json);
// qua si insaerisce la logica dei dati ricevuti

// verifica dell'esistenza del post
if (isset($_POST['newAlbumTitle'])) {
  // creo un nuovo item con le variavbili che ci sono nel json
  $new_item = [
    'title' => $_POST['newAlbumTitle'],
    'author' => $_POST['newAlbumAuthor'],
    'year' => $_POST['newAlbumYear'],
    'poster' => $_POST['newAlbumPoster'],
    'genre' => $_POST['newAlbumGenre'],
    'back' => false
  ];
  // aggiungo new item nella lista
 $list[] = $new_item;
//  aggiorno la lista del json 
 file_put_contents('dischi.json', json_encode($list));
}



// trasformo il file php 
header('Content-Type: application/json');

echo json_encode($list);

