class SortContainer {
    constructor() {

    }

    getMediaSortDOM(){
        const div = document.createElement( "div" );
        div.classList.add("media-sort__container");
        const sortContainer = `
            <label for="media-select">Trier par</label>
            <select name="medias" id="media-select">
                <option value="popularité">Popularité</option>
                <option value="date">Date</option>
                <option value="titre">Titre</option>
            </select>
        `;
        div.innerHTML = sortContainer;
        return div;
    }
}