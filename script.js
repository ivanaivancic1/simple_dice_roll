var randomNumber1 = Math.floor(Math.random() * 6 + 1);
var image1 = document.getElementById("kocka1");
var imageSource1 = "./Assets/dice-" + randomNumber1 + ".png";
image1.setAttribute("src", imageSource1)


var randomNumber2 = Math.floor(Math.random() * 6 + 1);
var image2 = document.getElementById("kocka2");
var imageSource2 = "./Assets/dice-" + randomNumber2 + ".png";
image2.setAttribute("src", imageSource2)

var ispisPobjede = document.getElementById("ispis-pobjeda");


if (randomNumber1 > randomNumber2) {
    ispisPobjede.innerHTML = " 🥳 Igrač br. 1 pobjeđuje!"
} else if (randomNumber1 < randomNumber2) {
    ispisPobjede.innerHTML = "Igrač br. 2 pobjeđuje! 🥳 "
} else (
    ispisPobjede.innerHTML = "Neriješeno je."
)