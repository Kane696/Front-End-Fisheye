class PhotographerEncart {
    constructor(photographer){
        this._photographer = photographer;
    }

    getPhotographerEncartDOM(){
        let likes = [];
        let sum = 0;

        // Get all medias likes
        this._photographer.medias.forEach(media => {
            likes.push(media.likes);
        }); 

        // Get array sum
        likes.forEach(like => {
            sum += like;
        });

        const div = document.createElement( "div");
        div.classList.add("photographer-encart");
        const photographerEncart = `
            <div class="media-likes">
                <p class="likes-sum">${sum}</p>
                <i class="fa-solid fa-heart photographer-encart__likes" aria-label="likes"></i>
            </div>
            <div>
                <p>${this._photographer.price}€/jour</p>
            </div>
        `;
        div.innerHTML = photographerEncart;
        return div;
    }
}