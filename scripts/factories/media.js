function mediaFactory(data, photographer) {
    const { id, photographerId, title, image, likes, date, price, video } = data;

    const photographerName = photographer.name.split(' ')[0];
    const picture = `assets/photographers/Photographers-ID-Photos/${photographer.portrait}`;
    
    function getPhotographerInfos(){
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
        appendElement(div, photographerArr);

        return (div);
    }

    function getUserPortfolioCardDOM() {
        let arr = [];
        if(data.hasOwnProperty("image")){
            const pix = `assets/photographers/${photographerName}/${data.image}`;
            let img = document.createElement('img');
            let attributes = {
                src: pix,
                alt: title
            }
            setAttributes(img, attributes)
            arr.push(img)
        } else{
            
            const vid = `assets/photographers/${photographerName}/${data.video}`;
            let video = document.createElement('video');
            let scrVideo = document.createElement('source');
            video.appendChild(scrVideo);
            video.setAttribute('controls', true)
            let scrAttributes = {
                src: vid,
                type: "video/mp4",
                
            }

            setAttributes(scrVideo, scrAttributes)
            
            arr.push(video);
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

    //     const initialValue = 0;
    //     const sumWithInitial = arr.reduce(
    //     (previousValue, currentValue) => previousValue + currentValue,
    //     initialValue
    //     );
    
    //     console.log(sumWithInitial);

        

        const p1 = document.createElement('p');
        p1.textContent = likes;
        const p2 = document.createElement('p');
        p2.textContent = photographer.price + '€ / jour';
        return (p2);
    }

   
    return { id, photographerId, title, image, likes, date, price, video, getPhotographerInfos, getUserPortfolioCardDOM, getEncart }
}



// Set attributes to element
function setAttributes(element, attributes){
    Object.keys(attributes).forEach(attr => {
        element.setAttribute(attr, attributes[attr]);
    })
}

function appendElement(parent, arr){
    arr.forEach(element => {
        parent.appendChild(element);
    });
}


// function insertElementBefore(parent, arr, elementBefore){
//     arr.forEach(element => {
//         parent.insertBefore(element, elementBefore);
//     });
// }