window.addEventListener('keydown', (event) => {
    // Jika input pemain sedang dicegah (misalnya, saat masuk pintu), abaikan semua input
    if (player.preventInput) return

    switch(event.key){
        case 'w':
            for (let i = 0; i < doors.length; i++) {
                const door = doors[i];
                // Logika deteksi tabrakan (collision) antara hitbox pemain dan pintu
                if (
                    player.hitbox.position.x + player.hitbox.width <= door.position.x + door.width &&
                    player.hitbox.position.x >= door.position.x &&
                    player.hitbox.position.y + player.hitbox.height >= door.position.y &&
                    player.hitbox.position.y <= door.position.y + door.height
                ) {
                    player.velocity.x = 0;
                    player.velocity.y = 0;
                    player.preventInput = true; // Mencegah input lain selama animasi masuk pintu
                    // Panggil fungsi untuk memeriksa jawaban berdasarkan pintu yang dimasuki (index pintu)
                    handleAnswerAtCurrentLevel(i);
                    // Ganti animasi pemain menjadi 'enterDoor'
                    player.switchSprite('enterDoor');
                    door.play(); // Jalankan animasi pintu (jika ada)
                    return;
                }
            }
            // Jika pemain tidak berada di depan pintu dan sedang di darat (velocity.y === 0), maka melompat
            if(player.velocity.y === 0)
                player.velocity.y = -18
            break

        // Tombol 'a' ditekan (bergerak ke kiri)
        case 'a':
            keys.a.pressed=true
            break

        // Tombol 'd' ditekan (bergerak ke kanan)
        case 'd':
            keys.d.pressed=true
            break
    }
})
window.addEventListener('keyup', (event) => {
    switch(event.key){
        // Tombol 'a' dilepas
        case 'a':
            keys.a.pressed=false
            break
        // Tombol 'd' dilepas
        case 'd':
            keys.d.pressed=false
            break
    }
})