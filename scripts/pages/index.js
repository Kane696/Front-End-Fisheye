    async function getPhotographers() {
        // Fetch data
        return fetch('./data/photographers.json').then(response => {
            return response.json();
        }).then(data => {
            return data;
        }).catch(err => {
            console.log(err);
        });

    }

    async function displayData(photographers) {
        const photographersSection = document.querySelector(".photographer_section");

        photographers.forEach((photographer) => {
            const photographerModel = photographerFactory(photographer);
            const userCardDOM = photographerModel.getUserCardDOM();
            photographersSection.appendChild(userCardDOM);
        });
    };

    async function init() {
        // Récupère les datas des photographes
        const { photographers } = await getPhotographers();
        // console.log(await getPhotographers())

        displayData(photographers);
    };
    
    init();
    