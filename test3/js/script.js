const zip = document.querySelector('.form-group input[name="zip"');
const inputs = document.querySelectorAll('.form-group input');
const sendButton = document.querySelector('button[type="submit"]');
const txtArea = document.querySelector('textarea[name="message"]');
const form = document.querySelector('form.contentform');
const userMsg = document.querySelector('#output');
const mainOutputs = document.querySelectorAll('main output');
const changeBtn = document.querySelector('#output .button-contact');


sendButton.addEventListener('click', sendHandler);

txtArea.addEventListener('keyup', allowSend);

changeBtn.addEventListener('click', corectMsg);

for (let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('keyup', allowSend);
}
zip.addEventListener('keydown', digitsFilter);

function sendHandler(event) {
    event.preventDefault();
    insertFields();
    form.classList.add('hidden');
    userMsg.classList.remove('hidden');
}

function corectMsg(event){
    event.preventDefault();
    form.classList.remove('hidden');
    userMsg.classList.add('hidden');
}

function allowSend() {
    if (Array.from(inputs).find(item => item.value == '') === undefined && txtArea.value != '') {
        sendButton.removeAttribute('disabled');
    }
}
function digitsFilter(event) {
    if (event.key.length == 1 && isNaN(parseInt(event.key))) {
        event.preventDefault();
    }
}

function insertFields() {
    for (let i = 0; i < inputs.length; i++) {

        let outputField = document.querySelector('#output output#' + inputs[i].name);
        if (outputField) {
            outputField.value = inputs[i].value;
        }

    }
    document.querySelector('output#message').value = txtArea.value;
}
/**
 * Created by Alla on 7/19/2017.
 */

/**
 * Created by Alla on 8/8/2017.
 */
