class Likes {
    constructor() {
        this._photographerSectionPortfolio = document.querySelector(".photographer-section__portfolio");
        this._likesSum = document.querySelector(".likes-sum");
    }

    updateLike() {
        this._photographerSectionPortfolio.addEventListener("click", (e) => {
            if(e.target.classList.contains("like")) {
                // Get the current like number
                let like = parseInt(e.target.previousElementSibling.innerText);
                // Get the current like sum
                let likesSum = parseInt(this._likesSum.textContent);
                if(e.target.classList.contains("active-like")) {
                    like -= 1;
                    likesSum -= 1;
                    e.target.style.fontWeight = "400";
                } else {
                    like += 1;
                    likesSum += 1;
                    e.target.style.fontWeight = "bold";
                }
                e.target.previousElementSibling.innerText = like;
                this._likesSum.textContent = likesSum;
                e.target.classList.toggle("active-like");
            }
        });
    }
}