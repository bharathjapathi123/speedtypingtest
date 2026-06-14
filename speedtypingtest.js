let quoteDisplayEl = document.getElementById("quoteDisplay");
let submitBtnEl = document.getElementById("submitBtn");
let resetBtnEl = document.getElementById("resetBtn");
let quoteInputEl = document.getElementById("quoteInput");
let resultEl = document.getElementById("result");
resultEl.style.fontSize = "18px";
let timerEl = document.getElementById("timer");
let time = 0;
let intervalId = null;
let spinnerEl = document.getElementById("spinner");





function generateQuote() {
    spinnerEl.classList.remove("d-none");
    let timerEl = document.getElementById("timer");
    timerEl.style.fontSize = "40px";

    function timer() {
        time = time + 1
        timerEl.textContent = time
    }
    intervalId = setInterval(timer, 1000)

    let options = {
        method: "GET"
    }

    let url = "https://apis.ccbp.in/random-quote";
    fetch(url, options)
        .then(function(response) {
            return response.json()
        })
        .then(function(jsonData) {
            spinnerEl.classList.add("d-none");
            quoteDisplayEl.textContent = jsonData.content;
        })

    function submitFunction() {
        if (quoteInputEl.value === quoteDisplayEl.textContent) {
            clearInterval(intervalId);
            resultEl.textContent = "you typed in " + time + " seconds";
            time = 0;
        } else {
            resultEl.textContent = "you typed incorrect sentence";
        }
    }

    submitBtnEl.onclick = function(event) {
        submitFunction();
    }
}


generateQuote()




resetBtnEl.onclick = function(event) {

    time = 0
    clearInterval(intervalId);

    generateQuote()
}