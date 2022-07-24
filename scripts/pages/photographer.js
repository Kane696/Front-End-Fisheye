//Mettre le code JavaScript lié à la page photographer.html

async function displayDataMedia(media, photographers) {
    // Get url id parameter
    let params = (new URL(document.location)).searchParams;
    let id = parseInt(params.get('id'));

    let mediaModel;

    const photographersPortfolioCard = document.querySelector(".photographer-section__portfolio");
    const photographerHeader = document.querySelector(".photographer-header");
    const photographerEncart = document.querySelector(".photographer-encart");

    photographers.forEach((photographer) => {
        media.forEach((mediaItem) => {
            if(id === mediaItem.photographerId){
                if(photographer.id === mediaItem.photographerId){
                    mediaModel = mediaFactory(mediaItem, photographer);
                    const userPortfolioCardDOM = mediaModel.getUserPortfolioCardDOM();
                    photographersPortfolioCard.appendChild(userPortfolioCardDOM);
                }
            }
        });
    });
    const photographerInfos = mediaModel.getPhotographerInfos();
    photographerHeader.appendChild(photographerInfos);
    const encartModel = mediaModel.getEncart();
    photographerEncart.appendChild(encartModel);
    
};

async function init() {
    // Get photographers media's data
    const { media, photographers } = await getPhotographers();
    displayDataMedia(media, photographers);
};

init();