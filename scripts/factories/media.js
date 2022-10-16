function mediaFactory(data, photographer) {
    const { id, photographerId, title, image, likes, date, price, video } = data;
    

    const photographerName = photographer.name.split(' ')[0];
    
    function getUserPortfolioCardDOM() {
        let arr = [];
        
        const link = document.createElement( 'a' );

        let linkAttributes = {
            href: "#",
            class: "media-link"
        }
        
        setAttributes(link, linkAttributes)

        if(data.hasOwnProperty("image")){
            const pix = `assets/photographers/${photographerName}/${data.image}`;
            let img = document.createElement('img');
            let attributes = {
                src: pix,
                alt: title
            }
            setAttributes(img, attributes);
            link.appendChild(img);
            arr.push(link);
        } else{
            const vid = `assets/photographers/${photographerName}/${data.video}`;
            let video = document.createElement('video');
            let scrVideo = document.createElement('source');
            video.appendChild(scrVideo);
            video.setAttribute('controls', true)
            let scrAttributes = {
                src: vid,
                type: "video/mp4"
            }

            setAttributes(scrVideo, scrAttributes);
            link.appendChild(video);
            arr.push(link);
        }

        const article = document.createElement( 'article' );
        const div = document.createElement('div');
        const h3 = document.createElement( 'h3' );
        h3.textContent = title;
        const p = document.createElement('p');
        p.textContent = likes;

        div.appendChild(h3)
        div.appendChild(p)

        arr.push(div);
        appendElement(article, arr);
        return (article);
    }

    function getEncart(){

        const div = document.createElement('div');
        div.classList.add('photographer-encart__container');
        const p1 = document.createElement('p');
        p1.textContent = likes;
        const p2 = document.createElement('p');
        p2.textContent = photographer.price + '€ / jour';

        let encartArr = [];
        encartArr = [p1, p2];
        appendElement(div, encartArr);
        return (div);
    }

    return { id, photographerId, title, image, likes, date, price, video, getUserPortfolioCardDOM, getEncart }
}

