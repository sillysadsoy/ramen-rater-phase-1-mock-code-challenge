const BASEURL = 'http://localhost:3000/ramens';

const form = document.querySelector('form');
const divEl = document.querySelector('div#ramen-menu')

const detailImg = document.querySelector('div#ramen-detail img')
const detailH2 = document.querySelector('div#ramen-detail h2')
const detailH3 = document.querySelector('div#ramen-detail h3')
const rating = document.querySelector('#rating');
const comment = document.querySelector('#comment');

fetch(BASEURL)
.then(resp => resp.json())
.then(array => {
    for(ramens of array){
        createImg(ramens);
    }
})

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const newName = document.querySelector('form #new-name').value;
    const newRest = document.querySelector('form #new-restaurant').value;
    const newRamImg = document.querySelector('form #new-image').value;
    const newRate = document.querySelector('form #new-rating').value;
    const newComm = document.querySelector('form #new-comment').value;
    // console.log(newName)
    // console.log(newName);
    // const newRamObject = {
    //     name: newName,
    //     restaurant: newRest,
    //     image: newRamImg,
    //     rating: newRate,
    //     comment: newComm
    // }
    const newSubImg = document.createElement('img');
    newSubImg.src = newRamImg;
    divEl.appendChild(newSubImg);
    form.reset();
    

})

function createImg(obj) {
    const newImage = document.createElement('img');
    newImage.src = obj.image;
    newImage.id = obj.id;
    divEl.appendChild(newImage);

    newImage.addEventListener('click', (e) => {
        fetch(`http://localhost:3000/ramens/${newImage.id}`)
        .then(resp => resp.json())
        .then(data => {
            detailImg.src = data.image;
            detailH2.textContent = data.name;
            detailH3.textContent = data.restaurant;
            rating.textContent = data.rating;
            comment.textContent = data.comment;
        })
    })

}