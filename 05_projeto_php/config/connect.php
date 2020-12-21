<?php 
        $connectDB = mysqli_connect("localhost:3306", "eds_recode", "", "eds_recode");
        if (!$connectDB) {
            die("Falha na conexão com Database: " .mysqli_connect_error());
        }
    ?>