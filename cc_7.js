const input = document.querySelector('#headlineInput');
const button = document.querySelector('#updateButton');
const cta = document.querySelector('#cta');

//update CTA
button.addEventListener('click', function () {
    const newText = input.value;
    if (newText.trim() !== "") {
        cta.textContent = newText;
    }
});