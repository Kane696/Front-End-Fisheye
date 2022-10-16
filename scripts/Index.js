class Index {
    constructor() {
        this.photographerSection = document.querySelector('.photographer_section')
        this.photographerHeader = document.querySelector('.photographer-header')
        this.photographerSectionPortfolio  = document.querySelector('.photographer-section__portfolio')
        this.lightBox  = document.querySelector('#lightbox')
        this.photographerApi = new PhotographerApi('/data/photographers.json')
        this.mediasApi = new MediasApi('/data/photographers.json')
    }

    async init() {

        let params = (new URL(document.location)).searchParams;
        let id = parseInt(params.get('id'));

        // Récupère les datas des photographes
        const photographersData = await this.photographerApi.getPhotographers();

        const mediasData = await this.mediasApi.getMedias();

        if(isNaN(id)){
            photographersData.filter(photographer => new Photographer(photographer))
            .forEach(photographer => {
                const PhotographerSectionTemplate = new PhotographerCard(photographer)
                this.photographerSection.appendChild(PhotographerSectionTemplate.getUserCardDOM())
            });
        } else {
            let photographer = photographersData.filter(photographer => photographer.id == id)[0]
            photographer.medias = mediasData.filter(item => item.photographerId == photographer.id)
        
            // Create header template
            const PhotographerHeaderTemplate = new PhotographerHeader(photographer)
            this.photographerHeader.appendChild(PhotographerHeaderTemplate.getUserHeaderDOM())
            this.photographerHeader.appendChild(PhotographerHeaderTemplate.getUserPortraitDOM())


            photographer.medias.forEach(item => {
                const media = new Medias(item);
                // Create photographer media template
                const PhotographerMediasTemplate = new PhotographerMedias(photographer, media)
                this.photographerSectionPortfolio.appendChild(PhotographerMediasTemplate.getPhotographerMediasCard())

            });
                // Create lightbox
                let lightBox = new LightBox(photographer);
                lightBox.mediaClick();
                lightBox.closeBtnClick();
        }
    };
}

const index = new Index()
index.init()