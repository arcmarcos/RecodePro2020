<?php 
  function consultDB($sql) {
    $connect = mysqli_connect (
      'localhost:3306', 
      'eds_admin',
      '',
      'eletro_dev_store'
    );

    $result = mysqli_query($connect, $sql);
    mysqli_close($connect);
    return $result;
  }

  function insertDB($sql) {
    $connect = mysqli_connect (
      'localhost:3306', 
      'eds_admin',
      '',
      'eletro_dev_store'
    );

    $result = mysqli_multi_query($connect, $sql);
    mysqli_close($connect);
  }
