//-------- SAME VARIABLES USED BY SEPARATE FUNCTIONS --------//
const form = document.querySelector('#new-ramen');
const editForm = document.querySelector('#edit-ramen');

const divEl = document.querySelector('div#ramen-menu');

const rating = document.querySelector('#rating');
const comment = document.querySelector('#comment');


//-------- INITIAL RAMEN IMAGES --------//
fetch('http://localhost:3000/ramens')
.then(resp => resp.json())
.then(array => {
    for(ramens of array){
        createImg(ramens);
    }
})


//-------- EVENT LISTENERS --------//
form.addEventListener('submit', e => {
    e.preventDefault();
    // const newName = document.querySelector('form #new-name').value;
    // const newRest = document.querySelector('form #new-restaurant').value;
    const newRamImg = document.querySelector('form #new-image').value;
    // const newRate = document.querySelector('form #new-rating').value;
    // const newComm = document.querySelector('form #new-comment').value;
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
});

editForm.addEventListener('submit', e => {
    e.preventDefault();
    const newRating = document.querySelector('#new-rating2');
    const newComment = document.querySelector('#new-comment2').value;
    rating.textContent = newRating.value;
    comment.textContent = newComment;
    editForm.reset();
});


//-------- ADDING IMAGES AND LISTENER IN SUIT --------//
function createImg(obj) {
    const newImage = document.createElement('img');
    newImage.src = obj.image;
    newImage.id = obj.id;
    divEl.appendChild(newImage);

    newImage.addEventListener('click', (e) => {
        fetch(`http://localhost:3000/ramens/${newImage.id}`)
        .then(resp => resp.json())
        .then(data => {
            const detailImg = document.querySelector('div#ramen-detail img');
            detailImg.src = data.image;
            const detailH2 = document.querySelector('div#ramen-detail h2');
            detailH2.textContent = data.name;
            const detailH3 = document.querySelector('div#ramen-detail h3');
            detailH3.textContent = data.restaurant;
            rating.textContent = data.rating;
            comment.textContent = data.comment;
        })
    })

}
