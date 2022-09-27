//Mettre le code JavaScript lié à la page photographer.html

async function displayDataMedia(photographer) {

    let mediaModel;
    const photographersPortfolioCard = document.querySelector(".photographer-section__portfolio");
    const photographerHeader = document.querySelector(".photographer-header");
    const photographerEncart = document.querySelector(".photographer-encart");

    photographer.medias.forEach((media) => {
    mediaModel = mediaFactory(media, photographer);
    
        const userPortfolioCardDOM = mediaModel.getUserPortfolioCardDOM();
        photographersPortfolioCard.appendChild(userPortfolioCardDOM);
    });
    const photographerInfos = getPhotographerInfos(photographer);
    photographerHeader.appendChild(photographerInfos);
    const encartModel = mediaModel.getEncart();
    photographerEncart.appendChild(encartModel);
    
};

function getPhotographerInfos(photographer){
    
    const picture = `assets/photographers/Photographers-ID-Photos/${photographer.portrait}`;

    // Add title to the modal
    const modalTitle = document.querySelector("#modal-title");
    modalTitle.append(photographer.name);

        const div = document.createElement("div");
        div.classList.add("photographer-header__infos");
        let photographerArr = [];
        let h1 = document.createElement('h1');
        let attributes = {
            tabIndex: "2",
        }
        setAttributes(h1, attributes);
        h1.textContent = photographer.name;
        const h3 = document.createElement('h3');
        h3.textContent = photographer.city + ', ' + photographer.country;
        let p = document.createElement('p');
        p.textContent = photographer.tagline;
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture);
        img.setAttribute("alt", "");

        photographerArr = [h1, h3, p];
        return appendElement(div, photographerArr);
}

async function init() {
    // Get photographers media's data
    let params = (new URL(document.location)).searchParams;
    let id = parseInt(params.get('id'));
    const { photographer } = await getPhotographer(id);
    console.log(photographer);
    displayDataMedia(photographer);
};

init();

async function getPhotographer(id){
   // Fetch data
    return fetch('./data/photographers.json').then(response => {
        return response.json();
    }).then(data => { 
        const photographer = data.photographers.filter(item => item.id == id)[0];
        photographer.medias = data.media.filter(item => item.photographerId == photographer.id);
        return { photographer };
    }).catch(err => {
        console.log(err);
    });
}