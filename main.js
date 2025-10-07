const closeBtn = document.querySelector(".close")
const formContainer = document.querySelector("#container")

function closeFunc(){
    alert("Are You Sure?")
    formContainer.style.display = "none"
}

closeBtn.addEventListener("click",closeFunc)