class Api {
    /**
     * 
     * @param {string} url 
     */
    constructor(url) {
        this._url = url;
    }
}


class PhotographerApi extends Api {
    /**
     * 
     * @param {string} url 
     */
    constructor(url) {
        super(url);
    }

    async getPhotographers() {
        return fetch(this._url)
            .then(res => res.json())
            .then(res => res.photographers)
            .catch(err => console.log("an error occurs", err));
    }
}


class MediasApi extends Api {
    /**
     * 
     * @param {string} url 
     */
    constructor(url) {
        super(url);
    }

    async getMedias() {
        return fetch(this._url)
            .then(res => res.json())
            .then(res => res.media)
            .catch(err => console.log("an error occurs", err));
    }
}