<?php

switch ($_SERVER['REQUEST_METHOD']) {
    case ("OPTIONS"): 
        header("Access-Control-Allow-Origin: https://www.marco-angermann.com");
        header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
        header("Access-Control-Allow-Headers: content-type");
        exit;

    case("POST"):
        header("Access-Control-Allow-Origin: https://www.marco-angermann.com");
        header("Content-Type: application/json; charset=UTF-8");

        $json = file_get_contents('php://input');
        $params = json_decode($json);

        if (!isset($params->email, $params->name, $params->message)) {
            echo json_encode(['status' => 'error', 'message' => 'Invalid input']);
            exit;
        }

        $email = filter_var($params->email, FILTER_VALIDATE_EMAIL);
        $name = htmlspecialchars($params->name);
        $message = htmlspecialchars($params->message);

        if (!$email) {
            echo json_encode(['status' => 'error', 'message' => 'Invalid email']);
            exit;
        }

        $recipient = 'marcoangermann@hotmail.de';  
        $subject = "Contact From <$email>";
        $message_content = "From: " . $name . "<br>" . nl2br($message);

        $headers   = array();
        $headers[] = 'MIME-Version: 1.0';
        $headers[] = 'Content-type: text/html; charset=utf-8';
        $headers[] = "From: no-reply@marco-angermann.de";

        if (mail($recipient, $subject, $message_content, implode("\r\n", $headers))) {
            echo json_encode(['status' => 'success']);
        } else {
            echo json_encode(['status' => 'error', 'message' => 'Email sending failed']);
        }
        break;

    default:
        header("Allow: POST, OPTIONS", true, 405);
        exit;
}
?>

