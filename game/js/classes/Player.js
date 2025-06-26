class Player extends Sprite{
    constructor({ collisionBlocks = [], imageSrc, frameRate, animations, loop}) {
        super({imageSrc, frameRate, animations, loop})
        // Posisi awal pemain di canvas
        this.position={
            x:200,
            y:200
        }
        // Kecepatan awal pemain (horizontal dan vertikal)
        this.velocity ={
            x:0,
            y:0,
        }
        // Properti untuk gravitasi
        this.gravity = 1
        // Menyimpan data blok kolisi yang ada di level
        this.collisionBlocks = collisionBlocks
    }
    // Fungsi update() dipanggil di setiap frame pada game loop utama
    update(){
        this.position.x += this.velocity.x
        this.updateHitbox()
        this.checkForHorizontalCollisions()
        this.applyGravity()
        this.updateHitbox()
        this.checkForVerticalCollisions()
    }
    // Fungsi untuk menangani input dari keyboard
    handleInput(keys){
        if(this.preventInput) return
        // Reset kecepatan horizontal di setiap frame
        this.velocity.x=0
        // Jika tombol 'd' (kanan) ditekan
        if(keys.d.pressed){
            this.switchSprite('runRight') // Ganti animasi menjadi lari ke kanan
            this.velocity.x=4 // Beri kecepatan horizontal positif
            this.lastDirection='right' // Simpan arah terakhir pemain
        }
        // Jika tombol 'a' (kiri) ditekan
        else if(keys.a.pressed){
            this.switchSprite('runLeft') // Ganti animasi menjadi lari ke kiri
            this.velocity.x=-4 // Beri kecepatan horizontal negatif
            this.lastDirection='left' // Simpan arah terakhir pemain
        }
        // Jika tidak ada tombol gerakan yang ditekan
        else {
            // Ganti animasi menjadi diam (idle) sesuai arah terakhir
            if(this.lastDirection === 'left') 
                this.switchSprite('idleLeft')
            else this.switchSprite('idleRight')
        }
    }
    // Fungsi untuk mengganti animasi (sprite sheet) pemain
    switchSprite(name){
        // Jika animasi yang dituju sudah berjalan, jangan diulang
        if(this.image === this.animations[name].image) return
        // Atur ulang frame animasi ke awal
        this.currentFrame = 0
        // Ganti gambar/sprite sheet sesuai nama animasi
        this.image = this.animations[name].image
        this.frameRate = this.animations[name].frameRate
        this.frameBuffer = this.animations[name].frameBuffer
        this.loop = this.animations[name].loop
        this.currentAnimation = this.animations[name]
    }
    // Fungsi untuk memperbarui posisi hitbox
    updateHitbox(){
        // Hitbox adalah area 'tak terlihat' yang digunakan untuk deteksi tabrakan yang akurat
        this.hitbox={
            position: {
                x: this.position.x + 58, // Disesuaikan dengan posisi karakter di dalam sprite
                y: this.position.y + 34
            },
            width: 50,
            height: 53,
        }
    }
    // Fungsi untuk memeriksa tabrakan horizontal
    checkForHorizontalCollisions(){
        for (let i = 0; i < this.collisionBlocks.length; i++){
            const collisionBlock = this.collisionBlocks[i]
            // Jika hitbox pemain bersentuhan dengan blok kolisi
            if(
                this.hitbox.position.x <= collisionBlock.position.x + collisionBlock.width &&
                this.hitbox.position.x + this.hitbox.width >= collisionBlock.position.x &&
                this.hitbox.position.y + this.hitbox.height >= collisionBlock.position.y &&
                this.hitbox.position.y <= collisionBlock.position.y + collisionBlock.height
            ){
                // Jika pemain bergerak ke kiri (velocity.x < 0)
                if(this.velocity.x < 0) {
                    const offset = this.hitbox.position.x - this.position.x
                    // Pindahkan posisi pemain ke sisi kanan blok tabrakan untuk mencegah tumpang tindih
                    this.position.x = collisionBlock.position.x + collisionBlock.width - offset + 0.01
                    break
                }
                // Jika pemain bergerak ke kanan (velocity.x > 0)
                if(this.velocity.x > 0){
                    const offset = this.hitbox.position.x - this.position.x + this.hitbox.width
                    // Pindahkan posisi pemain ke sisi kiri blok tabrakan
                    this.position.x = collisionBlock.position.x - offset - 0.01
                    break
                }
            }
        }
    }
    // Fungsi untuk menerapkan gravitasi
    applyGravity(){
        this.velocity.y += this.gravity
        this.position.y += this.velocity.y
    }
    // Fungsi untuk memeriksa tabrakan vertikal
    checkForVerticalCollisions(){
        for (let i = 0; i < this.collisionBlocks.length; i++){
            const collisionBlock = this.collisionBlocks[i]

            // Jika hitbox pemain bersentuhan dengan blok kolisi
            if(
                this.hitbox.position.x <= collisionBlock.position.x + collisionBlock.width &&
                this.hitbox.position.x + this.hitbox.width >= collisionBlock.position.x &&
                this.hitbox.position.y + this.hitbox.height >= collisionBlock.position.y &&
                this.hitbox.position.y <= collisionBlock.position.y + collisionBlock.height
            ){
                // Jika pemain bergerak ke atas (melompat)
                if(this.velocity.y < 0) {
                    this.velocity.y = 0 // Hentikan gerakan ke atas
                    const offset = this.hitbox.position.y - this.position.y
                    // Pindahkan posisi pemain ke bawah blok tabrakan
                    this.position.y = collisionBlock.position.y + collisionBlock.height - offset + 0.01
                    break
                }
                // Jika pemain bergerak ke bawah (jatuh)
                if(this.velocity.y > 0){
                    this.velocity.y = 0 // Hentikan gerakan jatuh, membuat pemain berdiri di atas platform
                    const offset = this.hitbox.position.y - this.position.y + this.hitbox.height
                    // Pindahkan posisi pemain ke atas blok tabrakan
                    this.position.y = collisionBlock.position.y - offset - 0.01
                    break
                }
            }
        }
    }
}