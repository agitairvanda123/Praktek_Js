// 1. Antrian awal
let antrian = ['ray', 'fiki', 'fadhilla', 'farah'];
console.log("Antrian awal:", antrian);

// 2. Datang 1 pembeli: nabila
antrian.push('nabila');
console.log("Setelah nabila datang:", antrian);

// 3. Datang 2 pembeli: maza dan elsi
antrian.push('maza', 'elsi');
console.log("Setelah maza dan elsi datang:", antrian);

// 4. Antrian terakhir pulang: farah
antrian.pop();
console.log("Setelah farah pulang:", antrian);

// 5. Antrian pertama sudah mendapatkan belanjaannya: ray
antrian.shift();
console.log("Setelah ray mendapatkan belanjaannya:", antrian);

// 6. Antrian kedua sudah mendapatkan belanjaannya: fiki
antrian.shift();
console.log("Setelah fiki mendapatkan belanjaannya:", antrian);

// 7. Tomi datang dan nyerobot antrian: Tomi masuk di depan
antrian.unshift('tomi');
console.log("Setelah Tomi nyerobot antrian:", antrian);

// 8. Hasil akhir antrian
console.log("Hasil akhir antrian:", antrian);
