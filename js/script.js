// Descrizione:
// Rifare l'esercizio dello slider come fatto assieme in classe.
// Bonus:
// Gestire il cambio dell'immagine al click sui pallini in basso (nav);
// Applicare l'autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente.

// img 1) 
// https://wallpaperaccess.com/full/31189.jpg

// img 2)
// https://i.pinimg.com/originals/5e/65/20/5e6520289b44e11a9e74363c18ce3ee1.jpg

// img 3)
// https://i.pinimg.com/originals/f4/c7/3b/f4c73b9f323254d5bb4206aa95a62b59.jpg

// img 4)
// https://wallpapercave.com/wp/wp2033303.jpg

// img 5)
// https://3.bp.blogspot.com/-eilZTdgbWPA/XFUltCS4Z1I/AAAAAAAABz0/feDxTa3Emtsb3Wx4xxu0hWnFrohqtwQfwCKgBGAs/w1920-h1080-c/mountain-lake-scenery-nature-cottage-25-4K.jpg

var app = new Vue(
    {
        el: '#root',
        data: {
            images: [
                "https://wallpaperaccess.com/full/31189.jpg",

                "https://3.bp.blogspot.com/-eilZTdgbWPA/XFUltCS4Z1I/AAAAAAAABz0/feDxTa3Emtsb3Wx4xxu0hWnFrohqtwQfwCKgBGAs/w1920-h1080-c/mountain-lake-scenery-nature-cottage-25-4K.jpg",

                "https://i.pinimg.com/originals/5e/65/20/5e6520289b44e11a9e74363c18ce3ee1.jpg",

                "https://i.pinimg.com/originals/f4/c7/3b/f4c73b9f323254d5bb4206aa95a62b59.jpg",

                "https://wallpapercave.com/wp/wp2033303.jpg"                
            ],
            imageIndex: 0,
            interval: null,
        }, // chiusura data
        methods: {
            nextImage: function () {
                this.imageIndex++;
                if (this.imageIndex == this.images.length) {
                    this.imageIndex = 0;
                }
            },
            prevImage: function () {
                this.imageIndex--;
                if (this.imageIndex == -1) {
                    this.imageIndex = this.images.length - 1;
                }
            },
            startSlider: function() {
                const self = this;
                interval = setInterval(function() {
                    self.nextImage();
                }, 3000);
            },
            stopSlider: function() {
                clearInterval(interval);
            }
        },  // chiusura methods 
        created: function() {
            // this.startSlider();
        }
    }
);
