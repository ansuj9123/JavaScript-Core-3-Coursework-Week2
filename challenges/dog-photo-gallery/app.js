let button = document.getElementById("button1")

let list = document.getElementById("list")

button.addEventListener("click", addImage)

function addImage() {
    fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        console.log(data.message);
        let li = document.createElement("li")
        li.innerHTML = `<img src="${data.message}" /> <p>${data.status}</p>`

        list.appendChild(li)

    })
    .catch((error) => {
        console.log(error);
    })
    
   
}