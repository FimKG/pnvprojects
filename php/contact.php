<?php

  $receiving_email_address = 'molotohouseplansa@gmail.com';
  
if (isset($_POST['name'], $_POST['subject'], $_POST['number'], $_POST['email'], $_POST['message'])) {

    print_r($_POST +"\n" + $receiving_email_address);
}

// $contact = new PHP_Email_Form;
// $contact->ajax = true;

// $contact->to = $receiving_email_address;
// $contact->from_name = $_POST['name'];
// $contact->from_email = $_POST['email'];
// $contact->subject = $_POST['subject'];
// $contact->message = $_POST['message'] + $_POST['number'];

// $contact->add_message( $_POST['name'], 'From');
// $contact->add_message( $_POST['email'], 'Email');
// $contact->add_message( $_POST['message'], 'Message', 10);

// echo $contact->send();
// 
