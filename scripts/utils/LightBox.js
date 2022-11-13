class LightBox {
    constructor(photographer) {
        this._photographer = photographer;
        this._body = document.querySelector("#body");
        this._main = document.querySelector("#main");
        this._lightbox = document.querySelector("#lightbox");
        this._lightboxModal = document.querySelector(".lightbox-modal");
        this._mediaLinks = document.querySelectorAll(".media-link");
        this._prevBtn = document.querySelector(".btn-prev");
        this._nextBtn = document.querySelector(".btn-next");
        this._photographerSectionPortfolio = document.querySelector(".photographer-section__portfolio");
        this._closeLightBoxBtn = document.querySelector(".close-lightbox__btn");
        // add all the elements inside modal which you want to make focusable
        this._focusableElements = "button, img, video, div.slide, [tabindex]:not([tabindex='-1'])";
        // Get first element to be focused inside modal
        this._firstFocusableElement = this._lightbox.querySelectorAll(this._focusableElements)[0];
        this._focusableContent = this._lightbox.querySelectorAll(this._focusableElements);

        // Get last element to be focused inside modal
        this._lastFocusableElement = this._focusableContent[this._focusableContent.length - 1];

    }

    // When a media is selected
    mediaClick() {
        this._photographerSectionPortfolio.addEventListener("click", (e) => {
            if(e.target.parentElement.classList.contains("media-link")){
                let mediaId = e.target.parentElement.id;
                //Open lightbox when image is clicked
                this.openLightBox(mediaId);
            }
        });

        document.addEventListener("keydown", (e) => {
            const keyCode = e.keyCode ? e.keyCode : e.which
            if(keyCode === 13) {
                if(e.target.classList.contains("media-link")){
                    let mediaId = e.target.id;
                    //Open lightbox when image is clicked
                    this.openLightBox(mediaId);
                }
            }
        });
    }

    // When a close btn is clicked
    closeBtnClick() {
        this._closeLightBoxBtn.addEventListener("click", (e) => {
            this.closeLightBox();
        });

        document.addEventListener("keydown", (e) => {
            const keyCode = e.keyCode ? e.keyCode : e.which
            if (keyCode === 27 || keyCode === 13) {
                this.closeLightBox();
            }
        });
    }

    // Open the lightbox
    openLightBox(id) {
        this._lightbox.style.display = "block";
        this._main.setAttribute("aria-hidden", "true");
        this._lightbox.setAttribute("aria-hidden", "false");
        // this._body.classList.add('no-scroll)'
        
        const media = Array.from(this._photographer.medias).filter(media => media.id == id)[0];
        let tst = new LightBoxModal(this._photographer, media);
        this._lightboxModal.insertBefore(tst.getLightBoxModalDOM(), this._prevBtn);
    

        document.addEventListener('keydown', function(e) {
            let isTabPressed = e.key === 'Tab' || e.keyCode === 9;
            if (!isTabPressed) {
                return;
            }
            // If shift key pressed for shift + tab combination
            if (e.shiftKey) {
                if (document.activeElement === this._firstFocusableElement) {
                    // Add focus for the last focusable element
                    this._lastFocusableElement.focus();
                    e.preventDefault();
                }
            // If tab key is pressed
            } else {
                // If focused has reached to last focusable element then focus first focusable element after pressing tab
                if (document.activeElement === this._lastFocusableElement) {
                    // Add focus for the first focusable element
                    this._firstFocusableElement.focus();
                    e.preventDefault();
                }
            }
        });
        this._firstFocusableElement.focus();  


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
            // for(let i = 0; i < medias.length; i++) {
            //     if(medias[i].id == id) {
            //         if(i + 1 >= medias.length) {
            //             this.openLightBox(medias[0].id);
            //         } else {
            //             this.openLightBox(medias[i + 1].id);
            //         }
            //     }
            // }


            // getNextMediaId (id) {
                const index = this._photographer.medias.findIndex(function (media) {
                  return media.id == id
                })
                const nextIndex = index + 1 <= this._photographer.medias.length - 1 ? index + 1 : 0
                console.log(nextIndex)
                return this.openLightBox(medias[nextIndex].id)
            //   }
        });

        // When the next button is pressed
        document.addEventListener('keydown', (e) => {
            const keyCode = e.keyCode ? e.keyCode : e.which;
            if(keyCode === 39 || keyCode === 13) {
                for(let i = 0; i < medias.length; i++) {
                    if(medias[i].id == id) {
                        if(i + 1 >= medias.length) {
                            this.openLightBox(medias[0].id);
                        } else {
                            this.openLightBox(medias[i + 1].id);
                        }
                    }
                }
            }
        });
    }

    getThePrevSlide(id) {
        let medias = Array.from(this._photographer.medias);
        // When the next button is clicked
        this._prevBtn.addEventListener('click', () => {
            // for(let i = 0; i < medias.length; i++) {
            //     if(medias[i].id == id) {
            //         if(i - 1 >= 0) {
            //             this.openLightBox(medias[i - 1].id);
            //         } else {
            //             this.openLightBox(medias[medias.length - 1].id);
            //         }
            //     }
            // }
            const index = this._photographer.medias.findIndex(function (media) {
                return media.id == id
            });
            const prevIndex = index - 1 <= 0 ? this._photographer.medias.length - 1 : index - 1;
            console.log(prevIndex)
            return this.openLightBox(medias[prevIndex].id)
        });

        // When the next button is pressed
        document.addEventListener('keydown', (e) => {
            const keyCode = e.keyCode ? e.keyCode : e.which;
            if(keyCode === 37) {
                for(let i = 0; i < medias.length; i++) {
                    if(i - 1 >= 0) {
                        this.openLightBox(medias[i - 1].id);
                    } else {
                        this.openLightBox(medias[medias.length - 1].id);
                    }
                }
            }
        });
    }
}


