let button = document.querySelector("#button");
let texttop = document.querySelector("#text-top");
let textdown = document.querySelector("#text-down");
let arr = [];
let i = 0;

class TextString {
  constructor(text, author) {
    this.Text = text;
    this.Author = author;
  }
}

button.addEventListener("click", function () {
  fetch("https://quote-garden.herokuapp.com/api/v3/quotes/random")
    .then((response) => response.json())
    .then(function (data) {
      arr.push(data);
      let newText = new TextString(
        arr[i].data[0].quoteText,
        arr[i].data[0].quoteAuthor
      );
      i++;
      TextValue(newText);
    });
});

function TextValue(text) {
  texttop.textContent = text.Text;
  textdown.textContent = text.Author;
}
