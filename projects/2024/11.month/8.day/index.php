<?php
    $file_name = "data.txt";

    $file = fopen($file_name, "r+");
    var_dump($file);

    if($file){
        $content = fread($file, filesize($file_name));
        echo "<br>" . nl2br($content);
        fwrite($file, "kys\n");
        echo "<br>" . nl2br($content);
        fclose($file);
    }
?>