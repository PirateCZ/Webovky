<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cestovní Kancelář</title>
</head>
<body style="display: flex; align-items: center; flex-direction: column">
    <div style="display: flex; justify-content: inline; margin: 50px;">
        <img src="./log.jpg" alt="logo" style="width: 50px; height: 50px;">
        <h1>Naše Super Cestovka</h1>
    </div>
    <br>
    <div class="form">
        <form action="#" method="POST">
            <label for="name">Jméno</label>
            <input type="text" name="name" required>
            <br><br>
            <label for="surname">Příjmení</label>
            <input type="text" name="surname" required>
            <br><br>
            <select name="destination" id="" required>
                <option value="kypr">Kypr</option>
                <option value="polsko">Polsko</option>
                <option value="spanelsko">Španělsko</option>
                <option value="amerika">USA</option>
                <option value="rusko">Rusko</option>
            </select>
            <h3>Služby</h3>
            <label for="wifi">Wi-Fi</label>
            <input type="checkbox" name="wifi" id="" ><br>
            <label for="ac">Klimatizace</label>
            <input type="checkbox" name="ac" id="" ><br>
            <label for="bar">Bar</label>
            <input type="checkbox" name="bar" id=""><br>
            <h3>Platba</h3>
            <label for="cash">Hotově</label>
            <input type="radio" name="payment" value="cash" id="" required><br>
            <label for="transfer">Převodem</label>
            <input type="radio" name="payment" value="transfer" id="" required><br>
            <label for="card">Kartou</label>
            <input type="radio" name="payment" value="card" id="" required><br>
            <br>
            <input type="submit">
        </form>
    </div>  
</body>
</html>

<?php
    if($_SERVER["REQUEST_METHOD"] == "POST"){
        $text = "";

        $name = $_POST["name"];
        $surname = $_POST["surname"];
        if(strpbrk($name, '0123456789')){
            echo "mas tam cisla";
            exit();
        }
        if(strpbrk($surname, '0123456789')){
            echo 'mas tam cisla';
            exit();
        }

        $text = $text . $name . " " . $surname;
        $text = $text . "\n" . $_POST["destination"];

        if(isset($_POST["wifi"])){
            $text = $text . "\n" . "Wi-Fi";
        }
        if(isset($_POST["ac"])){
            $text = $text . "\n" . "Klimatizace";
        }
        if(isset($_POST["bar"])){
            $text = $text . "\n" . "Bar";

        }
        $text = $text . "\n" . $_POST["payment"];
        $myfile = fopen("testfile.txt", "w"); 
        fwrite($myfile, $text);
        fclose($myfile);
    }
?>