// App State //
let total = 0;

// Cached Elements //
let plus        = document.getElementById("plus");
let minus       = document.getElementById("minus");
let topNumber   = document.querySelector(".top");
let botNumber   = document.querySelector("input");

// Event Listeners //
plus.addEventListener("click", handleClick);
minus.addEventListener("click", handleClick);


// Functions //
function render() {
    if (total < 0) {
        topNumber.style.color = "red";
    }
    else {
        topNumber.style.color = "black";
    }
    topNumber.innerHTML = total;
}

function handleClick(event) {
    let bottomValue = parseInt(botNumber.value);

    if (event.target.id === "plus") {
        total += bottomValue;
    }
    if (event.target.id === "minus") {
        total -= bottomValue;
    }
    render();
}