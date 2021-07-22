let button = document.querySelector("#button");
let arr = [];
let arrAuthor = [];
let clear = [];
button.addEventListener("click", function () {
  fetch("https://quote-garden.herokuapp.com/api/v3/quotes/random")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      let Text = data.data[0].quoteText;
      let Author = data.data[0].quoteAuthor;
      arr.push(Text);
      arrAuthor.push(Author);
    });

  document.getElementById("text-top").innerHTML = JSON.stringify(arr).slice(
    1,
    -1
  );

  document.getElementById("text-down").innerHTML = JSON.stringify(
    arrAuthor
  ).slice(1, -1);
});

//console.log(data.data[0].quoteText);
//console.log(data.data[0].quoteAuthor);
//.then(function (response) {
//return response.json();
//})
