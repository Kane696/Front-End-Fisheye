class LightBoxModal {
    constructor(photograher, media){
        this._photographer = photograher
        this._media = media
    }

    getLightBoxModalDOM() {
        const div = document.createElement( 'div' );
        div.setAttribute('class', 'slide')
        div.setAttribute('id', `${this._media.id}`)
        let photographerFirstname = this._photographer.name.split(' ')[0];
        let modal;


        // Check wether the data is type image or video
        if(this._media.image){
            modal = `
                <img src="/assets/photographers/${photographerFirstname}/${this._media.image}"  class="lightbox-modal__img" alt="${this._media.title}" />
                <p>${this._media.title}</p>
            `
        } else {
            modal = `
                <video controls class="lightbox-modal__img">
                    <source src="/assets/photographers/${photographerFirstname}/${this._media.video}">
                </video> 
                <p>${this._media.title}</p>
            `
        }

        div.innerHTML = modal;
        return div;
    }
}