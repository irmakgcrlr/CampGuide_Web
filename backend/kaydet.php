<?php
$servername = "localhost";
$username = "adın";
$password = "şifren";
$dbname = "database ismin"; // BURAYI KONTROL ET: Veritabanı adın tam olarak bu mu?

$conn = new mysqli($servername, $username, $password, $dbname);

// Bağlantı hatası varsa ekrana yazdır
if ($conn->connect_error) {
    die("Veritabanı bağlantı hatası: " . $conn->connect_error);
}

// Veriler formdan geliyor mu kontrol et
if(isset($_POST['fullname'])) {
    $fullname = $_POST['fullname'];
    $contact = $_POST['contact'];
    $people = $_POST['people'];
    $checkin = $_POST['checkin'];
    $checkout = $_POST['checkout'];

    $sql = "INSERT INTO rezervasyonlar (fullname, contact, people, checkin, checkout) 
            VALUES ('$fullname', '$contact', '$people', '$checkin', '$checkout')";

    if ($conn->query($sql) === TRUE) {
        echo "Başarılı";
    } else {
        // Hata varsa tam olarak ne olduğunu söyler (Örn: Tablo bulunamadı)
        echo "Sorgu Hatası: " . $conn->error;
    }
} else {
    echo "Hata: Form verileri PHP'ye ulaşmadı!";
}

$conn->close();
?>