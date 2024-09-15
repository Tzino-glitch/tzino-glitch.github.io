document.addEventListener("DOMContentLoaded", () => {

const images = document.querySelector("img");

for(const image of images) {
    fetch("https://dog.ceo/api/breeds/image/random")
    .then(response =>response.json())
    .then(data => {
        images.src = data.message
        images.width = 100;
        images.height = 100;

    })
}

})

     