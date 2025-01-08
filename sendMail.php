<?php

switch ($_SERVER['REQUEST_METHOD']) {
    case ("OPTIONS"): 
        // CORS-Header für OPTIONS-Anfragen (Preflight)
        header("Access-Control-Allow-Origin: https://marco-angermann.de"); 
        header("Access-Control-Allow-Methods: POST");
        header("Access-Control-Allow-Headers: Content-Type, Authorization");
        exit;

    case("POST"):
        // CORS-Header für POST-Anfragen
        header("Access-Control-Allow-Origin: https://marco-angermann.de"); 
        header("Content-Type: application/json; charset=UTF-8");

        // Eingabedaten einlesen
        $json = file_get_contents('php://input');
        $params = json_decode($json);

        // Eingaben sanitizen und validieren
        $email = filter_var($params->email ?? '', FILTER_SANITIZE_EMAIL);
        $name = htmlspecialchars($params->name ?? '');
        $message = htmlspecialchars($params->message ?? '');

        // Eingaben validieren
        if (!filter_var($email, FILTER_VALIDATE_EMAIL) || empty($name) || empty($message)) {
            echo json_encode(['status' => 'error', 'message' => 'Invalid input']);
            exit;
        }

        // E-Mail-Adresse des Empfängers
        $recipient = 'marcoangermann@hotmail.de';  
        $subject = "Contact From <$email>";
        $messageBody = "From: " . $name . "<br>" . nl2br($message);

        // E-Mail-Header
        $headers = [
            'MIME-Version: 1.0',
            'Content-type: text/html; charset=utf-8',
            "From: no-reply@marco-angermann.de"
        ];

        // E-Mail versenden und Antwort zurückgeben
        if (mail($recipient, $subject, $messageBody, implode("\r\n", $headers))) {
            echo json_encode(['status' => 'success']);
        } else {
            error_log("Mail konnte nicht gesendet werden.");
            echo json_encode(['status' => 'error', 'message' => 'Mail failed to send']);
        }
        break;

    default:
        // Fehler bei nicht unterstützten Methoden
        header("Allow: POST", true, 405);
        exit;
}



