<?php
$ip_address = $_SERVER['REMOTE_ADDR'];
$log_file = '../log.txt'; // Dosyanın doğru konumunu sağlayın
$username = '';

if (file_exists($log_file)) {
    $file = fopen($log_file, 'r');
    if ($file) {
        while (($line = fgets($file)) !== false) {
            if (strpos($line, $ip_address) !== false) {
                preg_match('/Kullanıcı Adı: ([^,]+)/', $line, $matches);
                if (isset($matches[1])) {
                    $username = $matches[1];
                    break;
                }
            }
        }
        fclose($file);
    }
}

if ($username) {
    echo json_encode(['status' => 'success', 'username' => $username]);
} else {
    echo json_encode(['status' => 'error', 'message' => 'Kullanıcı adı bulunamadı.']);
}
?>
