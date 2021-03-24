body = document.querySelector(".body");
toggleBtn = document.querySelector(".toggle-btn");
circle = document.querySelector(".white-circle");
cards = document.querySelectorAll(".card");
images = document.querySelectorAll(".image");
text = document.querySelectorAll(".wish, h1, .user-text p")

toggleBtn.addEventListener('click',()=>{

    body.classList.toggle("dark");
    toggleBtn.classList.toggle("green");
    circle.classList.toggle("move");
    circle.classList.toggle("dark");

    cards.forEach(cards => {       
        cards.classList.toggle("card-dark");
    });

    images.forEach(images =>{

        images.classList.toggle("image-dark")
    });

    text.forEach(text =>{
        text.classList.toggle("brightGrey")
    })
})