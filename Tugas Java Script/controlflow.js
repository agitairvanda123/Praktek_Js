// Meminta pengguna untuk memasukkan angka
let angka = prompt("Masukkan sebuah angka:");

// Mengubah input menjadi angka
angka = Number(angka);

// Memeriksa apakah input adalah angka
if (isNaN(angka)) {
    console.log("Input bukan angka. Silakan masukkan angka yang valid.");
} else {
    // Menggunakan switch untuk menentukan jenis angka
    switch (true) {
        case (angka > 0):
            console.log(angka + " adalah angka positif.");
            break;
        case (angka < 0):
            console.log(angka + " adalah angka negatif.");
            break;
        default:
            console.log("Anda memasukkan angka nol.");
            break;
    }

    // Menggunakan loop for untuk mencetak angka dari 1 hingga angka yang dimasukkan
    console.log("Menghitung dari 1 hingga " + angka + ":");
    for (let i = 1; i <= angka; i++) {
        console.log(i);
    }
}