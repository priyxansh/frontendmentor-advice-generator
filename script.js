let regenerateButton = document.querySelector(".regenerate");
let adviceID = document.querySelector(".advice-id");
let adviceSpan = document.querySelector(".advice > span");

let populateAdvice = async () => {
    let response = await fetch(
        "https://api.adviceslip.com/advice?t=" + Math.random()
    );
    let advice = (await response.json()).slip;
    adviceSpan.textContent = advice.advice;
    adviceID.textContent = advice.id;
};

regenerateButton.addEventListener("click", populateAdvice);
