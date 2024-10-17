<?php
for($i = 0; $i < 10; $i++){

    $x = rand(-10,250);
    if ($x <= 60 && $x >= 0){
        echo $x . " 1";
    }
    else if ($x <= 120 && $x >= 0){
        echo $x . " 2";      
    }
    else if ($x <= 250 && $x >= 0){
        echo $x . " 3";
    }
    else echo "error";
    echo "<br>";
}
echo "nemam slov typek nas proste uci podle w3schools";

$i = 0;

echo "<br>";
do {
  echo $i;
  $i++;
} while ($i < 6);

echo "<br>";
$i = 0;
while ($i < 6) {
  echo $i;
  $i++;
}
?>