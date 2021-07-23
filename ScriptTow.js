let button = document.querySelector("#button");
let textfeld = document.querySelector("#text");
let arr = [];
let arrAuthor = [];
let i = 0;

button.addEventListener("click", function () {
  fetch("https://quote-garden.herokuapp.com/api/v3/quotes/random")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      let Text = data.data[0].quoteText;
      let Author = data.data[0].quoteAuthor;
      document.getElementById("text-top").innerHTML = Text;
      document.getElementById("text-down").innerHTML = Author;
    });
});
