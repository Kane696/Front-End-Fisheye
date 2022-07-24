function photographerFactory(data) {
    const { name, id, city, country, tagline, price, portrait } = data;

    const picture = `assets/photographers/Photographers-ID-Photos/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        const link = document.createElement( 'a' );
        link.setAttribute("href", "http://127.0.0.1:5500/Front-End-Fisheye/photographer.html?id="+id);
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture);
        img.setAttribute("alt", "");
        const h2 = document.createElement( 'h2' );
        h2.textContent = name;
        link.appendChild(img);
        link.appendChild(h2);
        const h3 = document.createElement('h3');
        h3.textContent = city + ', ' + country;
        const p1 = document.createElement('p');
        p1.textContent = tagline;
        const p2 = document.createElement('p');
        p2.textContent = price + '€/jour';
        
        let arr = [];
        arr =[link, h3, p1, p2];
        appendElement(article, arr);
        

        return (article);
    }

    return { name, id, city, country, tagline, price, picture, getUserCardDOM }
}

function appendElement(parent, arr){
    arr.forEach(element => {
        parent.appendChild(element)
    });
}