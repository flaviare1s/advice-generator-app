const adviceContainer = document.querySelector('#adviceText')
const adviceID = document.querySelector('#adviceID')
const adviceButton = document.querySelector('#adviceButton')


function getAdvice() {
    fetch('https://api.adviceslip.com/advice')
    .then(response => response.json())
    .then(data => {
        adviceContainer.innerText = data.slip.advice
    })
    .catch(error => {
        console.error(error)
    })
}

adviceButton.addEventListener('click', getAdvice)