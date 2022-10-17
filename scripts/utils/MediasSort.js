class MediasSort {
    constructor(photographer) {
        this._photographer = photographer
        this._photographerSectionPortfolio = document.querySelector(".photographer-section__portfolio");
        this._mediaSelect = document.querySelector('#media-select');
    }

    getSelectValue () {
        this._mediaSelect.addEventListener('change', (e) => {
            if(e.target.value === 'popularité') {
                this.sortMedias(this._photographer.medias, true);
                //.reverse()
                this.getNewPhotographerMedias(this._photographer.medias);
            } else if(e.target.value === 'titre') {
                this.sortMedias(this._photographer.medias, false);
                this.getNewPhotographerMedias(this._photographer.medias);
            } else if(e.target.value === 'date') {
                this.sortMedias(this._photographer.medias, true);
                this.getNewPhotographerMedias(this._photographer.medias);
            } else {
                this.getNewPhotographerMedias(this._photographer.medias);
            }
        });
    }

    sortMedias(medias,reverse) {
        if(reverse === true) {
            medias.sort(function(a, b) {
                if(a.likes < b.likes) {
                    return -1;
                }
                if(a.likes > b.likes) {
                    return 1;
                }
                return 0;
            }).reverse();
        } else {
            medias.sort(function(a, b) {
                if(a.likes < b.likes) {
                    return -1;
                }
                if(a.likes > b.likes) {
                    return 1;
                }
                return 0;
            });
        }
    }
    
    getNewPhotographerMedias(medias) {
        this._photographerSectionPortfolio.innerHTML = "";
        medias.forEach(item => {
            const media = new Medias(item);
            // Create photographer media template
            const tst = new PhotographerMedias(this._photographer, media);
            this._photographerSectionPortfolio.appendChild(tst.getPhotographerMediasCard());
        });
    }
}