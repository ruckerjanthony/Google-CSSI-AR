console.log("my first js file works better now");

var cookies=[
  "chocolate chip",
  "the lemon ones",
  "thin mints",
  "oreos",
  "samoas",
  "oatmeal no raisin"
];

function eat(food) {
  console.log('I just ate ' + cookies);
}

function eatCookies() {
 for (var i=0; i<cookies.length; i= i+1) {
  eat(cookies [i]);
}
}

var eatButton= $(".devour");
eatButton.on("click", eatCookies);

var text= $(".myClass");

var colorButton= $(".color");
eatButton.on("click", function() {

text.addClass("green");
});
