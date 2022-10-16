class MediaEncart {
    constructor(media){
        this._media = media
    }

    getMediaEncartDOM(){
        const article = document.createElement( 'article' );

        const photographerCard = `
            <a href="http://127.0.0.1:5500/photographer.html?id=${this._photographer.id}">
                <img src="/assets/photographers/Photographers-ID-Photos/${this._photographer.portrait}" class="photographer-portrait" />
                <h2>${this._photographer.name}</h2>
            </a>
            <div tabindex="0">
                <h3>${this._photographer.city}, ${this._photographer.country}</h3>
                <p>${this._photographer.tagline}</p>
                <p>${this._photographer.price}€/jour</p>
            </div>
        `
        article.innerHTML = photographerCard;
        return article;
    }
}