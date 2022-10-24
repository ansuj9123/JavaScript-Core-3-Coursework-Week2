let image = document.getElementById("randomImage");

function getImage() {
  fetch("https://xkcd.now.sh/?comic=latest")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data.img);
      image.src = data.img;
    })
    .catch((error) => {
      console.log(error.message);
    })
}
getImage();
