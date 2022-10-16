class PhotographerHeader {
    constructor(photographer) {
        this._photographer = photographer
    }

    getUserHeaderDOM() {
        const div = document.createElement( 'div' );
        const photographerInfos = `
            <div>
                <h1 tabindex="O">${this._photographer.name}</h1>
                <p>${this._photographer.city}, ${this._photographer.country}</p>
                <p>${this._photographer.tagline}</p>
            </div>
        `
        div.innerHTML = photographerInfos;
        return div;
    }

    getUserPortraitDOM() {
        const img = document.createElement( 'img' );
        img.setAttribute('src', `/assets/photographers/Photographers-ID-Photos/${this._photographer.portrait}`)
        img.setAttribute('alt', `${this._photographer.name}`);
        img.classList.add('photographer-portrait');
        return img;
    }
}