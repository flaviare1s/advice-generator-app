const adviceContainer = document.querySelector('#adviceText')
const adviceID = document.querySelector('#adviceID')
const adviceButton = document.querySelector('#adviceButton')


function getAdvice() {
    fetch('https://api.adviceslip.com/advice')
    .then(response => response.json())
    .then(data => {
        adviceContainer.innerHTML = data.slip.advice
        adviceID.innerHTML = data.slip.id
    })
    .catch(error => {
        console.error(error)
    })
}

window.addEventListener('load', getAdvice)

adviceButton.addEventListener('click', getAdvice)