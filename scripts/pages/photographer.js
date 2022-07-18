//Mettre le code JavaScript lié à la page photographer.html

async function getPhotographersMedias() {
    // Fetch data
    return fetch('./data/photographers.json').then(response => {
        return response.json();
    }).then(data => {
        return {media: [...data.media]};
    }).catch(err => {
        console.log(err);
    });
}

async function displayData(media) {
    // Get url id parameter
    let params = (new URL(document.location)).searchParams;
    let id = parseInt(params.get('id'));

    media.forEach((item) => {
        if(id === item.photographerId){
            console.log(item)
        }
    });
};

async function init() {
    // Get photographers media's data
    const { media } = await getPhotographersMedias();
    displayData(media);
};

init();