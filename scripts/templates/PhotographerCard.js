class PhotographerCard {
    constructor(photographer){
        this._photographer = photographer
    }

    getUserCardDOM(){
        const article = document.createElement( 'article' );
        const photographerCard = `
            <a href="http://127.0.0.1:5500/photographer.html?id=${this._photographer.id}">
                <picture>
                    <source type="image/webp" srcset="/assets/photographers/Photographers-ID-Photos/${this._photographer.portrait.split('.')[0] + '.webp'}">
                    <source type="image/jpeg" srcset="/assets/photographers/Photographers-ID-Photos/${this._photographer.portrait}">
                    <img src="/assets/photographers/Photographers-ID-Photos/${this._photographer.portrait}" class="photographer-portrait" alt="${this._photographer.name}"/>
                </picture>
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