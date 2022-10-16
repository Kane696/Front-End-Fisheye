class LightBox {
    constructor(photographer) {
        this._photographer = photographer
        this._lightbox = document.querySelector("#lightbox");
        this._lightboxModal = document.querySelector(".lightbox-modal");
        this._mediaLinks = document.querySelectorAll(".media-link");
        this._prevBtn = document.querySelector('.btn-prev')
        this._nextBtn = document.querySelector('.btn-next')
        this._photographerSectionPortfolio = document.querySelector(".photographer-section__portfolio");
        this._closeLightBoxBtn = document.querySelector(".close-lightbox__btn");
    }

    // When a media is selected
    mediaClick() {
        this._photographerSectionPortfolio.addEventListener('click', (e) => {
            if(e.target.parentElement.classList.contains('media-link')){
                let mediaId = e.target.parentElement.id;
                //Open lightbox when image is clicked
                this.openLightBox(mediaId);
            }
        });

        document.addEventListener('keydown', (e) => {
            const keyCode = e.keyCode ? e.keyCode : e.which
            if(keyCode === 13) {
                if(e.target.classList.contains('media-link')){
                    let mediaId = e.target.id;
                    //Open lightbox when image is clicked
                    this.openLightBox(mediaId);
                }
            }
        });
    }

    // When a close btn is clicked
    closeBtnClick() {
        this._closeLightBoxBtn.addEventListener('click', (e) => {
            this.closeLightBox();
        });

        document.addEventListener('keydown', (e) => {
            const keyCode = e.keyCode ? e.keyCode : e.which
            if (keyCode === 27) {
                this.closeLightBox();
            }
        });
    }

    // Open the lightbox
    openLightBox(id) {
        const media = Array.from(this._photographer.medias).filter(media => media.id == id)[0]
        let tst = new LightBoxModal(this._photographer, media)
        this._lightboxModal.appendChild(tst.getLightBoxModalDOM())
        this._lightbox.style.display = "block";
        
        this._slide = document.querySelectorAll('.slide');
    
        if(this._slide.length > 1) {
            this._slide[0].remove();
        }
        this.getTheNextSlide(id);
        this.getThePrevSlide(id);
    }

    // Close the lightbox
    closeLightBox() {
        this._lightbox.style.display = "none";
    }

    getTheNextSlide(id) {
        let medias = Array.from(this._photographer.medias);
        // When the next button is clicked
        this._nextBtn.addEventListener('click', () => {
            for(let i = 0; i < medias.length; i++) {
                if(medias[i].id == id) {
                    this.openLightBox(medias[i + 1].id);
                }
            }
        });

        // When the next button is pressed
        document.addEventListener('keydown', (e) => {
            const keyCode = e.keyCode ? e.keyCode : e.which;
            if(keyCode === 39) {
                for(let i = 0; i < medias.length; i++) {
                    if(medias[i].id == id) {
                        this.openLightBox(medias[i + 1].id);
                    }
                }
            }
        });
    }

    getThePrevSlide(id) {
        let medias = Array.from(this._photographer.medias);
        // When the next button is clicked
        this._prevBtn.addEventListener('click', () => {
            for(let i = 0; i < medias.length; i++) {
                if(medias[i].id == id) {
                    this.openLightBox(medias[i - 1].id);
                }
            }
        });

        // When the next button is pressed
        document.addEventListener('keydown', (e) => {
            const keyCode = e.keyCode ? e.keyCode : e.which;
            if(keyCode === 37) {
                for(let i = 0; i < medias.length; i++) {
                    if(medias[i].id == id) {
                        this.openLightBox(medias[i - 1].id);
                    }
                }
            }
        });
    }
}


