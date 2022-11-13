class MediasSort {
    constructor(photographer) {
        this._photographer = photographer;
        this._photographerSectionPortfolio = document.querySelector(".photographer-section__portfolio");
        this._mediaSelect = document.querySelector("#media-select");
    }

    getSelectValue () {
        this._mediaSelect.addEventListener("change", (e) => {
            if(e.target.value === "popularité") {
                this._photographer.medias.sort(function(a, b) {
                    return (a.likes < b.likes) ? -1: 1;
                }).reverse();
                this.getNewPhotographerMedias(this._photographer.medias);
            } else if(e.target.value === "titre") {
                this._photographer.medias.sort(function(a, b) {
                    return (a.title < b.title) ? -1: 1;
                });
                this.getNewPhotographerMedias(this._photographer.medias);
            } else if(e.target.value === "date") {
                this._photographer.medias.sort(function(a, b) {
                    return (a.date < b.date) ? -1: 1;
                }).reverse();
                this.getNewPhotographerMedias(this._photographer.medias);
            } else {
                this.getNewPhotographerMedias(this._photographer.medias);
            }
        });
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