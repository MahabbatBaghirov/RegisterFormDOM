let form = document.querySelector(".form");
let nameInput = document.querySelector(".name");
let surnameInput = document.querySelector(".surname");
let imgInput = document.querySelector(".file");
let cardsWrapper = document.querySelector(".users");

let isDeleting = undefined;
let img = "";

imgInput.addEventListener("change",(e)=>{
    const fr = new FileReader();
    fr.readAsDataURL(imgInput.files[0])
    fr.addEventListener("load",()=>{
        const url = fr.result
        if (imgInput.files[0].type.includes("image")) {
            img=url;
        }
        else {
            alert("Please, choose image");
            imgInput.value = "";
        }
    })
})

function createList(register){
    cardsWrapper.innerHTML += `<div class="user-list">
    <img style="width:45px; height:45px" src="${register.imageURL}" alt="">
    <p>${register.name} ${register.surname}</p>
    <i class="fa-solid fa-trash remove"></i></div>`
    let deleteBtn = document.querySelectorAll(".remove");
    deleteBtn.forEach((btn)=>{
        btn.addEventListener("click",()=>{
            btn.parentElement.remove();
        })
    });
}

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    const register = {
        name: nameInput.value,
        surname: surnameInput.value,
        imageURL: img
      };
      nameInput.value = "";
      surnameInput.value = "";
      imgInput.value = "";
      
      createList(register);
});


