<?php
    $GetUsername = $_GET["user"];
    $GetPassword = $_GET["password"];
    $MyUser = 'kai';
    if($GetUsername == 'kai'&& $GetPassword == '0114'){
        echo "ok";
    }else{
        echo "error";
    }
?>