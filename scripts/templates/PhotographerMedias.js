class PhotographerMedias {
    constructor(photographer, media) {
        this._photographer = photographer
        this._media = media
    }

    getPhotographerMediasCard() {
        const article = document.createElement( 'article' );
        let photographerFirstname = this._photographer.name.split(' ')[0];
        let photographerCard;

            // Check wether the data is type image or video
            if(this._media.image){
                photographerCard = `
                    <a href="#" class="media-link" id="${this._media.id}" aria-label="${this._media.title}">
                        <img src="/assets/photographers/${photographerFirstname}/${this._media.image}" alt="${this._media.title}" />
                    </a>
                    <div>
                        <p tabindex="0">${this._media.title}</p>
                        <div class="media-likes">
                            <p tabindex="0">${this._media.likes}</p>
                            <i class="fa-regular fa-heart like" aria-label="likes"></i>
                        </div>
                    </div>
                `
            } else {
                photographerCard = `
                    <a href="#" class="media-link" id="${this._media.id}" aria-label="${this._media.title}">
                        <video controls>
                            <source src="/assets/photographers/${photographerFirstname}/${this._media.video}">
                        </video> 
                    </a>
                    <div>
                        <p tabindex="0">${this._media.title}</p>
                        <div class="media-likes">
                            <p tabindex="0">${this._media.likes}</p>
                            <i class="fa-regular fa-heart like" aria-label="likes"></i>
                        </div>
                    </div>
                `
            }
    
        article.innerHTML = photographerCard;
        return article;
    }

}
