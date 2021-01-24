<?php

    $name = $_POST['name'];
    $address = $_POST['address'];
    $phone = $_POST['telefon'];
    $message = $_POST['message'];


    $email_from = 'office@mt-elektro.rs';

    $email_subject = "Nova poruka od ".$name;

    $email_body = "Od: ".$name.".\n".   
                    "Telefon: ".$phone.".\n".
                        "Adresa: ".$address.".\n".
                            "Poruka: ".$message.".\n";

    $to = "servismtelektro@gmail.com";
    $too = "office@mt-elektro.rs";

    $headers = "Od: ".$email_from." \r\n";

    $headers .= "Pozvati: ".$phone." \r\n";

    mail($to,$email_subject,$email_body,$headers);
    // mail($too,$email_subject,$email_body,$headers);
    
    header("Location: index.html#MEJL-USPESNO-POSLAT");
	
?>