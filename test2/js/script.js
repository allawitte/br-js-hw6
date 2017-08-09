const request = new XMLHttpRequest();
const fromBlock = document.querySelector('#from');
const toBlock = document.querySelector('#to');
const loaded = document.querySelector('#loader');
const mainBlock = document.querySelector('#content');
const output = document.querySelector('#result');
const amount = document.querySelector('#source');

var fromCurrency = 1;
var toCurrency = 1;

request.open('GET', 'https://neto-api.herokuapp.com/currency');
request.send();
request.addEventListener('load', makeCurrencyList);
request.addEventListener('loadstart', startHandler);
request.addEventListener('loadend', endHandler);

fromBlock.addEventListener('change', getFromValue);
toBlock.addEventListener('change', getToValue);
amount.addEventListener('input', calcRate);

function calcRate(){
    output.value = amount.value*(toCurrency/fromCurrency);
}

function getFromValue(event){
    fromCurrency = event.target.value;
    calcRate()
}

function getToValue(event){
    toCurrency = event.target.value;
    calcRate()
}

function getCurrencyList() {
    if (request.status == 200) {
        const currency = Array.from(JSON.parse(request.responseText));
        return currency.reduce((sum, item) => {
            return sum + '<option value="' + item.value + '">' + item.title + '</option>';
        }, '');
    }

}

function makeCurrencyList() {
    let list = getCurrencyList();
    toBlock.innerHTML = list;
    fromBlock.innerHTML = list;
}
function startHandler() {
    loaded.classList.remove('hidden');
}
function endHandler() {
    loaded.classList.add('hidden');
    mainBlock.classList.remove('hidden');
}


/**
 * Created by Alla on 7/19/2017.
 */
