const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const mapImgs = document.querySelectorAll(".map-image");
let currentlySelected = 0;
prevBtn.disabled = true;


function switchCityMap() {
    prevBtn.addEventListener('click', function(){
        mapImgs[currentlySelected].classList.remove("active");
        currentlySelected --;
        mapImgs[currentlySelected].classList.add("active");
        nextBtn.disabled = false;
    
        if (currentlySelected === 0) {
            prevBtn.disabled = true
        };
    });
    
    nextBtn.addEventListener('click', function(){
        mapImgs[currentlySelected].classList.remove("active");
        currentlySelected ++;
        mapImgs[currentlySelected].classList.add("active");
        prevBtn.disabled = false;
        if (mapImgs.length === currentlySelected + 1) {    
        nextBtn.disabled = true;
        };    
    });
}

switchCityMap();


