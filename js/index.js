
function randomNumber() {
    return Math.floor(Math.random() * 6) + 1;
}

function play() {
    let results = new Array;
    let img = document.querySelectorAll("img");

    for (let i = 0; i < 2; i++) {
        let index = randomNumber();
        img[i].setAttribute('src', 'img/dice' + index + ".png");
        results.push(index);
    }

    if (results[0] > results[1]) {
        document.querySelector('h1').innerHTML = "Plyer 1 wins!"
    } else if (results[0] === results[1]) {
        document.querySelector('h1').innerHTML = "A tie!"
    } else {
        document.querySelector('h1').innerHTML = "Plyer 2 wins!"
    }
}
